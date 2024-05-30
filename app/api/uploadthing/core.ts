import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { user } from "@nextui-org/theme";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      // This code runs on your server before upload
      const session = await auth();
      const user = session?.user;
      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError("Unauthorized");
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // console.log("Upload complete for userId:", metadata.userId);
      // console.log("file url", file.url);
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),

  mediaPost: f({
    image: { maxFileSize: "2MB", maxFileCount: 6 },
    video: { maxFileSize: "256MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const session = await auth();
      const user = await db.user.findUnique({
        where: {
          id: session?.user.id,
        },
      });

      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
