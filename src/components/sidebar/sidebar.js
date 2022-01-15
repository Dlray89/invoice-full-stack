import React from "react";
import Logo from "../../assets/logo.svg";
import Moon from '../../assets/icon-moon.svg'
import ProfilePic from '../../assets/image-avatar.jpg'

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__img-box">
        <img className="sidebar-container__img-box--logo" src={Logo} alt="logo" />
      </div>


      <div className="sidebar-container__icons-and-pic">
        <img className="sidebar-container__icons-and-pic--icon" src={Moon} alt="icon of a moon" />
        <img className="sidebar-container__icons-and-pic--pic" src={ProfilePic} alt="profile-pic" />
      </div>
    </div>
  );
};
