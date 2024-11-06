import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full  bg-gray-200">
        <div className="max-w-[1280px] flex  justify-between  ps-5 pe-12  py-4 pb-6">
          <div>
            <h4 className="font-semibold text-green-900">Popular Locations</h4>
            <p className="text-sm text-green-900 opacity-70 hover:opacity-100">
              Kolkata
            </p>
            <p className="footer-p-text">Mumbai</p>
            <p className="footer-p-text">Chennai</p>
            <p className="footer-p-text">Pune</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-900">Trending Locations</h4>
            <p className="footer-p-text">Bhubaneshwar</p>
            <p className="footer-p-text">Hyderabad</p>
            <p className="footer-p-text">Chandigarh</p>
            <p className="footer-p-text">Nashik</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-900">About Us</h4>
            <p className="footer-p-text">Tech@OLX</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-900">OLX</h4>
            <p className="footer-p-text">Blog</p>
            <p className="footer-p-text">Help</p>
            <p className="footer-p-text">Sitemap</p>
            <p className="footer-p-text">Legal & Privacy information</p>
            <p className="footer-p-text">Vulnerability Disclosure Program</p>
          </div>
          <div className="relative  text-green-900">
            <h4 className="font-semibold text-green-900">Follow Us</h4>
            <div className="flex justify-around text-xl gap-2">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <IoLogoInstagram />{" "}
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaRegCirclePlay />
              </a>
            </div>
            <div className="absolute bottom-0 right-7 flex justify-center gap-2">
              <img
                src="https://statics.olx.in/external/base/img/playstore.png"
                alt=""
              />
              <img
                src="https://statics.olx.in/external/base/img/appstore.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-teal-950">
        <div className="flex justify-around items-center p-4">
          <div className="">
            <div className="flex gap-7">
              <img
                className="w-[13.6rem] h-[6rem] pe-12"
                src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
                alt="car_trade"
              />
              <div className="w-[3px] h-100 bg-white"></div>
              <img
                className="w-[13.6rem] h-[6rem] "
                src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
                alt="olx"
              />
              <img
                className="w-[13.6rem] h-[6rem] pe-12"
                src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
                alt="carwale"
              />
              <img
                className="w-[13.6rem] h-[6rem] pe-12"
                src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
                alt="bikewale"
              />
              <img
                className="w-[13.6rem] h-[6rem] pe-12"
                src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
                alt="mobility"
              />
            </div>
          </div>
        </div>

        <div className=" text max-w-[1280px] px-6 pt-2 flex justify-between text-sm text-white">
          <p>Help-Sitemap</p>
          <p>All rights reserved © 2006-2024 OLX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
