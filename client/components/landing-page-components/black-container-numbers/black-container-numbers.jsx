"use client";
import React from "react";
import Number from "../../numbers/from0";
import "../../../app/landing.css";
const blackContainerNumbers = ({
  number,
  label,
  spanid,
  idstat,
  textStat,
  indc,
}) => {
  return (
    <>
      <div className="stats" id={idstat}>
        <p className="pinkies number">
          <span className="numbers-counter">
            <Number n={number} />
            {label}{" "}
            <span id={spanid} className="pinkies">
              {indc}
            </span>
          </span>
        </p>
        <p className="stat-text">{textStat}</p>
      </div>
    </>
  );
};

export default blackContainerNumbers;
