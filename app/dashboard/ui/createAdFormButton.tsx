"use client";
// import { useFormStatus } from "react-dom";

const RoomAdFormButton = () => {
  // const { pending } = FormStatus();
  return (
    <button className="flex justify-center w-full lg:w-[240px] text-black  bg-gray-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-xl text-lg">
      {/* {pending ? "Posting your Ad ..." : "Create Ad"} */}
      {"Create Ad"}
    </button>
  );
};

export default RoomAdFormButton;
