import React from "react";
import Link from "next/link";
import { DownloadIcon, MailIcon } from "@heroicons/react/outline";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <div className="text-center mt-4 pb-5">
      {/* Button download resume */}
      <Link
        href="/files/cv.pdf"
        download="AlanLunaCV"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 text-sm"
      >
        <DownloadIcon className="h-5 w-5 inline-block" /> Resume
      </Link>

      {/* Button contact */}
      <Link
        href="mailto:alan.luna.desarrollo@gmail.com"
        className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition duration-300 ml-4 text-sm"
      >
        <MailIcon className="h-5 w-5 inline-block" /> Contact
      </Link>
      <div className="socialIcons mt-4">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
