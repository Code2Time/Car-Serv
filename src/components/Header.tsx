import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
function Header() {
  return (
    <div className="Header-container hidden md:flex justify-around items-center gap-2 w-full h-5 md:h-10 bg-car-gray1  ">
      <div className="Header-item flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-2 text-xs">
          <IoLocation className="text-car-red1 " />
          <h2>123 Street, New York, USA</h2>
        </div>
        <div className="flex justify-center items-center gap-2 text-xs">
          <LuClock className="text-car-red1" />
          <h2> Mon - Fri : 09.00 AM - 09.00 PM</h2>
        </div>
      </div>
      <div className="Header-item flex justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-2 text-xs">
          <FaPhoneAlt className="text-car-red1" />
          <h2>+012 345 6789</h2>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-3 text-xs text-car-red1">
            <li className="p-2 bg-white cursor-pointer hover:text-white hover:bg-car-red1 transition-all">
              <FaFacebookF />
            </li>
            <li className="p-2 bg-white cursor-pointer hover:text-white hover:bg-car-red1 transition-all">
              <FaTwitter />
            </li>
            <li className="p-2 bg-white cursor-pointer hover:text-white hover:bg-car-red1 transition-all">
              <FaLinkedinIn />
            </li>
            <li className="p-2 bg-white cursor-pointer hover:text-white hover:bg-car-red1 transition-all">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
