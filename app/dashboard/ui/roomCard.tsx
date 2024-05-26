import React from "react";
import Image from "next/image";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

const RoomCard = (roomAd: {
  title: string;
  image: string;
  connections: React.FC;
  comments: string;
  spaces: string;
}) => {
  return (
    <>
      <Card
        // key={i}
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
              {roomAd.title}
            </h1>
          </div>
        </CardHeader>

        <CardBody className="flex-col aspect-video rounded-lg relative">
          <Image src={roomAd.image} alt="img" fill></Image>
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
            <p>{roomAd.comments} Comments</p>
          </>
          <>
            <p>{roomAd.spaces} Spaces</p>
          </>
        </CardFooter>
      </Card>
    </>
  );
};

export default RoomCard;
