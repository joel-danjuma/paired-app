"use client";
import React from "react";
import { UploadButton } from "@/lib/utils";

const ImageUploadButton = () => {
  const [imageUrl, setImageUrl] = React.useState<string>("");

  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => console.log(res)}
      />
    </div>
  );
};

export default ImageUploadButton;
