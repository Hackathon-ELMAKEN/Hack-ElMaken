"use client"
import { useRef, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import '../landing-page-components/carouselle-section/carouselle.css'
const VideoPlayer = ({ videoSrc, thumbnailSrc,setPlay,play }) => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setPlay(0)
    } else {
      video.pause();
      setPlay(1)
    }
  };
  return (
    <>  {play === 1 ? (<FaPlay className='playbutton' onClick={() => { togglePlay(); setPlay(0) }} />) : ""}
      <video className='video landing-video' onClick={togglePlay} ref={videoRef} controls={false} poster={thumbnailSrc}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      </>
  );
};

export default VideoPlayer;