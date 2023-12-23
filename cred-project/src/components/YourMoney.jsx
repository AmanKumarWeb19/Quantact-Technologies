import React from "react";
import cn from "classnames";
import credCash from "../assets/credCash.svg";
import bankAcc from "../assets/account.svg";
import rightArrow from "../assets/rightChevron.svg";
const YourMoney = () => {
  const data = [
    { acc: "Cred cash", icon: credCash, amt: "₹ 60,000" },
    { acc: "CNRB xx 1885", icon: bankAcc, amt: "check balance" },
  ];
  return (
    <div style={{ marginTop: "8vh" }} className={cn("px-3 d-flex flex-column")}>
      <div
        style={{ fontSize: "6px", color: "lightgray" }}
        className="col-12 px-0 text-left fw-bold"
      >
        YOUR MONEY
      </div>
      <div className="col-12 px-0 mt-3">
        {data?.map((el) => (
          <div
            style={{ fontSize: "12px", backgroundColor: "#2c2c2c" }}
            key={el.amt}
            className="col-12 px-0 d-flex mb-1 py-1"
          >
            <div
              style={{ backgroundColor: "#2c2c2c" }}
              className="col-6 px-2 d-flex"
            >
              <div className="col-2 bg-transparent d-flex justify-content-center align-items-center">
                <img className="bg-transparent" src={el?.icon} alt="cash" />
              </div>
              <div className="col-10 bg-transparent text-white d-flex justify-content-start align-items-center">
                {el?.acc}
              </div>
            </div>
            <div
              style={{ backgroundColor: "#2c2c2c" }}
              className="col-6 px-0 d-flex justify-content-center align-items-center"
            >
              <div className="bg-transparent d-flex justify-content-end text-white align-items-center col-10 ">
                {el.amt}
              </div>
              <div className="bg-transparent col-2 d-flex justify-content-end align-items-center">
                <img className="bg-transparent" src={rightArrow} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourMoney;
