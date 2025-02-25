"use client";
// import { CreateAdFormButton } from "@/app/dashboard/ui/createAdFormButton";
// import { Select, SelectItem } from "@heroui/select";
// import { Input, Textarea } from "@heroui/input";
// import { Checkbox } from "@heroui/checkbox";
// import { testForm } from "@/actions/actions";
// import { UploadButton } from "@/lib/utils";
// import img from "@/public/pairedLogo.png";
// import Image from "next/image";
// import React from "react";
// const gender = [
//   {
//     key: "Male",
//     label: "Male",
//   },
//   {
//     key: "Female",
//     label: "Female",
//   },
// ];

// const RoommateAdForm = () => {
//   const [imageUrl, setImageUrl] = React.useState<string>("");
//   const [petsIsSelected, setPetsIsSelected] = React.useState<boolean>(false);
//   const [smokingIsSelected, setSmokingIsSelected] =
//     React.useState<boolean>(false);
//   const [singleIsSelected, setSingleIsSelected] =
//     React.useState<boolean>(false);
//   const [value, setValue] = React.useState("");
//   const interests: string[] = [];

// const handleSelectionChange = (e: {
//   target: { value: React.SetStateAction<string> };
// }) => {
//   setValue(e.target.value);
// };

//   return (
//     <section className="h-full ">
//       <form
//         action={async (formData: FormData) => {
//           const name = formData.get("name") as string;
//           const age =
//             formData.get("age") !== null
//               ? Number(formData.get("age"))
//               : undefined;
//           const gender = value;
//           const location = formData.get("location") as string;
//           const interestsRaw = formData.get("interests") as string;
//           const occupation = formData.get("occupation") as string;
//           const bio = formData.get("bio") as string;
//           const image = imageUrl;
//           const smoking = formData.get("smoking") == "true";
//           const single = formData.get("single") == "true";
//           const pets = formData.get("pets") == "true";
//           interests.push(interestsRaw);
//           const values = {
//             name,
//             age: age ?? 0,
//             gender,
//             location,
//             interests,
//             occupation,
//             bio,
//             image,
//             smoking,
//             single,
//             pets,
//           };
//           await testForm(values);
//         }}
//         className="py-2 grid grid-flow-row  lg:grid-cols-2 grid-cols-1 gap-4"
//       >
// <div className="mt-4 space-y-2 lg:col-span-1 col-span-full">
//   <Input
//     size="lg"
//     name="name"
//     label="Name"
//     placeholder="Full Name"
//     labelPlacement="outside"
//   />
// </div>
// <div className="mt-4 space-y-2 lg:col-span-1 col-span-full">
//   <Input
//     size="lg"
//     name="age"
//     label="Age"
//     placeholder="age"
//     type="number"
//     labelPlacement="outside"
//   />
// </div>
// <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
//   <Select
//     size="lg"
//     label="Gender"
//     labelPlacement="outside"
//     placeholder="gender"
//     selectedKeys={[value]}
//     onChange={handleSelectionChange}
//   >
//     {gender.map((item, i) => (
//       <SelectItem className="py-4" key={item.key}>
//         {item.label}
//       </SelectItem>
//     ))}
//   </Select>
// </div>

// <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
//   <Input
//     size="lg"
//     name="location"
//     label="Location"
//     placeholder="Locatioin"
//     labelPlacement="outside"
//   />
// </div>
// <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
//   <Input
//     size="lg"
//     name="interests"
//     label="Interests"
//     placeholder="Eg Running, Soccer..."
//     labelPlacement="outside"
//   />
// </div>
// <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
//   <Input
//     size="lg"
//     name="occupation"
//     label="Occupation"
//     placeholder="Student, Professional, Corp Member"
//     labelPlacement="outside"
//   />
// </div>

// <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
//   <div className="mt-1">
//     <Textarea
//       size="lg"
//       className="min-h-[240px]"
//       name="bio"
//       labelPlacement="outside"
//       label="Bio"
//       placeholder="Tell us a little about yousrself?"
//       minRows={8}
//     />
//   </div>
// </div>
// <div className="space-y-4 lg:mt-12 mt-4">
//   <div className="space-y-1 lg:col-span-1 col-span-full lg:w-[558.5px] lg:h-[150px] rounded-lg bg-gray-100 relative p-4 flex justify-center items-center">
//     {imageUrl.length ? (
//       <Image
//         className="rounded-lg"
//         src={imageUrl}
//         alt="img"
//         width={200}
//         height={200}
//       />
//     ) : (
//       <Image
//         className="rounded-lg opacity-35"
//         src={img}
//         alt="img"
//         width={200}
//         height={100}
//       />
//     )}
//   </div>
//   <UploadButton
//     endpoint="imageUploader"
//     className="ut-button:w-full ut-button:bg-gray-300"
//     onClientUploadComplete={(res) => {
//       setImageUrl(res[0].url);
//     }}
//   />
// </div>

