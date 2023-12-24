import React, { useState } from "react";
import "./Login.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [validate, setValidate] = useState(false);
  const MobileNumber = ["8083411512", "6202378933"];
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = () => {
    if (MobileNumber.includes(inputValue)) {
      setValidate(true);
      navigate("/landing");
    }
  };
  console.log({ validate });
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
          <input
            onChange={(e) => handleChange(e)}
            className="input-tel"
            type="tel"
          />
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
          <Link to="/landing">
            <button onClick={() => handleLogin()} className="agree-btn">
              Agree and continue{" "}
              <IoIosArrowRoundForward style={{ backgroundColor: "grey" }} />
            </button>
          </Link>
        </div>
      </div>
      {/* 3div */}
    </div>
  );
};

export default Login;
