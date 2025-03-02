"use client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/actions";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import FormError from "../../ui/form-error";
import FormSuccess from "../../ui/form-success";
import { Button } from "@/components/ui/button";
import { startTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeFilledIcon } from "../../ui/eyeFilledIcon";
// import { Input } from "@/components/ui/gradient-input";
import { EyeSlashFilledIcon } from "../../ui/eyeSlashedFilled";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    // client-side-validation
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        if (data) {
          setError(data.error);
          setSuccess(data.success);
        } else {
          return;
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 min-w-[320px] min-h-[200px]"
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    name="password"
                    type={isVisible ? "text" : "password"}
                    placeholder={"8+ Characters"}
                    endContent={
                      <Button
                        className="bg-opacity-0 border-0 "
                        variant="ghost"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                      </Button>
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            {/* <Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link> */}
          </div>
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
