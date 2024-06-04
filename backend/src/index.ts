import { Hono } from "hono";
import { cors } from "hono/cors";
import { userRouter } from "./routes/user.route";
import { blogRouter } from "./routes/blog.route";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/api/*", cors());
app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

// TODO: let the users also modify there creds
// TODO: Setup a google auth in it

export default app;
