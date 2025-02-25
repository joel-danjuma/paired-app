"use client";

import Cta from "@/components/cta";
import Hero from "../components/new-hero";
import Footer from "../components/footer";
import { Navbar } from "@/components/navbar";
import RecentlyAdded from "../components/recentlyAdded";
import Image from "next/image";
// import landingPageImage from "@/public/landingPage.png"
// import landingPageImage from "@/public/trimmed_image_with_bg.png"
import landingPageImage from "@/public/landingPageTrim.png"
import sectionImage from "@/public/trimmed_image_0.png"
import MatchMade from "@/public/Background.svg"
import backGroundTwo from "@/public/Background_two.svg"
import { Button } from "@heroui/button";
import Avatars from "@/app/dashboard/ui/avatar";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { Brain, MailCheck, House, CircleUser, ChevronRight, Building, PiggyBank, Fingerprint, CalendarArrowDown, BedDouble, MessageSquareQuote, Star, Youtube, Facebook, Instagram, Linkedin, FacebookIcon } from "lucide-react";
import Stars from "@/components/Stars";
import pairedSVG from "@/public/paired.svg";


const features = [
  {
    name: "Smart Matching Algorithm",
    description: "Automatically match with roommates who share your intents and lifestyle preferences.",
    icon: Brain,

  },
  {
    name: "In-App Communication",
    description: "Easily message potential roommates to connect before making any decisions.",
    icon: MailCheck,
  },
  {
    name: "Apartment Listings & Search",
    description: "Browse listings or post your own apartment to find the right home and pair all in one place.",
    icon: House,

  },
  {
    name: "Verified Profiles for Safety",
    description: "Verified profiles help to ensure that you're matched with real, reliable people.",
    icon: CircleUser,
  },
];

const featuresTwo = [
  {
    name: "Roommate Reviews",
    description: "Wondering what it's like to live with someone? Read reviews from their past roommates before you commit.",
    icon: MessageSquareQuote,

  },
  {
    name: "Apartment Hunting Made Easy",
    description: "We know how stressful apartment hunting can be. Paired lets you easily browse and filter listings, helping you find the right home and roommate in one go.",
    icon: Building,
  },
  {
    name: "Shared Rent & Bills",
    description: "No more confusion about splitting costs. Paired helps you manage and split rent, utilities, and other bills so everyone knows their share.",
    icon: PiggyBank,

  },
  {
    name: "Advanced Compatibility Matching",
    description: "We match you with roommates who align with your lifestyle, habits, and preferences, making your living situation more comfortable from the start.",
    icon: BedDouble,
  },
  {
    name: "Better Planning & Coordination",
    description: "Plan better by scheduling your move-in and move-out dates with your roommate.",
    icon: CalendarArrowDown,
  },
  {
    name: "Safety and Security",
    description: "Paired ensures your safety with verified profiles and access to emergency contacts, so you know who your roommate is and can reach their next of kin if needed.",
    icon: Fingerprint,
  },
];

const reviewsOne = [
  {
    stars: 5,
    comment: "Paired made finding a roommate easy! I connected with someone who shares my values before moving in. Highly recommend!",
    name: "Sarah L.",
  },
  {
    stars: 5,
    comment: "The detailed filters helped me find my perfect match. Paired is the best roommate app I've used!",
    name: "Jessica R."
  },
  {
    stars: 5,
    comment: "I found a great apartment and a trustworthy roommate quickly. The verification process gave me peace of mind!",
    name: "Michael B."
  },
  {
    stars: 5,
    comment: "Scheduling our move-in dates was a breeze, and splitting bills is a game-changer. Paired simplifies everything!",
    name: "Kevin T.",
  },
  {
    stars: 5,
    comment: "The community support has been amazing! I found helpful tips that made my transition into shared living smooth.",
    name: "Emily W."
  },
  {
    stars: 5,
    comment: "I was surprised at how many compatible roommates I found. Paired really gets to know what you need!",
    name: "David M."
  }
];

const reviewsTwo = [
  {
    stars: 5,
    comment: "Scheduling our move-in dates was a breeze, and splitting bills is a game-changer. Paired simplifies everything!",
    name: "Kevin T.",
  },
  {
    stars: 5,
    comment: "The community support has been amazing! I found helpful tips that made my transition into shared living smooth.",
    name: "Emily W."
  },
  {
    stars: 5,
    comment: "I was surprised at how many compatible roommates I found. Paired really gets to know what you need!",
    name: "David M."
  }
];


