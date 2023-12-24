import React from "react";
import shopItem from "../assets/product/headphone.jpg";
import trip from "../assets/product/trip.jpg";
import leftArrow from "../assets/leftArrow.svg";
import { Link } from "react-router-dom";
const Shopping = () => {
  const data = [
    {
      id: 1,
      img: shopItem,
      msg: "reserve for you",
    },
    {
      id: 2,
      img: trip,
      msg: "access end on 24th dec",
    },
  ];
  return (
    <div className="col-12 px-3 py-3 position-relative bg-white">
      <div
        className="position-absolute bg-transparent"
        style={{ top: "1rem", left: "1rem", width: "2rem", height: "2rem" }}
      >
        <Link className="bg-transparent" to="/landing">
          <img className="bg-transparent w-100 h-100" src={leftArrow} />
        </Link>
      </div>
      <div className="h-100 pt-5 bg-transparent d-flex flex-column">
        {data.map((el) => (
          <div className="col-12 px-0 h-50 bg-transparent position-relative">
            <div
              style={{ color: "grey" }}
              className="col-12 px-0 py-4 bg-transparent fw-medium"
            >
              {el?.msg}
            </div>
            <div className="col-12 px-0 py-1 h-75 bg-transparent position-absolute">
              <img
                style={{ top: 0, left: 0 }}
                className="h-100 w-100"
                src={el.img}
                alt="rrt"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
