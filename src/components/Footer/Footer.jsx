import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";
// import { BiFontFamily } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Espresso Lane</h1>
            <p className=" text-sm max-w-[300px]">
            Special offers, brewing tips & recipes! Get an insider access to new launches, events & more - straight to your inbox!<br/>(We promise not to spam!)
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Gurugram, Haryana
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Coffee</li>
                  <li>Merchandise</li>
                  <li>Equipment</li>
                  <li>Track Order</li>
                  <li>Wholesale</li>
                </ul>
              </div>
              {/* Second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Our Roastaries</li>
                  <li>Our Beliefs</li>
                  <li>Our Farms</li>
                  <li>Packaging</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-110 duration-200" />
              <FaInstagram className="text-3xl hover:scale-110 duration-200" />
              <FaTelegram className="text-3xl hover:scale-110 duration-200" />
              <FaGoogle className="text-3xl hover:scale-110 duration-200" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="credit cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>

        {/* copyright section */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Espresso Lane. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
