import React from "react";
import scan from "../assets/scan.svg";
import contact from "../assets/contact.svg";
import shravan from "../assets/shravan.svg";

const Footer = () => {
  return (
    <div className="footer_container">
      {/* 1div */}
      <div className="ft_text_container">
        <p className="need">need attention</p>
        <p className="view">view all</p>
      </div>
      {/* 2div */}
      <div className="low_container">
        <div className="inner_container">
          <div className="inner_container_img">
            <img className="footer_img" src={scan} alt="" />
          </div>
          <p className="inner_text">scan & pay</p>
        </div>
        <div className="inner_container">
          <div className="inner_container_img">
            <img className="footer_img" src={shravan} alt="" />
          </div>
          <p className="inner_text">shravan pm</p>
        </div>
        <div className="inner_container">
          <div className="inner_container_img">
            <img className="footer_img" src={contact} alt="" />
          </div>
          <p className="inner_text">Pay Contacts</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
