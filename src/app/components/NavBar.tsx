"use client";

import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import Link from "next/link";
import {Fragment, useState} from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar flex w-full justify-between p-3 sticky top-0 bg-gray-200 text-black'>
      <Link
        href='/'
        className='flex items-center gap-2 btn btn-ghost font-bold text-2xl'>
        <Image
          className='object-contain w-[5vh]'
          src={LOGO}
          alt='...'
        />
        JDX Solutions
      </Link>

      <Menu>
        <MenuButton as={Fragment}>
          <button className='px-3 rounded'>
            <IoMenu />
          </button>
        </MenuButton>
        <MenuItems
          transition
          anchor='bottom end'
          style={{maxWidth: 300}}
          className='flex flex-col items-stretch w-5/12 p-4 origin-top-right rounded-xl border bg-gray-300  text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'>
          {links.map((link, index) => (
            <MenuItem key={link.href}>
              <Link
                className={"block text-center"}
                href={link.href}>
                <span className='text-black font-bold'>{link.label}</span>
                {index !== links.length - 1 ? (
                  <hr
                    className='my-3'
                    style={{borderColor: "#C20000"}}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
