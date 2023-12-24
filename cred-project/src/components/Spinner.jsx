import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";
import spinnerarrow from "../assets/spinnerarrow.svg";

import "./Spinner.css"; // Make sure to import your CSS file

const Spinner = () => {
  const wheelRef = useRef(null);
  const spinBtnRef = useRef(null);
  const finalValueRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 2 },
    { minDegree: 31, maxDegree: 90, value: 1 },
    { minDegree: 91, maxDegree: 150, value: 6 },
    { minDegree: 151, maxDegree: 210, value: 5 },
    { minDegree: 211, maxDegree: 270, value: 4 },
    { minDegree: 271, maxDegree: 330, value: 3 },
    { minDegree: 331, maxDegree: 360, value: 2 },
  ];
  useEffect(() => {
    const data = [16, 16, 16, 16, 16, 16];
    const pieColors = [
      "#8b35bc",
      "#b163da",
      "#8b35bc",
      "#b163da",
      "#8b35bc",
      "#b163da",
    ];

    const ctx = wheelRef.current.getContext("2d");

    const myChartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
          {
            backgroundColor: pieColors,
            data: data,
          },
        ],
      },
      options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
          tooltip: false,
          legend: {
            display: false,
          },
          datalabels: {
            color: "#ffffff",
            formatter: (_, context) =>
              context.chart.data.labels[context.dataIndex],
            font: { size: 24 },
          },
        },
      },
    });

    setMyChart(myChartInstance);

    return () => {
      // Clean up
      if (myChartInstance) {
        myChartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        finalValueRef.current.innerHTML = `<p>Value: ${i.value}</p>`;
        spinBtnRef.current.disabled = false;
        break;
      }
    }
  };

  let count = 0;
  let resultValue = 101;

  const spinHandler = () => {
    spinBtnRef.current.disabled = true;
    finalValueRef.current.innerHTML = `<p>Good Luck!</p>`;
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

    const rotationInterval = window.setInterval(() => {
      myChart.options.rotation = myChart.options.rotation + resultValue;
      myChart.update();

      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation === randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
      }
    }, 10);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <canvas ref={wheelRef} id="wheel"></canvas>
        <button ref={spinBtnRef} onClick={spinHandler} id="spin-btn">
          Spin
        </button>
        <img className="spinner-arrow" src={spinnerarrow} alt="spinner-arrow" />
      </div>
      <div className="spinner-value" ref={finalValueRef} id="final-value">
        <p>Click On The Spin Button To Start</p>
      </div>
    </div>
  );
};

export default Spinner;
