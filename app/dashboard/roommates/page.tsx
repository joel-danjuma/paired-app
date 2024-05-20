"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Avatars from "@/app/dashboard/ui/avatar";
import RoommateAdForm from "./ui/roommateAdForm";
import img from "@/public/picture.jpg";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { MessageIcon } from "@/app/dashboard/ui/icons/messages";
import { CalendarIcon } from "@/app/dashboard/ui/icons/calendar";
import { UserIcon } from "@/app/dashboard/ui/icons/users";
import { FilterIcon } from "@/app/dashboard/ui/icons/filter";
import { SecondaryLogo } from "@/app/dashboard/ui/icons/pairedLogo";
// import { Pic1, Pic2, Pic3 } from "./ui/pics"

const array = [1, 2, 3, 4, 5, 6, 7];
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
  },
];

const page = () => {
  return (
    <section className="h-full w-full">
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
        <div className="flex justify-between items-center lg:px-8 px-4 w-full">
          <div className="max-w-[30%] flex  lg:gap-2 justify-between items-center">
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
          <div className="max-w-[30%] h-fit flex lg:gap-2 justify-between items-center">
            <Button className="min-w-[120px] rounded-md text-xl text-white bg-purple-900">
              <SecondaryLogo />
              <Link href={"#create-listing"}>Create Listing</Link>
            </Button>
            <Divider orientation="vertical" />
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
            return (
              <Card
                key={i}
                className="flex max-w-[340px] h-[680px] flex-col  lg:row-span-2 lg:col-span-1 row-span-1 col-span-full md:col-span-1 md:row-span-2"
              >
                <CardHeader className="relative h-[260px]">
                  <div className="w-full h-full absolute top-0 bg-black bg-opacity-25"></div>
                  <Image src={ad.img} alt="img" fill></Image>
                </CardHeader>

                <CardBody className="flex-col relative h-fit space-y-4">
                  <div className="flex space-y-2 items-center justify-center">
                    <h2>{ad.name}</h2>
                    <div className="inline-flex space-x-2 justify-center items-center">
                      <p>Age {ad.age}</p>
                      <p>{ad.occupation}</p>
                      <p>{ad.pronouns}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 grid-flow-row place-items-center max-h-[40px]">
                    {ad.hobbies.map((hobby, i) => {
                      return (
                        <div
                          key={i}
                          className="rounded-full p-1 border col-span-1"
                        >
                          {hobby}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-justify text-lg">{ad.bio}</p>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between items-end text-xs text-gray-500">
                  <Button variant="bordered">Message</Button>
                  <Button color="secondary">Pair</Button>
                  {/* <AvatarGroup isBordered>
                                        <Avatar
                                            className="max-w-4 max-h-4"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                        />
                                        <Avatar
                                            className="max-w-4 max-h-4"
                                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                        />
                                    </AvatarGroup>

                                    <>
                                        <p>9 Comments</p>
                                    </>
                                    <>
                                        <p>2 Spaces</p>
                                    </> */}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="lg:px-8 px-4">
        <a id="create-listing" href="#" className="hidden"></a>
        <h1 className="lg:text-4xl text-xl font-bold text-start py-16">
          Create Listing
        </h1>
        <RoommateAdForm />
      </div>
    </section>
  );
};

export default page;
