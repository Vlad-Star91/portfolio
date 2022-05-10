import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/star-vlad91/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Vlad-Star91" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100008884396741"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
