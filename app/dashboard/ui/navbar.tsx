"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/divider";
import { usePathname } from "next/navigation";
import { MessageIcon } from "./icons/messages";
import { SmallLogo } from "./icons/pairedLogo";
import { SearchIcon } from "@/components/icons";
import logoSmall from "@/public/pairedLogo.png";
import { ThemeSwitch } from "@/components/theme-switch";
import { CalendarIcon } from "@/app/dashboard/ui/icons/calendar";
import { NotificationIcon } from "@/app/dashboard/ui/icons/notification";

export const DashNavbar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      // isMenuOpen={isMenuOpen}
      maxWidth="full"
      position="sticky"
      className="px-4 border-b h-[80px]"
    >
      <NavbarContent
        className="lg:max-w-2xl max-w-3xl relative"
        justify="start"
      >
        <Link className="lg:hidden flex justify-start items-center" href="/">
          <Image src={logoSmall} alt="logo" width={40} className=""></Image>
        </Link>

        <Input
          className="lg:flex hidden"
          classNames={{
            base: "min-w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search for room / roommate..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent className="lg:flex hidden" justify="end">
        <button>
          <CalendarIcon />
        </button>
        <button>
          <MessageIcon />
        </button>
        <button>
          <NotificationIcon />
        </button>
        <Avatar
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </NavbarContent>
      <NavbarContent
        className="basis-1 pl-0 flex w-[100px] gap-4 lg:hidden"
        justify="end"
      >
        {/* <SignOutButton /> */}

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="pt-8">
        {searchInput}
        <div className=" flex flex-col gap-2">
          <NavbarMenuItem>
            <div className="flex-col flex justify-center items-start space-y-4 py-8">
              {siteConfig.dashNavMenuItems.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className={clsx(
                    "flex gap-3 items-center hover:bg-[#F1EEFD] rounded-lg bg-opacity-25 px-4 w-full h-[35px] transition-colors",
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
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
