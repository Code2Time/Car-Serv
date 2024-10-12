import { Menu, MenuButton, MenuItem, MenuItems ,Disclosure, Transition  } from '@headlessui/react'
import { ChevronDownIcon , Bars3Icon, XMarkIcon  } from '@heroicons/react/20/solid'
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import {MdConnectWithoutContact,MdHome} from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GrServices } from "react-icons/gr";


function Navbar() {
  return (
  <>
    {/* <div className='dropdown-container w-6/12 mx-auto'>
        <Menu as="div" className="relative inline-block text-left ">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Pages
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
      </MenuButton>
    </div>

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1">
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Account settings
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            License
          </a>
        </MenuItem>
        <form action="#" method="POST">
          <MenuItem>
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Sign out
            </button>
          </MenuItem>
        </form>
      </div>
    </MenuItems>
  </Menu>
    </div> */}
    <Disclosure
        dir="rtl"
        id="nav-container"
        as="nav"
        className=" top-0  dark:bg-bg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 ">
                  
                <NavLink
                  to="/services"
                  className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Services</span>
                  <GrServices />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Contact</span>
                  <MdConnectWithoutContact />
                </NavLink>
                    <NavLink
                  to="/"
                  className="text-blue-one dark:text-blue-two  dark:hover:text-blue-three hover:text-my-white   px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Home</span>
                <MdHome />
                </NavLink>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div className="flex flex-row-reverse justify-center items-center gap-3 text-car-red1 cursor-pointer">
                    <FaCar size={22} />
                    <h1 className="playwrite3">Car Serv </h1>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    ></Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink
                  to="/"
                  className="text-blue-one dark:text-blue-two  dark:hover:text-blue-three hover:text-my-white   px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Home</span>
                  <MdHome />
                </NavLink>
                <NavLink
                  to="/services"
                  className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Services</span>
                  <GrServices />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Contact</span>
                  <MdConnectWithoutContact />
                </NavLink>
             <div className='dropdown-container '>
        <Menu as="div" className="text-left ">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Pages
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
      </MenuButton>
    </div>

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1">
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Account settings
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            License
          </a>
        </MenuItem>
        <form action="#" method="POST">
          <MenuItem>
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Sign out
            </button>
          </MenuItem>
        </form>
      </div>
    </MenuItems>
  </Menu>
    </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  </>
    
  )
}

export default Navbar
