import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import Image from "next/image";
import PageTitle from "@/components/pageTitle";
import { Button } from "@nextui-org/button";
import img from "@/public/heroImg1.jpg";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

const array = [1, 2, 3, 4];

const RecentlyAdded = () => {
  return (
    <section className="flex-col max-w-[1440px] p-4 pt-0">
      <PageTitle>Newest Rooms</PageTitle>

      <div className="grid lg:grid-cols-4 grid-rows-2 grid-cols-2 grid-flow-row w-full h-[30%] gap-4">
        {array.map((item, i) => {
          return (
            // <Card
            //     key={i}
            //     className="flex flex-row lg:row-span-2 lg:col-span-1 row-span-1 col-span-full md:col-span-1 md:row-span-2"
            // >
            //     <Card className="w-full h-full rounded-r-none">
            //         <Image src={img} alt="img" fill></Image>
            //     </Card>
            //     <CardBody className="flex-col">
            //         <p></p>
            //         <>
            //             <span>10 Bedroom</span>
            //             <span>2000 sqf</span>
            //             <span>{item} garages</span>
            //         </>
            //         <div className="w-full flex-row justify-between">
            //             <p>Posted By Joel</p>
            //             <span>
            //                 {" "}
            //                 <Button>$80,000</Button>
            //             </span>
            //         </div>
            //     </CardBody>
            // </Card>
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
      <PageTitle>Newest Roommates</PageTitle>
      <div className="grid lg:grid-cols-4  grid-rows-2 grid-cols-2 grid-flow-row w-full h-[30%] gap-4">
        {array.map((item, i) => {
          return (
            <Card
              key={i}
              className="flex flex-row lg:row-span-2 lg:col-span-1 row-span-1 col-span-full md:col-span-1 md:row-span-2"
            >
              <Card className="w-full h-full rounded-r-none">
                <Image src={img} alt="img" fill></Image>
              </Card>
              <CardBody className="flex-col">
                <p></p>
                <>
                  <span>10 Bedroom</span>
                  <span>2000 sqf</span>
                  <span>{item} garages</span>
                </>
                <div className="w-full flex-row justify-between">
                  <p>Posted By Joel</p>
                  <span>
                    {" "}
                    <Button>$80,000</Button>
                  </span>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default RecentlyAdded;
