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

userRouter.post("/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const signupRes = signupInput.safeParse(body);

    if (!signupRes.success) {
      c.status(400);
      return c.json({
        message: "Inputs are incorrect!",
        error: signupRes,
      });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    c.status(201);
    return c.json({ token: jwt });
  } catch (error) {
    c.status(500);
    return c.json({
      message: "Oops Its not. you it's us",
      error,
    });
  }
});

userRouter.post("/signin", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const signinRes = signinInput.safeParse(body);
    if (!signinRes.success) {
      c.status(400);
      return c.json({
        message: "Inputs are incorrect!",
        error: signinRes,
      });
    }
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ message: "Incorrent creds/ Unauthorized" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });
  } catch (error) {
    c.status(401);
    return c.json({ message: "Unauthorized", error });
  }
});

// userRouter.put("/forgot", async (c) => {
//   try {
//     const prisma = new PrismaClient({
//       datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate());
//     const body = await c.req.json();
//     const emailRes = forgotPassword.safeParse(body);
//     if (!forgotPassword.success) {
//       c.status(400);
//       return c.json({
//         message: "Inputs are incorrect",
//       });
//     }
//     const user = await prisma.user.findFirst({
//       where: {
//         email: body.email,
//       },
//     });
//     if (!user) {
//       c.status(403);
//       return c.json({ message: "Email not found" });
//     }
//   } catch (error) {}
// });

// TODO: Backend Changes
// TODO: take image as input steps below
// during signup ask to upload the image
// post that to r2/s3 get the url
// store the url in prisma
// prisma to get here and display that
// TODO: forgot password
// TODO: when validiting stuff make sure we read the error and send the responces accoridng to what error it give. That will make it less lazy
