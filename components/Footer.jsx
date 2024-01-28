import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>

    <p>2024 Belsoft solutions Store All rights reserverd</p>
    <p >
      This website was made by <a 
      href="https://www.belsoftsolutions.com/"
      style={{
      fontSize: "1rem",
      fontWeight: "bold",
      color: "blue",
      textAlign: "center",
      marginTop: "1rem",
      textDecoration: "underline",
    
    }}
      >
      
      Belsoft solutions</a> 
    </p>

    <p className="icons">
      <AiFillInstagram />
      <AiFillFacebook />
      <AiOutlineTwitter />
      
    </p>

    </div>
  )
}

export default Footer