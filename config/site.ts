export type SiteConfig = typeof siteConfig;
import { DashboardIcon } from "@/app/dashboard/ui/icons/dashboard";
import { MessageIcon } from "@/app/dashboard/ui/icons/messages";
import { UserIcon } from "@/app/dashboard/ui/icons/users";
import { SettingsIcon } from "@/app/dashboard/ui/icons/settings";

export const siteConfig = {
  name: "Paired | Find Compatible Roommates and Shared Flats with our Roommate Search Service",
  description:
    "Discover ideal living spaces with Paired, the roommate and shared flats search service. Create profiles, explore roommate and room ads, and connect with compatible matches for a harmonious living experience. ",
  navItems: [
    // {
    //     label: "Home",
    //     href: "/",
    // },
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Roommates",
      href: "/roommates",
    },
    // {
    //     label: "Blog",
    //     href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  dashNavMenuItems: [
    { title: "Home", icon: DashboardIcon, href: "/dashboard", position: "top" },
    {
      title: "Rooms",
      icon: UserIcon,
      href: "/dashboard/rooms",
      position: "bottom",
    },
    {
      title: "Roommates",
      icon: UserIcon,
      href: "/dashboard/roommates",
      position: "bottom",
    },
    {
      title: "Messages",
      icon: MessageIcon,
      href: "/dashboard/messages",
      position: "top",
    },
    {
      title: "Settings",
      icon: SettingsIcon,
      href: "/dashboard/settings",
      position: "top",
    },
  ],
  navMenuItems: [
    // {
    //     label: "Home",
    //     href: "/",
    // },
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Roommates",
      href: "/roommates",
    },
    // {
    //     label: "Blog",
    //     href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    // docs: "https://nextui.org",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
  propertyType: [
    "Flat / Apartment",
    "House",
    "Land",
    "Comercial Property",
    "Event centre / Venue",
  ],
  budget: [
    100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
    1000000, 2000000, 3000000, 5000000, 10000000, 20000000, 40000000, 60000000,
    80000000, 100000000,
  ],
  nigerianStates: [
    "Abia",
    "Adamawa",
    "Akwa Ibom ",
    "Anambra",
    "Bauchi",
    "Bayelsa ",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun ",
    "Ondo ",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ],
};
