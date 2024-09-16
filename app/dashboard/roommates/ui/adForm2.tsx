"use client";
import { CreateAdFormButton } from "@/app/dashboard/ui/createAdFormButton";
import { UploadButton, UploadDropzone } from "@/lib/utils";
import { Checkbox } from "@nextui-org/checkbox";
import { Select, SelectItem } from "@nextui-org/select";
import { Input, Textarea } from "@nextui-org/input";
import { testForm2 } from "@/actions/actions";
import { Button } from "@nextui-org/button";
import img from "@/public/pairedLogo.png";
import Image from "next/image";
import { toast } from "sonner";
import React from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition } from "react";
import { FileUploader } from "@/components/file-uploader";
import { UploadedFilesCard } from "@/components/uploaded-files-card";
import { getErrorMessage } from "@/lib/handle-error";
import { useUploadFile } from "@/hooks/use-upload-file";

const gender = ["Male", "Female", "Prefer Not to Say"];

const RoommateAdForm = () => {
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [petsIsSelected, setPetsIsSelected] = React.useState<boolean>(false);
  const [smokingIsSelected, setSmokingIsSelected] =
    React.useState<boolean>(false);
  const [singleIsSelected, setSingleIsSelected] =
    React.useState<boolean>(false);

  const [loading, setLoading] = React.useState(false);
  const { uploadFiles, progresses, uploadedFiles, isUploading } = useUploadFile(
    "imageUploader",
    { defaultUploadedFiles: [] }
  );

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
      images: [],
      pets: false,
      smoking: false,
      single: false,
    },
  });

  const onSubmit = async (
    values: z.infer<typeof ProfileSchema>
    // event?: React.BaseSyntheticEvent<HTMLDivElement, Event, HTMLFormElement>
  ) => {
    startTransition(() => {
      testForm2(values);
      setLoading(true);

      toast.promise(uploadFiles(values.images), {
        loading: "Uploading images...",
        success: () => {
          form.reset();
          setLoading(false);
          return "Images uploaded";
        },
        error: (err) => {
          setLoading(false);
          return getErrorMessage(err);
        },
      });
    });
  };

  return (
    <section className="h-full ">
      <Form {...form}>
        <form
          // action={testForm}
          onSubmit={form.handleSubmit(onSubmit)}
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
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <div className="space-y-6">
                  <FormItem className="w-full">
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFiles={4}
                        maxSize={4 * 1024 * 1024}
                        progresses={progresses}
                        // pass the onUpload function here for direct upload
                        // onUpload={uploadFiles}
                        disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  {uploadedFiles.length > 0 ? (
                    <UploadedFilesCard uploadedFiles={uploadedFiles} />
                  ) : null}
                </div>
              )}
            />
            <Button className="w-full" disabled={loading}>
              Save
            </Button>
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
