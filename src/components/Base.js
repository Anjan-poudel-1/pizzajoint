import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const ulContainervarient = {

    initial:{
      x:"100vh",

    },
    final:{
      x:0,
      transition:
      {
        duration:0.5,
        type:"spring",
        stiffness:130
      }
    }

  }

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <motion.ul variants={ulContainervarient}>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)} 
            whileHover={{
              scale:1.2,
              originX:0}}
            
               transition={{duration:0.4}}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </motion.ul>

      {pizza.base && (
        <motion.div className="next" initial={{x:"-600px"}} animate={{x:0}}>
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </div>
  )
}

export default Base;