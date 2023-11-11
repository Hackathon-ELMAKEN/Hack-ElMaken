"use client"
import React, { useState } from "react";
import VideoPlayer from "../Player/VideoPlayer";

const AwsVideo = ({ src, thumbnail}) => {
    const [play,setPlay]=useState(1)
  return (
    <div className=" video-landing-page ">
      {" "}
      <VideoPlayer
        videoSrc={src}
        thumbnailSrc={thumbnail}
        setPlay={setPlay}
        play={play}
      />
    </div>
  );
};

export default AwsVideo;
