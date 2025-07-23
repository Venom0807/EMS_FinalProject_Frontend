import React from "react";
import icon from '../assets/iconm.png'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'
import github from '../assets/github.svg'
function Footer() {
  return (
    <footer class="text-gray-600 bg-black mt-2 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-80  flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={icon} alt="" />
            <span class="ml-3 text-[#50c878] text-[1.25rem]">Eventify</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">All your favorite is here</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#50c878] tracking-widest text-[1.1rem] mb-3">Quiks Links</h2>
            <div class="list-none flex flex-col gap-2 mb-10">
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">Home</a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">About</a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">Contact</a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">Team</a>
              </li>
            </div>
          </div>
          <div class="lg:w-1/4  md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#50c878] tracking-widest text-[1.1rem] mb-3">Contact info</h2>
            <div class="list-none flex flex-col gap-2 mb-10">
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">ph:123456789</a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">Email:Eventify@gmail.comt</a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-[#50c878]">Address:Arfa Kareem Tower,Lahore</a>
              </li>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#50c878] tracking-widest text-[1.1rem] mb-3">Social Media</h2>
            <div class="list-none flex justify-center gap-4  items-center mb-10">

              <li>
                <a class="text-gray-600 cursor-pointer hover:text-gray-800"><img src={youtube} alt="" /></a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-gray-800"><img src={facebook} alt="" /></a>
              </li>
              <li>
                <a class="text-gray-600 cursor-pointer hover:text-gray-800"><img src={github} alt="" /></a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#50c878]">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-white text-sm ">
            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank">© Eventify-All rights Reserved</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-white">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
