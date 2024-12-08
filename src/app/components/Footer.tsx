import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5  py-4 w-full bg-white">
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* left Side*/}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold font-['Plus Jakarta sans'] text-center lg:text-left">MORENT</h1>
          <p className="text-gray-500 text-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

   {/* Right Side */}
        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-semibold font-['Plus Jakarta Sans'] text-[#1A202C]text-20"><h1>About</h1></li>
              <li className="text-sm font-['Plus Jakarta Sans'] text-gray-500">How it works</li>
              <li className="text-sm font-['Plus Jakarta Sans'] text-gray-500">Featured</li>
              <li className="text-sm font-['Plus Jakarta Sans'] text-gray-500">Partnership</li>
              <li className="text-sm font-['Plus Jakarta Sans'] text-gray-500">Business Relation</li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-semibold font-['Plus Jakarta Sans'] text-20 text-[#1A202C]"><h1>Community</h1></li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Events</li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Blog</li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Podcast</li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Invite a friend</li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-semibold font-['Plus Jakarta Sans'] text-[20px] text-[#1A202C]"><h1>Socials</h1></li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Discord</li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Instagram</li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Facebook</li>
              <li className='text-sm font-["Plus Jakarta Sans"] text-gray-500'>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Last Line */}
      <div className="line border-t w-full border-[#e7eef6]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-semibold font-['Plus Jakarta Sans'] text-[#1A202C] text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-semibold font-['Plus Jakarta Sans'] text-[#1A202C] text-sm">Privacy & Policy</h1>
          <h1 className="font-semibold font-['Plus Jakarta Sans'] text-[#1A202C] text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
