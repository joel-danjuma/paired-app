// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RoomCard from "../ui/roomCard";
import img from "@/public/heroImg1.jpg";
import { DashNavbar } from "../ui/navbar";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import Avatars from "@/app/dashboard/ui/avatar";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { UserIcon } from "@/app/dashboard/ui/icons/users";
import RoomAdForm from "@/app/dashboard/rooms/ui/roomAdForm";
import { FilterIcon } from "@/app/dashboard/ui/icons/filter";
import { MessageIcon } from "@/app/dashboard/ui/icons/messages";
import { CalendarIcon } from "@/app/dashboard/ui/icons/calendar";
import { SecondaryLogo } from "@/app/dashboard/ui/icons/pairedLogo";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

const array = [1, 2, 3, 4, 5, 6, 7];

const page = () => {
  return (
    <section className="h-full w-full">
      <DashNavbar />
      <div className="flex-col w-full justify-center items-center border-b space-y-8 py-14">
        <div className="flex justify-between items-center  lg:px-8 px-4">
          <h1 className="lg:text-4xl text-xl font-bold text-start">
            Room Listings
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
          {array.map((item, i) => {
            return (
              <Card
                key={i}
                className="flex min-w-[320px] h-fit flex-col  lg:row-span-2 lg:col-span-1 p-4 row-span-1 col-span-full md:col-span-1 md:row-span-2"
              >
                <CardHeader className="px-0 flex-col space-y-2">
                  <div className="w-full flex justify-between items-end">
                    <div className="text-red-700 bg-red-100 min-w-fit min-h-fit py-1 px-4 rounded-sm text-[12px]">
                      Paired
                    </div>
                    <p>...</p>
                  </div>
                  <div className="flex w-full justify-start">
                    <h1 className="lg:text-md text-sm font-bold text-start">
                      Life Camp Housing Estate
                      {/* {item.title} */}
                    </h1>
                  </div>
                </CardHeader>

                <CardBody className="flex-col aspect-video rounded-lg relative">
                  <Image src={img} alt="img" fill></Image>
                </CardBody>
                <CardFooter className="flex justify-between items-end text-xs text-gray-500">
                  <AvatarGroup isBordered>
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
                  </>
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
        <RoomAdForm />
      </div>
    </section>
  );
};

export default page;