export default function Home() {
  return (
    <section >
      <Navbar />
      <main className="flex flex-1 overflow-scroll justify-center items-center p-5 bg-[#F5F5F5]">
        <div >
          <div className="flex justify-center items-center max-w-6xl">
            <div className="flex items-center space-x-2 border rounded-full p-1 lg:p-2">
              <div className="flex">
                <Avatar className="h-3 w-3 text-tiny" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar className="h-3 w-3 text-tiny" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar className="h-3 w-3 text-tiny" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </div>
              <p className="text-[#2D1E57]  text-xs lg:text-sm">
                Quickest way to find a pair
              </p>
            </div>
          </div>
          <div className="m-5 flex flex-col justify-center items-center max-w-6xl">
            <div className="text-xl sm:text-3xl  md:text-4xl lg:text-5xl  text-[#2D1E57] flex flex-col justify-center items-center font-semibold">
              <p className="">
                Find Your Perfect
              </p>
              <p>
                Roommate, Stress-Free
              </p>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8  space-x-2">
              <Button className="text-xs text-[#2D1E57] rounded-full bg-white p-2 md:px-6">
                Join the Waitlist
              </Button>
              <Button className="text-xs text-white rounded-full bg-[#2D1E57] p-2 md:px-6">
                Contact Us {">"}
              </Button>
            </div>
          </div>

          {/* Search bar */}

          {/* <div>
            <Image
              src={landingPageImage}
              alt="Landing Page Image"
            />
          </div> */}

          {/* new insert */}

          <div className="relative overflow-hidden pt-5">
            <div className="mx-auto max-w-6xl px-0 relative">
              <Image
                alt="App Screenshot"
                src={landingPageImage}
                width={2432}
                height={1442}
                className="rounded-xl"
              />
              {/* Improved Bottom Fade Effect */}
              <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-[#F5F5F5] via-[#F5F5F5]/60 to-transparent" />
            </div>
          </div>

          {/* new insert end */}
          <div className="max-w-6xl flex justify-between items-center m-4 border-b p-6 mb-6">
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl lg:text-4xl  text-[#2D1E57] font-semibold">
                  Paired is launching soon to revolutionize <br />  how you find roommates and homes.
                </h2>
              </div>
              <div className="flex gap-5 p-2 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl  text-[#2D1E57] ">96%</h1>
                  <p className="text-xs content-center">Better roommate pairs</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl  text-[#2D1E57]">4.7x</h1>
                  <p className="text-xs">Faster house hunting</p>
                </div>
              </div>
          </div>

          <br className="border border-red-400"/>

          <div className="bg-white rounded-md">
            <div className=" text-[#2D1E57] flex flex-col justify-center items-center p-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-semibold">
                Discover Whats Coming to Paired
              </h1>
              <p className="text-xs sm:text-sm lg:text-base pt-2">Paired will offer everything you need to find the ideal roommate and home</p>
            </div>

            <div className="flex w-full mt-10">
              <div className="w-full sm:w-[50%] md:w-[40%]">
                <dl className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600">
                  {features.map( (feature, i) => (
                    <div key={i} className="relative pl-9">
                      <dt className="inline font-semibold text-[#2D1E57]">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-[#2D1E57]"
                        />
                      </dt>
                      <dd>
                        {feature.name} <ChevronRight  className="inline"/>
                      </dd>
                      <dd className="text-xs">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="sm:w-[50%] mx-auto">
                <Image
                alt="App Screenshot"
                src={sectionImage}
                width={1000}
                height={1000}
                className="hidden sm:block w-full h-auto rounded-xl "
              />
              </div>
            </div>

            <div className="max-w-6xl pt-20 grid grid-cols-2 gap-5">
              <Image 
                src={MatchMade} 
                width={1000} 
                height={1000} 
                alt="" 
                className="p-2 sm:p-5 md:p-10"
              />
              <div className="flex flex-col justify-center items-start gap-3 md:gap-5 lg:gap-6">
                <h3 className="text-xs md:text-base lg:text-lg text-[#2D1E57] font-semibold leading-5">
                  Benefits
                </h3>

                <h1 className="text-[#161525] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                  Say goodbye to complicated roommate searches.
                </h1>

                <p className="text-[#5F5F69] font-normal text-xs">
                  With Paired, you’ll get personalized matches and streamlined communication, all while finding a home that fits your needs. 
                </p>

                <Button className="text-xs text-white rounded-full bg-[#161525] font-semibold ">
                Be Notified First
                </Button>
              </div>

              <div>

              </div>
            </div>

            <div className="max-w-6xl grid grid-cols-2 pt-20 gap-5 rounded-md">
              <div className="flex flex-col justify-center items-start gap-3 md:gap-5 lg:gap-6 p-4 rounded-md">
                <h3 className="text-xs md:text-base lg:text-lg text-[#2D1E57] font-semibold leading-5">
                  Benefits
                </h3>
                <h1 className="text-[#161525] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                  Customize Your Living Preferences
                </h1>
                <p className="text-[#5F5F69] font-normal text-xs">
                  Take control with Paired. Set your preferences—cleanliness, social habits, quiet hours—and we’ll match you with roommates who fit your lifestyle. Find your ideal living experience, hassle-free.
                </p>
                <Button className="text-xs text-white rounded-full bg-[#161525] font-semibold ">
                Join Team Paired
                </Button>
              </div>
              <div>
                <Image src={backGroundTwo} width={1000} height={1000} alt="" className="p-2 sm:p-5 md:p-10" />
              </div>
            </div>

            <div className="max-w-6xl mx-auto bg-[#F5F5F5] flex flex-col justify-center items-center">
              <h1 className="text-[#161525] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mx-auto my-10">
                Why Paired?
              </h1>

              <div className="w-full">
                <dl className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10 text-base leading-7 text-gray-600">
                  {featuresTwo.map( (feature, i) => (
                    <div key={i} className="relative pl-9 bg-white rounded-md px-9 py-9 pt-1">
                      <dt className="inline font-semibold text-[#2D1E57]">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-[#2D1E57] "
                        />
                      </dt>
                      <dd className="text-[#161525] font-semibold text-base">
                        {feature.name}
                      </dd>
                      <dd className="text-xs p-1 text-[#5F5F69]">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <h3 className="text-xs md:text-base lg:text-lg text-[#2D1E57] font-semibold leading-5 mt-10 mb-3">
                Experience smarter, safer living with Paired.
              </h3>
              <p className="text-xs md:text-base text-[#5F5F69] mb-3">
                Join the waitlist today and take the first step towards finding your ideal roommate!
              </p>
              <Button className="text-xs text-white rounded-full bg-[#2D1E57] px-12 mb-16">
                Join Now!
              </Button>
            </div>

            <div className="max-w-6xl mx-auto bg-[#161525] text-white rounded-lg flex flex-col justify-center items-center p-7">
              <h1 className="text-white font-semibold leading-10 text-2xl sm:text-3xl md:text-4xl p-8 md:p-16">
                Reviews from Our Beta Testers
              </h1>

              <div className="grid grid-cols-3 gap-2  text-white ">
                  {reviewsOne.map((review, i) => (
                    <div key={i} className="bg-[#1F1E2E] border border-[#FFFFFF1A] rounded-md p-4 text-xs flex flex-col justify-center items-start gap-3">
                      <Stars />
                      <p>
                        {review.comment}
                      </p>
                      <p>
                        {review.name}
                      </p>
                    </div>
                  ))}
              </div>

              <Button className="text-xs text-white rounded-full bg-[#161525] px-12 my-16 border border-[#FFFFFFE5]">
                Join the list
              </Button>

            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 bg-[#F5F5F5] pt-10">
              <div className="flex flex-col justify-center items-start gap-5 border-r">
                <Image src={pairedSVG} width={60} height={60} alt="paired logo" />

                <h3 className="text-xs md:text-base lg:text-lg text-[#161525] font-semibold leading-5">
                  Subscribe to our newsletter
                </h3>

                <form action="" className="flex gap-2">
                  <input type="email" placeholder="Your email" className="rounded-md border p-2" />
                  <Button className="text-xs text-white rounded-md bg-[#161525]">
                  Sign Up
                  </Button>
                </form>

                <p className="text-xs p-1 text-[#5F5F69]">
                  By clicking the button you consent to processing of your personal data
                </p>

                <p className="text-xs p-1 text-[#5F5F69]">
                  Product of Biild ltd.
                </p>
                <p className="text-xs p-1 text-[#5F5F69]">
                  © Copyright 2024, All Rights Reserved by Paired
                </p>
              </div>
              <div className="grid grid-cols-2 p-8">
                  <dl className="text-base md:text-lg font-semibold text-[#161525]">
                    <dt>Features</dt>
                    <dt>Waitlist</dt>
                    <dt>Contact</dt>
                  </dl>
                  
                  <dl className="text-xs text-[#5F5F69] font-normal">
                    <dt>Customer Review</dt>
                    <dt>Terms</dt>
                    <dt>404</dt>
                  </dl>

                  <p className="text-xs text-[#5F5F69] font-normal">
                    Privacy Policy
                  </p>

                  <div className="flex gap-2">
                    <Instagram />
                    <Facebook />
                    <Youtube />
                    <Linkedin />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Hero />
      <RecentlyAdded />
      <Cta />
      <Footer /> */}
    </section>
  );
}
