import Link from "next/link";
import React from "react";
import { GithubIcon } from "@/components/icons";
import { Divider } from "@heroui/divider";
import Image from "next/image";
import logo from "@/public/pairedLogo.png";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" py-12 mx-auto max-w-[1440px] px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <a
              href="/"
              className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-black tracking-relaxed lg:pr-8"
            >
              {/* <svg
                                className="w-5 h-5"
                                viewBox="0 0 232 232"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z"
                                    fill="#0c0c0c"
                                ></path>
                            </svg>{" "} */}
              <Image src={logo} alt="logo" width={32} height={32}></Image>
            </a>
            <p className="w-1/2 mt-2 text-sm text-gray-500">
              Unwrapped your mind
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold leading-6 uppercase text-black">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-semibold leading-6 uppercase text-black">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Alpine.js
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:justify-end md:grid md:grid-cols-1">
              <div className="w-full mt-12 md:mt-0">
                <div className="mt-8 lg:justify-end xl:mt-0">
                  <h3 className="font-semibold leading-6 uppercase text-black">
                    Subscribe to our newsletter
                  </h3>
                  <p className="mt-4 text-sm font-light text-gray-500 lg:ml-auto">
                    The latest news, articles, and resources, sent to your inbox
                    weekly.
                  </p>
                  <div className="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                    <form
                      className="flex flex-col items-center justify-center max-w-sm mx-auto"
                      action=""
                    >
                      <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                        <input
                          name="email"
                          type="email"
                          className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                          placeholder="Enter your email..."
                          // required=""
                        />
                        <button
                          type="button"
                          className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                        >
                          <div className="relative"></div>
                          Subscribe
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-4 h-auto ml-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Divider className="max-w-[1380px]" />
      </div>
      <div className="px-4 py-12 w-full sm:px-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
          <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only"> github</span>

              <GithubIcon />
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only"> twitter</span>
              <Twitter />
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">Instagram</span>

              <Instagram />
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">Linkedin</span>
              <Linkedin />
            </a>
          </span>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <span className="mt-2 text-sm font-light text-gray-500">
            Copyright © 2023
            <a
              href="#_"
              className="mx-2 text-wickedblue hover:text-gray-500"
              rel="noopener noreferrer"
            >
              @BiildLtd
            </a>
            . Since 2022
          </span>
        </div>
      </div>
    </footer>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
