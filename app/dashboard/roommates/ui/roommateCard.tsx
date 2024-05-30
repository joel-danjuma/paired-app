import React from "react";
import { Button } from "@nextui-org/button";
import Image, { StaticImageData } from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { db } from "@/lib/db";

interface RoommateAdProps {
  img: StaticImageData;
  name: string;
  age: string;
  occupation: string;
  pronouns: string;
  hobbies: string[];
  bio: string;
}

const RoommateCard = async (roommateAd: RoommateAdProps) => {
  // const user = await db.user.findUnique({
  //   where: {
  //     id: roommateAd.id,
  //   },
  // });
  return (
    <>
      <Card className="flex max-w-[340px] h-[680px] flex-col  lg:row-span-2 lg:col-span-1 row-span-1 col-span-full md:col-span-1 md:row-span-2">
        <CardHeader className="relative h-[260px]">
          <div className="w-full h-full absolute top-0 bg-black bg-opacity-25"></div>
          <Image src={roommateAd.img} alt="img" fill></Image>
        </CardHeader>

        <CardBody className="flex flex-col relative h-fit gap-4 w-full p-0">
          <div className="flex w-full flex-col space-y-2 items-center justify-center border-b py-2">
            <h2>{roommateAd.name}</h2>
            <div className="inline-flex space-x-2 justify-center items-center">
              <p>Age {roommateAd.age}</p>
              <p>{roommateAd.occupation}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-flow-row place-items-center gap-2 px-3">
            {roommateAd.hobbies.map((hobby, i) => {
              return (
                <div
                  key={i}
                  className=" flex justify-center items-center rounded-full p-1 w-[100px] h-[30px] border-2 col-span-1"
                >
                  <p className="text-[8px]">{hobby}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center px-3">
            <p className="text-justify text-lg">{roommateAd.bio}</p>
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
    </>
  );
};

export default RoommateCard;
