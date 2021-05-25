import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Home = () => {

  const buttonVariants = {
    hover:{
      scale: 1.2,
      transition: {
        yoyo:Infinity
      }
    },
    initial:{
      x:-90

    },
    animate:{
      x:0,
      transition:{
        delay:2,
        duration:1,
        type:"spring",
        stiffness:200
      }
    }

  }


  return (
    <motion.div className="home container"

    transition={{
      delay:"200ms",
      duration:2
    }}

    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}
    >
      <motion.h2 animate={{}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariants}
whileHover="hover"
initial="initial"
animate="animate"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;