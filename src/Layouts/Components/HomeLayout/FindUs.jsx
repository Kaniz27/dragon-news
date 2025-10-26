import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="div">
                <div class="p-4">
  <div class="join join-vertical w-full mx-auto">
    <button class="join-item bg-base-100 justify-start btn"><FaFacebook></FaFacebook> Facebook</button>
    <button class="join-item bg-base-100 justify-start btn"><FaTwitter></FaTwitter>Twitter</button>
    <button class="join-item bg-base-100 justify-start btn"><FaInstagram></FaInstagram> Instagram</button>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default FindUs;