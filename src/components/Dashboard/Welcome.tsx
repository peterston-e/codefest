"use client";
import React from "react";
import Image from "next/image";


const Welcome: React.FC = () => {
  return (
    <div className="h-screen w-full sm:ml-0 lg:-ml-10 md:-mt-10 xl:-my-10 sm:-my-4 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-800 flex items-center justify-center overflow-hidden">
  <div className="flex flex-col items-center sm:items-end px-10">
    <div className="text-white text-left sm:text-left text-3xl sm:text-5xl font-bold">
      <h1 className="pt-4">Your centralized dashboard</h1>
      <h1 className="pt-4">for seamlessly managing and organizing</h1>
      <h1 className="pt-4">both school-endorsed and personal resources</h1>
      <h1 className="pt-4 pb-16">
        in <span className="text-indigo-500">one convenient place.</span>
      </h1>
    </div>
    <div className="mt-4">
      <Image
        className="block dark:hidden mx-auto sm:mx-0"
        src="/images/logo/logo.svg"
        alt="Logo"
        width={352}
        height={64}
      />
      <Image
        className="hidden dark:block mx-auto sm:mx-0"
        src="/images/logo/logo.svg"
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
