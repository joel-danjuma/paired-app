"use client";
// import { useFormStatus } from "react-dom";

const RoomAdFormButton = () => {
  // const { pending } = FormStatus();
  return (
    <button className="flex justify-center w-full text-white bg-purple-900 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-xl text-lg">
      {/* {pending ? "Posting your Ad ..." : "Create Ad"} */}
      {"Create Ad"}
    </button>
  );
};

export default RoomAdFormButton;
