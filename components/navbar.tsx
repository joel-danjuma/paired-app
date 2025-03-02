"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import { SearchIcon } from "@/components/icons";
import logoSmall from "@/public/pairedLogo.png";
import logoFull from "@/public/pairedLogo2.png";
import { link as linkStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/components/theme-switch";
import { PrimaryLogo } from "@/app/dashboard/ui/icons/pairedLogo";

export const Navbar = () => {
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
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent justify="start">
        <Link className="lg:hidden flex justify-start items-center" href="/">
          <Image src={logoSmall} alt="logo" width={40} className=""></Image>
        </Link>
        <div className="lg:flex hidden justify-start items-center">
          <PrimaryLogo />
        </div>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className="w-fit px-4 hidden sm:flex basis-1/5 sm:basis-full"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            // isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={"/login"}
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="pt-8">
        {searchInput}
        <div className="mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                className={clsx(
                  "flex gap-3 items-center justify-center text-white bg-[#6359E9] hover:bg-[#F1EEFD] text-lg rounded-lg  px-4 w-full h-[35px] transition-colors",
                  {
                    "bg-[#6359E9]": item.href == pathName,
                  }
                )}
              >
                {/* <link.icon /> */}
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Button
            // isExternal
            as={Link}
            className="text-lg font-normal text-white bg-[#6359E9]"
            href={"/login"}
            variant="flat"
          >
            Login
          </Button>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
