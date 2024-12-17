import FooterLogo from "../../assets/footerLogo.png";

import QuickLinks from "./Quicklinks";
import Services from "./Services";
import CallNowButton from "./CallNowButton";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaDribbble } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-customBlue  text-white">
      <div className=" flex  flex-col  gap-2 justify-center sm:flex-row sm:justify-between items-center sm:items-start px-16 py-2 sm:pb-2">
        <div className="pt-8">
          <div>
            <img src={FooterLogo} alt="" className="w-[450px] h-auto py-0" />
          </div>
          <div className="flex justify-center space-x-4 py-6">
      {/* Facebook */}
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition duration-300">
        <FaFacebookF className="text-white text-xl" />
      </div>
      {/* Twitter */}
      <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition duration-300">
        <FaTwitter className="text-white text-xl" />
      </div>
      {/* Google+ */}
      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition duration-300">
        <FaGooglePlusG className="text-white text-xl" />
      </div>
      {/* LinkedIn */}
      <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition duration-300">
        <FaLinkedinIn className="text-white text-xl" />
      </div>
      
    </div>
        </div>
        <div>
          <QuickLinks />
        </div>
        <div >
          <Services />
        </div>
        <div className=" text-center  pb-2 sm:pb-6 px-2">
         <CallNowButton/>
        </div>
      </div>
      <div className="h-[2px] bg-green-500  mx-2 sm:mx-16 border-none">
        
      </div>
     
      <div className="text-xs sm:text-normal  text-center pb-4 px-2 sm:px-8 pt-2">Copyright@2024 Arog Bharat I All rights reserved.</div>
    </footer>
  );
};

export default Footer;
