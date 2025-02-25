"use client";
import { Spinner } from "@heroui/spinner";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
