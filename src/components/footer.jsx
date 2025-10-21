import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#570378] text-center mt-12 p-6 w-full ">
      <img
        src="assets/Logo.png"
        alt="Company Logo"
        className="h-50 mx-auto mb-6"
      />
      <p className="text-white text-sm">
        © {new Date().getFullYear()} Universe &amp; MD. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
