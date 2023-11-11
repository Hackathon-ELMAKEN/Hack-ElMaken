"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
    className='title'
      initial={{ y: -1000 }}
      animate={{ y: 0 }} 
      transition={{ delay: 0.3, y: { type: 'spring', stiffness: 50 } }}
    >
      AWS Certified Cloud practitioner
    </motion.div>
  );
};

export default Header;