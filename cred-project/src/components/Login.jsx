import React from "react";
import "./Login.css";
import { IoIosArrowRoundForward } from "react-icons/io";
const Login = () => {
  return (
    <div className="login-container">
      {/* 1div */}
      <div className="login-head">
        <p className="text">membership application</p>
        <h4 className="sectext">tell us your mobile number</h4>
      </div>
      {/* 2div */}
      <div className="mobileinput-container">
        <div className="input-container">
          <input className="input-tel" type="tel" />
        </div>
        <div className="checkbox">
          <input className="inputcheckbox" type="checkbox" />
          <span style={{ backgroundColor: "white", fontSize: "12px" }}>
            allow CRED to access your information from{" "}
            <span style={{ fontWeight: "bold", backgroundColor: "white" }}>
              RBI approved bureaus
            </span>
            this doses not impact your credit score
          </span>
        </div>
        <div className="agree_continue">
        <button className="agree-btn">Agree and continue <IoIosArrowRoundForward style={{backgroundColor:"grey"}} /></button>
      </div>
      </div>
      {/* 3div */}
     
    </div>
  );
};

export default Login;
