"use client";
import RoomAdFormButton from "@/app/dashboard/ui/createAdFormButton";
import { UploadButton, UploadDropzone } from "@/lib/utils";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Select, SelectItem } from "@nextui-org/select";
import { Input, Textarea } from "@nextui-org/input";
import img from "@/public/pairedLogo.png";
import Image from "next/image";
import React from "react";

const gender = ["Male", "Female", "Prefer Not to Say"];

const RoommateAdForm = () => {
  const [imageUrl, setImageUrl] = React.useState<string>("");

  return (
    <section className="h-full ">
      <form className="py-2 grid grid-flow-row  lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="mt-4 space-y-2 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="name"
            label="Name"
            placeholder="Full Name"
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-2 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="age"
            label="Age"
            placeholder="age"
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Select
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
        </div>

        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="location"
            label="Location"
            placeholder="Full Name"
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="name"
            label="Interests"
            placeholder="Full Name"
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="name"
            label="Occupation"
            placeholder="Full Name"
            labelPlacement="outside"
          />
        </div>

        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <div className="mt-1">
            <Textarea
              size="lg"
              className="min-h-[240px]"
              name="description"
              labelPlacement="outside"
              label="label"
              placeholder="What are you working on?"
              minRows={8}
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
          <Checkbox size="md" value={"Smoking"}>
            Smoking
          </Checkbox>
          <Checkbox size="md" value={"Pets"}>
            Pets
          </Checkbox>
          <Checkbox size="md" value={"Single"}>
            Single
          </Checkbox>
        </div>

        <div className="lg:col-span-1 col-span-full flex justify-center items-center">
          <RoomAdFormButton />
        </div>
      </form>
    </section>
  );
};

export default RoommateAdForm;
