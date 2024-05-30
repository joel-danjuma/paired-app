"use client";

import { Button } from "@nextui-org/button";
import { useFormStatus } from "react-dom";

/**
 * Do not use if you haven't read my content
 */
function CreateAdFormButton({ label = "Update" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Please wait..." : label}
    </Button>
  );
}

export { CreateAdFormButton };
