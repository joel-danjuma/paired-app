"use client";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

import React from "react";

export const SignOutButton = () => {
  return (
    <Button className="w-[100px] gap-1.5 text-sm" onClick={() => signOut()}>
      Signout
    </Button>
  );
};
