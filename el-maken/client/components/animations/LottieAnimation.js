"use client"
import talent from "../../public/talent.json"
import Lottie from "lottie-react"

function LottieAnimation({animation}) {
  return <Lottie loop={true} className="photo-number" animationData={animation}/>
}

export default LottieAnimation;