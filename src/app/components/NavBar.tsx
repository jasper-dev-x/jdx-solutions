"use client";

import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import Link from "next/link";
import {Fragment, useState} from "react";
import {IoClose, IoMenu} from "react-icons/io5";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {href: "/about", label: "About"},
    {href: "/services", label: "Services"},
    {href: "/contact", label: "Contact"},
    {href: "/portfolio", label: "Portfolio"},
  ];

  return (
    <div className='navbar flex w-full justify-between p-3 sticky top-0 bg-gray-200 text-black'>
      <Link
        href='/'
        className='btn btn-ghost font-bold text-2xl'>
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
          className='w-1/3 origin-top-right rounded-xl border bg-gray-300 px-3 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'>
          {links.map((link) => (
            <MenuItem key={link.href}>
              <Link
                className={"block my-2"}
                href={link.href}>
                <span className='text-black'>{link.label}</span>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
