import React from "react";
import CredLogo from "../assets/credLogo.png";
import styles from "./Header.module.css";
import cn from "classnames";
import { CiSettings } from "react-icons/ci";
import setting from "../assets/settings.svg";

const Header = () => {
  return (
    <div
      className={cn(
        styles.container,
        "col-12 px-3 pt-3 bg-black position-absolute"
      )}
      style={{
        borderBottom: "2px solid lightGray",
        left: 0,
        top: 0,
        height: "7vh",
      }}
    >
      <div
        style={{ backgroundColor: "transparent", height: "80%" }}
        className="d-flex justify-content-between align-items-center"
      >
        <div
          style={{ backgroundColor: "transparent" }}
          className="col px-0 h-100"
        >
          <img
            style={{ backgroundColor: "transparent" }}
            height={30}
            src={CredLogo}
            alt=""
          />
        </div>
        <div
          style={{ backgroundColor: "transparent" }}
          className="col px-0  d-flex h-100"
        >
          <div
            style={{ backgroundColor: "#2f2f2f" }}
            className="col-6 px-0 rounded-start-pill position-relative h-100 d-flex justify-content-center align-items-center"
          >
            <div
              style={{
                left: "8%",
                zIndex: 0,
                backgroundImage:
                  "url('https://i.pinimg.com/originals/a2/4e/d1/a24ed1a9e230248c45b8c30df1319732.jpg')",
                backgroundRepeat: "round",
              }}
              className="col-4 h-75 px-0 rounded-circle position-absolute text-white"
            ></div>
            <div
              style={{
                left: "30%",
                zIndex: 100,
                backgroundImage:
                  "url('https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/28/5c/86/285c862a-3a36-90d8-8a16-329408de4c7e/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.jpg')",
                backgroundRepeat: "round",
                backgroundColor: "yellow",
              }}
              className="col-4 h-75 px-0 rounded-circle position-absolute text-white"
            ></div>
            <div
              style={{
                left: "50%",
                zIndex: 1000,
                backgroundImage:
                  "url('https://1000logos.net/wp-content/uploads/2023/04/Dominos-logo.png')",
                backgroundRepeat: "round",
              }}
              className="col-4 px-0 h-75 rounded-circle position-absolute text-white bg-white"
            >
              {/* <img className="w-100" src={domino} /> */}
            </div>
          </div>
          <div
            style={{ backgroundColor: "#2f2f2f", fontSize: "10px" }}
            className="col-6 rounded-end-pill px-0 text-white d-flex justify-content-center align-items-center"
          >
            +3 offers
          </div>
        </div>
        <div
          style={{ backgroundColor: "transparent" }}
          className="col px-0 d-flex justify-content-end align-items-center"
        >
          <img style={{ backgroundColor: "transparent" }} src={setting} />
        </div>
      </div>
    </div>
  );
};

export default Header;
