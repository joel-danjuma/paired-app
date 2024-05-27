"use client";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

import React from "react";

export const SignOutButton = () => {
  return (
    <Button
      className="w-full gap-1.5 text-lg text-white bg-[#6359E9]"
      onClick={() => signOut()}
    >
      Signout
    </Button>
  );
};
