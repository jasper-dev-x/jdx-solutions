"use client";

import Link from "next/link";
import {IoMenu} from "react-icons/io5";
import LOGO from "../icon.png";
import Image from "next/image";

const links = [
  {href: "/about", label: "About Us"},
  {href: "/services", label: "Our Services"},
  {href: "/portfolio", label: "Tech Portfolio"},
  {href: "/photography", label: "Photography"},
  {href: "/contact", label: "Contact Us"},
];

export const NavBar = () => {
  return (
    <div className='glass flex w-full justify-between p-3 sticky top-0  text-black z-40'>
      <Link
        href='/'
        className='flex items-center gap-2 font-bold text-2xl'>
        <Image
          className='object-contain h-[5vh] w-[5vh]'
          src={LOGO}
          alt='...'
        />
        JDX Solutions
      </Link>

      <div className='dropdown dropdown-end'>
        {/* MENU BTN */}
        <div
          tabIndex={0}
          role='button'
          className='btn m-1'>
          <IoMenu />
        </div>

        {/* NAV MENU */}
        <ul
          tabIndex={0}
          className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className={"block text-center py-2"}
                href={link.href}>
                <span className='text-black font-bold'>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
