import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT</h1>
        <div className="contact-icon"
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
          <a href='https://www.instagram.com/dhawal4849?igsh=bXpxOXBhajk0YTU5' target='blank' className="items"><FaInstagramSquare className='icons'/></a>
          <a href='https://www.facebook.com/share/167gAGfqQA/' target='blank' className="items"><FaFacebook className='icons'/></a>
          <a href='https://www.linkedin.com/in/santosh-kumar-dhawal-60ba0022a' target='blank' className="items"><FaLinkedin className='icons'/></a>
          {/* <a href='https://www.thread.com' target='blank' className="items"><FaXTwitter className='icons'/></a> */}
          <a href='https://www.github.com/GitH05' target='blank' className="items"><FaGithub className='icons'/></a>
          <a href='mailto:tian999990@gmail.com' target='blank' className="items"><CgMail className='icons'/></a>
        </div>
      </div>
    </>
  )
}

export default contact