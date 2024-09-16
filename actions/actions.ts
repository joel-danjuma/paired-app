"use server";
import * as z from "zod";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema, ProfileSchema } from "@/schemas";
import { RegisterSchema } from "@/schemas";

// export async function testForm(values: z.infer<typeof ProfileSchema>) {
//   const validatedFields = ProfileSchema.safeParse(values);
//   if (!validatedFields.success) {
//     let errorMessage = "";
//     validatedFields.error.issues.forEach((issue) => {
//       errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
//     });
//     console.log({
//       error: errorMessage,
//     });
//     return;
//   }
//   const {
//     name,
//     age,
//     gender,
//     location,
//     occupation,
//     bio,
//     interests,
//     image,
//     pets,
//     smoking,
//     single,
//   } = validatedFields.data;
//   const session = await auth();
//   const user = session?.user;

//   const data = {
//     name,
//     age,
//     gender,
//     location,
//     occupation,
//     bio,
//     interests,
//     image,
//     pets,
//     smoking,
//     single,
//     created_by: {
//       connect: {
//         id: user?.id,
//       },
//     },
//   };
//   await db.userProfile.create({
//     data: data,
//   });
//   console.log("User profile created : ", data);
// }

export async function testForm2(values: unknown) {
  console.log(values);
}

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    let errorMessage = "";
    validatedFields.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }
  const { email, password } = validatedFields.data;
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });
  try {
    if (existingUser) {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        // redirectTo: DEFAULT_LOGIN_REDIRECT,
      });

      return {
        success: "Log In Successful",
      };
    } else {
      return {
        error: "Sign Up Required",
      };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}

export const signup = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    let errorMessage = "";
    validatedFields.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!existingUser) {
      await signIn("credentials", {
        name: name,
        email: email,
        password: hashedPassword,
        // redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
      return {
        success: "User Created",
      };
    } else {
      return {
        error: "User already exists",
      };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credentials Error" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
