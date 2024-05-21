"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "@/app/dashboard/ui/icons/dashboard";
import { MessageIcon } from "@/app/dashboard/ui/icons/messages";
import { UserIcon } from "@/app/dashboard/ui/icons/users";
import { SettingsIcon } from "@/app/dashboard/ui/icons/settings";
import { PrimaryLogo } from "@/app/dashboard/ui/icons/pairedLogo";

const menuItems = [
  { title: "Home", icon: DashboardIcon, href: "/dashboard", position: "top" },
  {
    title: "Messages",
    icon: MessageIcon,
    href: "/dashboard/messages",
    position: "bottom",
  },
  // {
  //   title: "People",
  //   icon: UserIcon,
  //   href: "/dashboard/people",
  //   position: "bottom",
  // },
  {
    title: "Settings",
    icon: SettingsIcon,
    href: "/dashboard/settings",
    position: "bottom",
  },
  {
    title: "Rooms",
    icon: UserIcon,
    href: "/dashboard/rooms",
    position: "top",
  },
  {
    title: "Roommates",
    icon: UserIcon,
    href: "/dashboard/roommates",
    position: "top",
  },
];

const DashSidebar = () => {
  // const { user } = useUser()
  const pathName = usePathname();
  return (
    <div className="lg:flex hidden h-[100dvh] ">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow overflow-y-auto bg-white border-r">
          <div className="flex flex-col px-8 border-b h-[80px] justify-center items-center ">
            <Link className="" href="/">
              {/* <Image
                                src={logo}
                                alt="logo"
                                width={140}
                               
                            ></Image> */}
              <PrimaryLogo />
            </Link>
          </div>
          <div className="w-full flex flex-col gap-2 px-2">
            <div className="flex-col flex justify-center items-start space-y-4 py-8">
              {menuItems
                .filter((link) => link.position === "top")
                .map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={clsx(
                      "flex gap-3 items-center rounded-lg bg-opacity-25 px-4 w-full h-[35px] transition-colors",
                      {
                        "bg-[#6359E9]": link.href == pathName,
                      }
                    )}
                  >
                    <link.icon />
                    {link.title}
                  </Link>
                ))}
            </div>
            <Divider className="w-full px-4" />
            <div className="px-4 py-4 flex justify-between items-center">
              <span>My Paired</span>
              <button className="w-5 h-5 border p-1 flex justify-center items-center">
                +
              </button>
            </div>

            <div className="w-full h-fit mt-auto ">
              <ul className="flex-col flex justify-center items-start space-y-4">
                {menuItems
                  .filter((link) => link.position === "bottom")
                  .map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className={clsx(
                        "flex gap-3 items-center rounded-lg bg-opacity-25 px-4 w-full h-[35px] transition-colors",
                        {
                          "bg-[#6359E9]": link.href == pathName,
                        }
                      )}
                    >
                      <link.icon />
                      {link.title}
                    </Link>
                  ))}
              </ul>
            </div>
            <div className="px-3 py-8 flex justify-center items-center">
              <Card className="w-full bg-gray-100">
                <CardHeader className="flex justify-center items-center">
                  <div className="-mt-20 rounded-full bg-gray-100 max-w-sm max-h-sm">
                    .
                  </div>
                  <p className="text-center font-semibold">Welcome to Paired</p>
                </CardHeader>
                <CardBody>
                  <p className="text-center text-gray-500">
                    Search for new rooms and roommates by location. Connect and
                    find a perfect match with Paired
                  </p>
                </CardBody>
                <CardFooter className="w-full">
                  <Button className="text-center w-full rounded-md bg-white/50">
                    Get started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;

// ${
//     listItem[0].toLowerCase() +
//     listItem.slice(1)
// } /
