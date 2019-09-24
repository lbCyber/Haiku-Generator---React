import React from 'react'
import '../css/frog.css'
import Rippler from '../js/ripple.js'

const FrogBackground = () => {
    return (
      <div className="pond" id="pond" onClick={Rippler}>
        <img className="frog" src="../assets/frog.svg" alt="" />
        <img className="lpad1" src="../assets/lpad.svg" alt="" />
        <img className="lpad2" src="../assets/lpad.svg" alt="" />
      </div>
    )
  }


export default FrogBackground;