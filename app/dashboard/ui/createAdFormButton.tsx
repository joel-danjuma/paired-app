"use client";

import { Button } from "@heroui/button";
import { useFormStatus } from "react-dom";

/**
 * Do not use if you haven't read my content
 */
function CreateAdFormButton({ label = "Submit" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} type="submit">
      {pending ? "Please wait..." : label}
    </Button>
  );
}

export { CreateAdFormButton };
