"use client"
import React from 'react'
import {motion} from "framer-motion"
const RbkAws = () => {
  return (

<motion.div
    className="aws-rbk-title"
      initial={{ y: -3000 }}
      animate={{ y: 0 }} 
      transition={{ delay: 0.3, y: { type: 'spring', stiffness: 100 } }}
    >
          <img src="./RBK.png" alt="Rbk" />
          <img src="./awsRestart.png" alt="aws" />
          <p>
            Apprenez le cloud computing et lancez votre carrière dans le cloud
            avec <span>AWS re/Start</span>
          </p>
        </motion.div>
  )
}

export default RbkAws
