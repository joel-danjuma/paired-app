"use client";
import { CreateAdFormButton } from "@/app/dashboard/ui/createAdFormButton";
import { UploadButton, UploadDropzone } from "@/lib/utils";
import { Checkbox } from "@heroui/checkbox";
import { Select, SelectItem } from "@heroui/select";
import { Input, Textarea } from "@heroui/input";
import { testForm } from "@/actions/actions";
import { Button } from "@heroui/button";
import img from "@/public/pairedLogo.png";
import Image from "next/image";
import React from "react";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition } from "react";

const gender = ["Male", "Female", "Prefer Not to Say"];

const RoommateAdForm = () => {
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [petsIsSelected, setPetsIsSelected] = React.useState<boolean>(false);
  const [smokingIsSelected, setSmokingIsSelected] =
    React.useState<boolean>(false);
  const [singleIsSelected, setSingleIsSelected] =
    React.useState<boolean>(false);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      age: 18,
      gender: "",
      location: "",
      occupation: "",
      bio: "",
      interests: [""],
      image: imageUrl || "",
      pets: false,
      smoking: false,
      single: false,
    },
  });

  // const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
  //   startTransition(() => {
  //     testForm(values);
  //   });
  // };

  return (
    <section className="h-full ">
      <Form {...form}>
        <form
          // action={testForm}
          // onSubmit={form.handleSubmit(onSubmit)}
          className="py-2 grid grid-flow-row  lg:grid-cols-2 grid-cols-1 gap-4"
        >
          <div className="mt-4 space-y-2 lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      size="lg"
                      name="name"
                      label="Name"
                      placeholder="Full Name"
                      labelPlacement="outside"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 space-y-2 lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      size="lg"
                      name="age"
                      label="Age"
                      type="number"
                      placeholder="age"
                      value={field.value?.toString()}
                      labelPlacement="outside"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      {...field}
                      size="lg"
                      label="Gender"
                      labelPlacement="outside"
                      placeholder="gender"
                    >
                      {gender.map((item, i) => (
                        <SelectItem className="py-4" key={i}>
                          {item}
                        </SelectItem>
                      ))}
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      size="lg"
                      name="location"
                      label="Location"
                      placeholder="Locatioin"
                      labelPlacement="outside"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      size="lg"
                      name="interests"
                      label="Interests"
                      placeholder="Eg Running, Soccer..."
                      labelPlacement="outside"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div> */}
          <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      size="lg"
                      name="occupation"
                      label="Occupation"
                      placeholder="Student, Professional, Corp Member"
                      labelPlacement="outside"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
            <div className="mt-1">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        size="lg"
                        className="min-h-[240px]"
                        name="bio"
                        labelPlacement="outside"
                        label="Bio"
                        placeholder="Tell us a little about yousrself?"
                        minRows={8}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-4 lg:mt-12 mt-4">
            <div className="space-y-1 lg:col-span-1 col-span-full lg:w-[558.5px] lg:h-[150px] rounded-lg bg-gray-100 relative p-4 flex justify-center items-center">
              {imageUrl.length ? (
                <Image
                  className="rounded-lg"
                  src={imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                />
              ) : (
                <Image
                  className="rounded-lg opacity-35"
                  src={img}
                  alt="img"
                  width={200}
                  height={100}
                />
              )}
            </div>
            <UploadButton
              endpoint="imageUploader"
              className="ut-button:w-full ut-button:bg-gray-300"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
              }}
            />
          </div>

          <div className="flex justify-around items-center lg:col-span-1 col-span-full">
            <FormField
              control={form.control}
              name="smoking"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      {...field}
                      size="md"
                      name="smoking"
                      value={smokingIsSelected.toString()}
                      onValueChange={setSmokingIsSelected}
                    >
                      Smoking
                    </Checkbox>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pets"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      {...field}
                      size="md"
                      name="pets"
                      value={petsIsSelected.toString()}
                      onValueChange={setPetsIsSelected}
                    >
                      Pets
                    </Checkbox>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="single"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      {...field}
                      size="md"
                      name="single"
                      value={singleIsSelected.toString()}
                      onValueChange={setSingleIsSelected}
                    >
                      Single
                    </Checkbox>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="lg:col-span-1 col-span-full flex justify-center items-center">
            <CreateAdFormButton />
            {/* <Button type="submit">Submit</Button> */}
          </div>
        </form>
      </Form>
    </section>
  );
};

export default RoommateAdForm;
