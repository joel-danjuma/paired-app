// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Avatars from "@/app/dashboard/ui/avatar";
import RoommateAdForm from "./ui/roommateAdForm";
import img from "@/public/picture.jpg";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { MessageIcon } from "@/app/dashboard/ui/icons/messages";
import { CalendarIcon } from "@/app/dashboard/ui/icons/calendar";
import { UserIcon } from "@/app/dashboard/ui/icons/users";
import { FilterIcon } from "@/app/dashboard/ui/icons/filter";
import { SecondaryLogo } from "@/app/dashboard/ui/icons/pairedLogo";
import RoommateCard from "./ui/roommateCard";
import { DashNavbar } from "../ui/navbar";
import { db } from "@/lib/db";
// import { Pic1, Pic2, Pic3 } from "./ui/pics"

const ads = [
  {
    img: img,
    name: "Olabisi Oluwatosiin",
    age: "24",
    occupation: "Student",
    pronouns: "He/him",
    hobbies: [
      "Working Out",
      " Reading",
      "Content Creator",
      " Dog Owner",
      "Cooking",
      "Plants",
    ],
    bio: "Hi, I'm Olabisi Oluwatosin! I'm a fitness, content creator. I'm looking for a male roommate, preferably a fellow student, who's young and tidy. Let's share a space where we can focus on our goals and enjoy the journey together!",
    // paired : false
  },
  {
    img: img,
    name: "Fumilayo Adeyemi",
    age: "26",
    occupation: "Freelancer",
    pronouns: "her",
    hobbies: [
      "Working Out",
      " Reading",
      "Content Creator",
      " Dog Owner",
      "Cooking",
      "Plants",
    ],
    bio: "Hey there, I'm Funmilayo Adeyemi! I thrive on creativity, whether it's through music, gaming, or tinkering with the latest tech. I'm hoping to find a roommate who's just as passionate about these hobbies. Let's make our home a hub for innovation and fun!",
    // paired : false
  },
  {
    img: img,
    name: "Emeka Onuoha",
    age: "25",
    occupation: "Engineer",
    pronouns: "He/him",
    hobbies: [
      "Working Out",
      " Reading",
      "Content Creator",
      " Dog Owner",
      "Cooking",
      "Plants",
    ],
    bio: "Hi, I'm Olabisi Oluwatosin! I'm a fitness, content creator. I'm looking for a male roommate, preferably a fellow student, who's young and tidy. Let's share a space where we can focus on our goals and enjoy the journey together!",
    // paired : false
  },
];

const page = async () => {
  // const ads = await db.userProfile.findMany({
  //   take: 5,
  // });

  return (
    <section className="h-full w-full">
      <DashNavbar />
      <div className="flex-col w-full justify-center items-center border-b space-y-8 py-14">
        <div className="flex justify-between items-center  lg:px-8 px-4">
          <h1 className="lg:text-4xl text-xl font-bold text-start">
            Roommates
          </h1>
          <span className="flex items-center">
            <button className="px-2 py-1 rounded-md text-xs bg-purple-100 flex">
              +
            </button>
            <p className="px-2 text-lg lg:flex hidden">Invite</p>
            <Avatars />
          </span>
        </div>
        <div className="flex w-full">
          <div className="lg:flex grid grid-cols-1 grid-flow-row w-full justify-start gap-4 items-center  lg:px-8 px-4">
            <Button
              className="lg:min-w-[120px] min-w-[80px] rounded-md text-xl border-1 border-black"
              variant="ghost"
            >
              <FilterIcon />
              Filter
            </Button>
            <Button
              className="lg:min-w-[120px] min-w-[80px] rounded-md text-xl border-1 border-black"
              variant="ghost"
            >
              <CalendarIcon />
              Today
            </Button>
          </div>
          <div className="lg:flex grid grid-cols-1 grid-flow-row w-full justify-end gap-4 items-center  lg:px-8 px-4">
            <Button className="lg:min-w-[120px] min-w-[40px] rounded-md lg:text-xl text-sm text-white bg-purple-900">
              <SecondaryLogo />
              <Link href={"#create-listing"}>Create Listing</Link>
            </Button>
            <Divider className="lg:fllex hidden" orientation="vertical" />
            <Button
              className="lg:min-w-[120px] min-w-[80px] rounded-md text-xl border-black border-1"
              variant="ghost"
            >
              <UserIcon />
              Share
            </Button>
          </div>
        </div>
        <div className="lg:flex w-full px-4 py-8 gap-4 overflow-x-auto scroll-smooth grid grid-cols-2 grid-flow-row bg-gray-100">
          {ads.map((ad, i) => {
            return <RoommateCard key={i} {...ad} />;
          })}
        </div>
      </div>
      <a id="create-listing" href="#" className="hidden" />
      <div></div>
      <div className="lg:px-8 px-4">
        <h1 className="lg:text-4xl text-xl font-bold text-start py-8">
          Create Profile Card
        </h1>
        <RoommateAdForm />
      </div>
    </section>
  );
};

export default page;
