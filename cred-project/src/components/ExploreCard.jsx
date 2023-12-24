import React from "react";
import bill_recharge from "../assets/bill_recharge.svg";
import credit from "../assets/credit.svg";
import refer from "../assets/refer.svg";
import viewAll from "../assets/viewAll.svg";
import shopping from "../assets/shopping.svg";
import rentViaCard from "../assets/rentViaCard.svg";
import reward from "../assets/reward.svg";
import styles from "./ExploreCard.module.css";
const ExploreCard = () => {
  const ExploreData = [
    {
      id: 1,
      icon: credit,
      text: "credit card",
    },
    {
      id: 2,
      icon: bill_recharge,
      text: "bill & recharge",
    },
    {
      id: 3,
      icon: reward,
      text: "rewards",
    },
    {
      id: 4,
      icon: shopping,
      text: "shopping",
    },
    {
      id: 5,
      icon: rentViaCard,
      text: "rent via card",
    },
    {
      id: 6,
      icon: refer,
      text: "refer",
    },
    {
      id: 7,
      icon: viewAll,
      text: "view all",
    },
  ];
  return (
    <div className="col-12 pt-5">
      <div
        style={{ fontSize: "6px", color: "lightgray" }}
        className="col-12 px-0 text-left fw-bold"
      >
        EXPLORE CRED
      </div>
      <div className={styles.xploremaincontainer}>
        {ExploreData?.map((el) => (
          <div key={el.icon} className={styles.exploreContainer}>
            <img className="" src={el.icon} alt="icon" />
            <p className={styles.explore_text}>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCard;
