import {Menu,MenuButton,MenuItem,MenuItems,Disclosure,Transition,} from "@headlessui/react";
import {ChevronDownIcon,Bars3Icon, XMarkIcon,} from "@heroicons/react/20/solid";
import { MdConnectWithoutContact, MdHome } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GrServices } from "react-icons/gr";
import logo from "../assets/img/logo.png";
import { path } from "../types/Types";
import { Fragment } from "react";

function Navbar() {
  // get path for dropdown styles
  const path : path = useLocation().pathname

  return (
    <>
      <Disclosure
        dir="rtl"
        id="nav-container"
        as="nav"
        className=" top-0  dark:bg-bg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 md:text-2xl">
              <div className="relative flex h-20 items-center justify-between">
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
                      <div className="dropdown-container ">
                        <Menu as="div" className="text-left ">
                          <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm text-white shadow-sm bg-car-red1 transition-all hover:text-car-red1 hover:bg-white">
                              Pages
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="-mr-1 h-5 w-5"
                              />
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <Link
                                  to="/about"
                                  className={`${path == '/about'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                                >
                                  About us
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  to="/support"
                                  className={`${path == '/support'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                                >
                                  Support
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  to="/bookink"
                                  className={`${path == '/bookink'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                                >
                                  Bookink
                                </Link>
                              </MenuItem>
                              <Link
                                to="/testimonial"
                                className={`${path == '/testimonial'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                              >
                                Testimonial
                              </Link>
                            </div>
                          </MenuItems>
                        </Menu>
                      </div>
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
                    <div className="flex flex-row-reverse justify-center items-center gap-3 text-car-red1 cursor-pointer logo">
                      <img src={logo} alt="car-serv-logo" className="size-14 md:size-20 transition-all hover:-translate-y-1" />
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
                <div className="dropdown-container ">
                        <Menu as="div" className="text-left ">
                          <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm text-white shadow-sm bg-car-red1 transition-all hover:text-car-red1 hover:bg-white">
                              Pages
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="-mr-1 h-5 w-5"
                              />
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <Link
                                  to="/about"
                                  className={`${path == '/about'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                                >
                                  About us
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  to="/support"
                                  className={`${path == '/support'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                                >
                                  Support
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  to="/bookink"
                                  className={`${path == '/bookink'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                                >
                                  Bookink
                                </Link>
                              </MenuItem>
                              <Link
                                to="/testimonial"
                                className={`${path == '/testimonial'? "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 text-car-red1" : "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"}`}
                              >
                                Testimonial
                              </Link>
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
  );
}

export default Navbar;
