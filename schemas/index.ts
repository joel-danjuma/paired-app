import * as z from "zod";

export const LoginSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({
    message: "Invalid Email Address",
  }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Full name is required",
  }),

  email: z.string().email({
    message: "Invalid Email Address",
  }),

  password: z
    .string()
    .min(1, {
      message: "password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[A-Z]/, {
      message: "At least one capital letter is required",
    })
    .regex(/[0-9]/, {
      message: "At least one number is required",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "At least one special character is required",
    }),
});

export const ProfileSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  age: z.number().optional(),
  occupation: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  bio: z.string().optional(),
  hobbies: z.string().optional(),
  gender: z.string().optional(),
  pets: z.boolean().optional(),
  smoking: z.boolean().optional(),
  userId: z.string(),
});
