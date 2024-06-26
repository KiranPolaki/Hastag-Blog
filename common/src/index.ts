import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
  pfp: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  thumbnail: z.string().optional(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  thumbnail: z.string().optional(),
  id: z.number(),
});

export const forgotPassword = z.object({
  email: z.string().email(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type forgotPassword = z.infer<typeof forgotPassword>;
