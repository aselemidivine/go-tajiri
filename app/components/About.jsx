"use client";
import { Container } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";
// import { SVGs } from "../assets/svgs/SVGs";
import adsDirect from "../assets/images/african_office.jpg";

const About = () => {
  return (
    <section class="mb-32 about">
      {/* <!-- Jumbotron --> */}
      <div class="container mx-auto xl:px-32">
        <div class="grid items-center lg:grid-cols-2">
          <Fade left duration={1300}>
            <div class="mb-12 lg:mb-0">
              <div class="heroo-bg rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h2 class="mb-6 pb-2 text-4xl font-bold text-white">
                  Why Choose Ads Direct?
                </h2>
                <p class="mb-6 pb-2  text-neutral-500 text-white">
                  Here at Ads Direct we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
                </p>

                <div class="mb-6 flex flex-wrap">
                  <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
                    <h4 class="flex text-white gap-2 text-xl">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Marketing
                    </h4>
                    <p className="text-white mr-4">
                      Plan it, create it, launch it. Collaborate seamlessly with
                      all the organization and hit your marketing goals every
                      month with our marketing plan.
                    </p>
                  </div>

                  {/* <div class="mb-4 w-full sm:w-1/2"> */}
                  <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
                    <h3 class="flex text-white gap-2 text-xl">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Legal
                    </h3>
                    <p className="text-white mr-4">
                      Protect your organization, devices and stay compliant with
                      our structured workflows and custom permissions made for
                      you.
                    </p>
                  </div>

                  <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
                    <p class="flex text-white gap-2 text-xl">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Bussiness Automation
                    </p>
                    <p className="text-white mr-4">
                      Auto-assign tasks, send Slack messages, and much more. Now
                      power up with hundreds of new templates to help you get
                      started.
                    </p>
                  </div>

                  <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
                    <p class="flex text-white gap-2 text-xl">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Finance
                    </p>
                    <p className="text-white mr-4">
                      Audit-proof software built for critical financial
                      operations like month-end close and quarterly budgeting.
                    </p>
                  </div>

                  <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
                    <p class="flex text-white gap-2 text-xl">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Operations
                    </p>
                    <p className="text-white mr-15 ">
                      Keep your company’s lights on with customizable,
                      iterative, and structured workflows built for all
                      efficient teams and individual.
                    </p>
                  </div>

                  <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
                    <p class="flex text-white gap-2 text-xl">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      Enterprise Design
                    </p>
                    <p className="text-white mr-2 ">
                      Craft beautiful, delightful experiences for both marketing
                      and product with real cross-company collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <div>
            {/* <img
              // src="https://unsplash.com/photos/Hjb1R72x6Hg"
              src="./assets/adsdirect.jpg"
              class="w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            /> */}

            <Image
              src={adsDirect}
              className="w-full rounded-lg shadow-lg dark:shadow-black/20 moving-div"
              height="100"
              width="100"
            />
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
  );
};

export default About;
