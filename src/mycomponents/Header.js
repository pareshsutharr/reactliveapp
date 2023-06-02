import React from 'react'
import {BiMenu} from "react-icons/bi"
const Header = () => {
  function toggleMenu() {
    var menu = document.getElementById("popup-menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  return (
    <header className="header">
  <div className="profile">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRooEkgUSA8K9EFYl5j7SbTmV_78crkCpZA&usqp=CAU" alt="Profile Picture" className="profile-picture"/>
    <span className="person-name">Paresh Suthar</span>
  </div>
  <div className="menu-icon" >
    <BiMenu onClick={toggleMenu} className='internal-icon'/>
  </div>
  <div id="popup-menu" className="popup-menu">
    <ul>
      <li><a href="#">Member Share</a></li>
      <li><a href="#">Number</a></li>
      <li><a href="#">Report</a></li>
    </ul>
  </div>
</header>

  )
}

export default Header
