import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
