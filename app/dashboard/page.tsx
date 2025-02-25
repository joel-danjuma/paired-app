import React from "react";
import { auth } from "@/auth";
import Image from "next/image";
import Group from "./ui/avatarGroup";
import { DashNavbar } from "./ui/navbar";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import img from "@/public/pairedLogoPurple.png";
import img2 from "@/public/pairedLogoPurple2.svg";
import { Card, CardBody, CardHeader } from "@heroui/card";

const arr = new Array(5).fill({
  name: "Olabisi Oluwatosin",
  social: "@big_tosin",
  desc: "Hello, I'm Ngozi Eze! I'm seeking a roommate who shares my love for quiet evenings at home, and values open communication. Let's create a cozy and welcoming space where we can unwind and share our passions!",
  age: "24",
  occupation: "Student",
  location: "Abuja, Nigeria.",
  likes: "21",
});

const arr2 = new Array(7).fill("Swimming");

const Dashboard = async () => {
  const session = await auth();
  return (
    <>
      <DashNavbar />
      <header>
        <div className="relative flex w-full items-center bg-gradient-to-b from-[#F1EEFD] to-white bg-opacity-90 h-[140px] border-b">
          <div className="flex justify-start w-full">
            <h1 className="lg:text-4xl text-xl  font-bold text-[#2D1E57] px-8">
              Welcome <br /> Home
            </h1>
          </div>
          <div className="w-full flex lg:justify-center items-end lg:items-center">
            <h3 className="lg:text-sm text-[8px] font-bold text-wrap text-[#2D1E57] ">
              Building Homes, Making Connections
            </h3>
          </div>
          <div className="w-full flex justify-end">
            <Image
              alt="img"
              className="absolute bottom-0 right-0 lg:flex hidden"
              src={img}
              width={282}
              height={174}
            />
            <Image
              alt="img"
              className="absolute bottom-0 right-0 lg:hidden flex"
              src={img}
              width={120}
              height={120}
            />
          </div>
        </div>
      </header>

      <div className="flex-grow">
        <div
          className={
            "lg:flex hidden w-full h-fit flex-col space-y-4 border-b border-r p-4 relative"
          }
        >
          <div className="flex items-center justify-between w-full z-10">
            <h2 className="text-xl text-bold text-gray-400 ">Find People</h2>
            <div className="space-x-2 flex items-center">
              <button className="rounded-md w-[32px] h-[32px] bg-[#5030E5] bg-opacity-20 p-1 text-[#5030E5] text-lg ">
                +
              </button>
              <h3 className="text-xl font-bold text-[#5030E5]">Invite</h3>
            </div>
          </div>

          <Group />

          <Image
            alt="img"
            className="absolute bottom-0 right-0 hidden sm:flex z-0"
            src={img2}
            width={80}
            height={40}
          />
        </div>
        <div className="flex w-full gap-4 overflow-auto p-4">
          {arr.map((item, i) => (
            <Card
              className=" flex rounded-lg lg:min-w-[380px] min-w-[320px] lg:h-[280px] h-[320px] "
              key={i}
            >
              <CardHeader className="">
                <div className="flex gap-2 overflow-auto hide-scrollbar">
                  {arr2.map((item, i) => (
                    <Button
                      className="lg:w-[40] lg:h-[24] w-[40] h-[24] text-sm rounded-full px-2 "
                      variant="bordered"
                      key={i}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardBody className="flex flex-row space-x-2 p-2 w-full">
                <Avatar size="sm" radius="full" />
                <div className="w-full flex flex-col space-y-2 text-black">
                  <div className="w-full flex justify-between  items-center">
                    <h2> {item.name}</h2>
                    <h2 className="text-gray-500"> {item.social}</h2>
                  </div>
                  <p className="text-sm">{item.desc}</p>
                  <div className="flex justify-between items-center lg:max-w-[70%] max-w-full text-sm text-gray-500">
                    <p>Age: {item.age}</p> •<p>{item.occupation}</p> •
                    <p>{item.location}</p>
                  </div>
                  <div className="flex justify-between items-center ">
                    <span className="text-[10px]">{item.likes} Likes</span>
                    <div className="space-x-4">
                      <Button
                        className="p-2 border border-[#2D1E57] rounded-md"
                        variant="bordered"
                        size="sm"
                      >
                        {" "}
                        Message
                      </Button>
                      <Button
                        className="p-2 text-white bg-[#2D1E57] rounded-md"
                        variant="solid"
                        size="sm"
                      >
                        Get paired!
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
