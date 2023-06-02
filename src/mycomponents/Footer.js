import React from 'react'
import {FaLink} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
import {FiCamera} from "react-icons/fi";
import {BiVideo} from "react-icons/bi";
import {GrDocumentUpdate} from "react-icons/gr";
const Footer = () => {
  function footer_icon(){
    let icons = document.getElementById("icon_extract")
    if (icons.style.display === "none") {
      icons.style.display = "flex";
    } else {
      icons.style.display = "none";
    }
  }
  return (
    <footer className="footer">
  <div className="footer-content">
    <input type="text" placeholder="Type your message..." className="message-input"/>

    <div className="icon_extract" id='icon_extract'>
      <FiCamera className='camera-icon icon'/>
      <BiVideo className='video-icon icon'/>
      <GrDocumentUpdate className='document-icon icon'/>
    </div>
    <div className="icons">
    <FaLink className='link-icon' onClick={footer_icon}/>
    <FiSend className='send-icon'/>
    </div>
  </div>
</footer>
  )
}

export default Footer
