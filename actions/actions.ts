"use server";
import * as z from "zod";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema, ProfileSchema } from "@/schemas";
import { RegisterSchema } from "@/schemas";

const session = auth();

export async function testForm(formData: FormData) {
  if (!formData) {
    console.log("Form Does not work");
  }
  console.log(`Form Data : ${formData}`);
}

// export const createRoomAd = async (formData : FormData) => {
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const propertyType = formData.get("propertyType");
//   const rent = parseInt(formData.get("rent"));
//   const bedrooms = parseInt(formData.get("bedrooms"));
//   const bathrooms = parseInt(formData.get("bathrooms"));
//   const location = formData.get("location");
//   const pets = formData.get("pets").toLowerCase() === "true";
//   // const email = formData.get("email")
//   const email = session?.user.email;
//   const smoking = formData.get("smoking").toLowerCase() === "true";
//   const serviced = formData.get("serviced").toLowerCase() === "true";
//   const serviceCharge = parseInt(formData.get("serviceCharge"));

//   const data = {
//     title,

//     description,
//     propertyType,
//     rent,
//     bedrooms,
//     bathrooms,
//     location,
//     pets,
//     smoking,
//     serviced,
//     serviceCharge,
//   };

//   // return roomAd

//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   const roomAd = await db.roomAd.create({
//     data,
//   });

//   return roomAd;

//   //   This is an amazing 3 bed Shared flat available for immediate occupation. Located in a serene and secure part of GRA port harcourt
//   //   Facilities include :
//   // - Security Post and Serviced Estate
//   // - 18hr Power supply
//   // - Good access roads to the estate
//   // - centrally located
//   // - close proximity to churches and entertainment

//   // const roomAd = await prisma.roomAd.create({
//   //     data: {
//   //         title,
//   //         description,
//   //         propertyType,
//   //         rent,
//   //         bedrooms,
//   //         bathrooms,
//   //         location,
//   //         pets,
//   //         smoking,
//   //         serviced,
//   //         serviceCharge,
//   //         created_by: {
//   //             connect: {
//   //                 id: user.id,
//   //             },
//   //         },
//   //     },
//   // })
// };

// export const createProfileCard = async (formData) => {
//   const validatedFields = ProfileSchema.safeParse(formData);
//   if (!validatedFields.success) {
//     let errorMessage = "";
//     validatedFields.error.issues.forEach((issue) => {
//       errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
//     });
//     return {
//       error: errorMessage,
//     };
//   }

//   const { userId, location, age } = validatedFields.data;

//   // const user = await db.user.findUnique({
//   //   where : {
//   //     id : validatedFields.data.userId
//   //   }
//   // })
// };

// export const createRoommateAd = async (formData) => {
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const age = formData.get("age");
//   const gender = formData.get("bathrooms");
//   const budget = formData.get("bedrooms");
//   const occupation = formData.get("rent");
//   const location = formData.get("location");
//   const pets = formData.get("pets").toLowerCase() === "true";
//   const email = formData.get("email");
//   const smoking = formData.get("smoking").toLowerCase() === "true";

//   const roommateAd = {
//     title,
//     description,
//     age,
//     gender,
//     budget,
//     occupation,
//     location,
//     pets,
//     smoking,
//   };

//   // const user = await prisma.user.findUnique({
//   //     where: {
//   //         email,
//   //     },
//   // })

//   // const roommateAd = await prisma.roommateAd.create({
//   //     data: {
//   //         title,
//   //         description,
//   //         age,
//   //         gender,
//   //         budget,
//   //         occupation,
//   //         location,
//   //         pets,
//   //         smoking,
//   //         created_by: {
//   //             connect: {
//   //                 id: user.id,
//   //             },
//   //         },
//   //     },
//   // })
//   return roommateAd;
// };

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
