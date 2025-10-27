import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="div">
        <div className="p-4">
          <div className="join join-vertical w-full mx-auto">
            <button className="join-item  bg-base-100 justify-start btn">
              <FaFacebook></FaFacebook> Facebook
            </button>
            <button className="join-item bg-base-100 justify-start btn">
              <FaTwitter></FaTwitter>Twitter
            </button>
            <button className="join-item bg-base-100 justify-start btn">
              <FaInstagram></FaInstagram> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
