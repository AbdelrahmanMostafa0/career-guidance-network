import Link from "next/link";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="bg-white border-t-2 ">
      <div className="w-[90%] mx-auto py-14 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-4/12 space-y-4">
          <h3 className="text-3xl font-bold">Career guidance network</h3>
          <p>
            Empower your career journey with Carrer Guidance Network. Connect,
            collaborate, and thrive in our vibrant professional community. Your
            next opportunity awaits here. Join us today!
          </p>
        </div>{" "}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-semibold mb-3">Useful Links</h4>
          <Link className="text-lg" href={"/about"}>
            About Us
          </Link>
          <Link className="text-lg" href={"/about"}>
            Blogs
          </Link>
          <Link className="text-lg" href={"/about"}>
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-semibold mb-3"> Help</h4>
          <Link className="text-lg" href={"/about"}>
            FAQ
          </Link>
          <Link className="text-lg" href={"/about"}>
            Terms Of Service
          </Link>
          <Link className="text-lg" href={"/about"}>
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-semibold mb-3">Social</h4>
          <Link className="text-lg" href={"/about"}>
            <EmailOutlinedIcon /> Email
          </Link>
          <Link className="text-lg" href={"/about"}>
            <FacebookOutlinedIcon /> Facebook
          </Link>
          <Link className="text-lg" href={"/about"}>
            <LinkedInIcon /> Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
