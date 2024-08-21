"use client";
import React from "react";
import Image from "next/image";


const Welcome: React.FC = () => {
  return (
    <div className="h-screen w-13/12 sm:-ml-1 lg:-ml-10 md:-my-10 sm:-my-4 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-800 flex items-center justify-center">
      <div className="flex flex-col items-end  px-4">
        <div className="text-white text-5xl font-bold">
                <h1 className="pt-4">Your centralised dashboard</h1>
                <h1 className="pt-4">for seamlessly managing and organising</h1>
                <h1 className="pt-4">both school-endorsed and personal resources</h1>
                <h1 className="pt-4 pb-16">in <span className="text-indigo-500">one convenient place.</span></h1></div>
                <div className="items-end">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={352}
                  height={64}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={352}
                  height={64}
                />
                </div>
      </div>
    </div>
  );
};

export default Welcome;
