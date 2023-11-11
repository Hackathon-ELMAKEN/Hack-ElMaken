"use client";

import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

function Fullpage({ arr1, arr2, imgSrc }) {
  // Import HTMLDivElement type

  return (
    <div className="image">
      <img
        className="image"
        src={imgSrc}
        alt="monkey"
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}


export default Fullpage;
