import React from 'react'
import { useState } from 'react'
import './Button.css';


const Button = (props) => {


  return (

    <div className="inputs ">
        <button type="submit" name="loginButton" className="btn" id="loginButton">{props.text}</button>
    </div>

  )
}

export default Button