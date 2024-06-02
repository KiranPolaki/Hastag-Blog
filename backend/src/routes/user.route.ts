import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupInput, signinInput } from "@saiop/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// TODO: when validiting stuff make sure we read the error and send the responces accoridng to what error it give. That will make it less lazy
userRouter.post("/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
      return c.json({
        message: "Inputs are incorrect!",
      });
    }
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });
  } catch (error) {
    return c.text("invalid");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const { success } = signinInput.safeParse(body);
    if (!success) {
      return c.json({
        message: "Inputs are incorrect!",
      });
    }
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ message: "Incorrent creds" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });
  } catch (error) {
    return c.text("invalid");
  }
});
