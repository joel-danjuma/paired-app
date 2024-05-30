import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { UserProfile } from "@prisma/client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { db } from "@/lib/db";

const RoommmateCard2 = async (profile: UserProfile) => {
  return (
    <div>
      <Card className=" flex rounded-lg lg:min-w-[380px] min-w-[320px] lg:h-[280px] h-[320px] ">
        <CardHeader className="">
          <div className="flex gap-2 overflow-auto hide-scrollbar">
            {profile.interests.map((interest, i) => (
              <Button
                className="lg:w-[40] lg:h-[24] w-[40] h-[24] text-sm rounded-full px-2 "
                variant="bordered"
                key={i}
              >
                {interest}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardBody className="flex flex-row space-x-2 p-2 w-full">
          {/* <User
            name={user?.name as string}
            avatarProps={{ src: profile?.image as string }}
          /> */}
          <Avatar size="sm" radius="full" />
          <div className="w-full flex flex-col space-y-2 text-black">
            <div className="w-full flex justify-between  items-center">
              <h2> {profile.name}</h2>
              <h2 className="text-gray-500"> {profile.socials}</h2>
            </div>
            <p className="text-sm">{profile.bio}</p>
            <div className="flex justify-between items-center lg:max-w-[70%] max-w-full text-sm text-gray-500">
              <p>Age: {profile.age}</p> •<p>{profile.occupation}</p> •
              <p>{profile.location}</p>
            </div>
            <div className="flex justify-between items-center ">
              <span className="text-[10px]">{profile.likes} Likes</span>
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
    </div>
  );
};

export default RoommmateCard2;