// <div className="flex justify-around items-center lg:col-span-1 col-span-full">
//   <Checkbox
//     size="md"
//     name="smoking"
//     value={smokingIsSelected.toString()}
//     onValueChange={setSmokingIsSelected}
//   >
//     Smoking
//   </Checkbox>
//   <Checkbox
//     size="md"
//     name="pets"
//     value={petsIsSelected.toString()}
//     onValueChange={setPetsIsSelected}
//   >
//     Pets
//   </Checkbox>
//   <Checkbox
//     size="md"
//     name="single"
//     value={singleIsSelected.toString()}
//     onValueChange={setSingleIsSelected}
//   >
//     Single
//   </Checkbox>
// </div>

// <div className="lg:col-span-1 col-span-full flex justify-center items-center">
//   <CreateAdFormButton />
//   {/* <Button type="submit">Submit</Button> */}
// </div>
//       </form>
//     </section>
//   );
// };

// export default RoommateAdForm;

import React from "react";
import { CreateAdFormButton } from "@/app/dashboard/ui/createAdFormButton";
import { Select, SelectItem } from "@heroui/select";
import { Input, Textarea } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { testForm } from "@/actions/actions";
import { UploadButton, UploadDropzone } from "@/lib/utils";
import img from "@/public/pairedLogo.png";
import Image from "next/image";

interface PreferencesState {
  pets: boolean;
  smoking: boolean;
  single: boolean;
}

interface FormValues {
  name: string;
  age?: number;
  gender: string;
  location: string;
  interests: string[];
  occupation: string;
  bio: string;
  image: string;
  pets: boolean;
  smoking: boolean;
  single: boolean;
}

const RoommateAdForm = () => {
  const gender = [
    {
      key: "Male",
      label: "Male",
    },
    {
      key: "Female",
      label: "Female",
    },
  ];
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [preferences, setPreferences] = React.useState({
    pets: false,
    smoking: false,
    single: false,
  });
  const [value, setValue] = React.useState("");

  const handleSelectionChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  const togglePreference = (preferenceKey: keyof PreferencesState) => {
    setPreferences((prev) => ({
      ...prev,
      [preferenceKey]: !prev[preferenceKey],
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const age =
      formData.get("age") !== null ? Number(formData.get("age")) : undefined;
    const gender = value;
    const location = formData.get("location") as string;
    const interestsRaw = formData.get("interests") as string;
    const occupation = formData.get("occupation") as string;
    const bio = formData.get("bio") as string;
    const image = imageUrl;
    const smoking = preferences.smoking;
    const single = preferences.single;
    const pets = preferences.pets;

    const values = {
      name,
      age: age ?? 0,
      gender,
      location,
      interests: interestsRaw.split(","),
      occupation,
      bio,
      image,
      smoking,
      single,
      pets,
    };

    await testForm(values);
  };

  return (
    <section className="h-full ">
      <form
        onSubmit={handleSubmit}
        className="py-2 grid grid-flow-row  lg:grid-cols-2 grid-cols-1 gap-4"
      >
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
            type="number"
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Select
            size="lg"
            label="Gender"
            labelPlacement="outside"
            placeholder="gender"
            selectedKeys={[value]}
            onChange={handleSelectionChange}
          >
            {gender.map((item, i) => (
              <SelectItem className="py-4" key={item.key}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="location"
            label="Location"
            placeholder="Locatioin"
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="interests"
            label="Interests"
            placeholder="Eg Running, Soccer..."
            labelPlacement="outside"
          />
        </div>
        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <Input
            size="lg"
            name="occupation"
            label="Occupation"
            placeholder="Student, Professional, Corp Member"
            labelPlacement="outside"
          />
        </div>

        <div className="mt-4 space-y-4 lg:col-span-1 col-span-full">
          <div className="mt-1">
            <Textarea
              size="lg"
              className="min-h-[240px]"
              name="bio"
              labelPlacement="outside"
              label="Bio"
              placeholder="Tell us a little about yousrself?"
              minRows={8}
            />
          </div>
        </div>
        <div className="space-y-4 lg:mt-12 mt-4">
          {/* <div className="space-y-1 lg:col-span-1 col-span-full lg:w-[558.5px] lg:h-[150px] rounded-lg bg-gray-100 relative p-4 flex justify-center items-center">
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
          </div> */}
          <UploadDropzone
            endpoint="imageUploader"
            className="ut-button:w-full ut-button:bg-gray-300"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
              console.log(res[0].url);
            }}
          />
        </div>

        <div className="flex justify-around items-center lg:col-span-1 col-span-full">
          <Checkbox
            size="md"
            name="pets"
            checked={preferences.pets}
            onValueChange={() => togglePreference("pets")}
          >
            Pets
          </Checkbox>

          <Checkbox
            size="md"
            name="smoking"
            checked={preferences.smoking}
            onValueChange={() => togglePreference("smoking")}
          >
            Smoking
          </Checkbox>

          <Checkbox
            size="md"
            name="single"
            checked={preferences.single}
            onValueChange={() => togglePreference("single")}
          >
            Single
          </Checkbox>
        </div>

        <div className="lg:col-span-1 col-span-full flex justify-center items-center">
          <CreateAdFormButton />
          {/* <Button type="submit">Submit</Button> */}
        </div>
      </form>
    </section>
  );
};

export default RoommateAdForm;
