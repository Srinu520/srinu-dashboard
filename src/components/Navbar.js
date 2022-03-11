import React from 'react'
import './navbar.scss'
import { FaRegBell } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
function Navbar() {
  return (
    <nav id='top-navbar'>
      <h1>logo</h1>
      <ul className='nav-items'>
        <li><a href="">Prediction</a> </li>
        <li><a href="">Performence</a> </li>
        <li><a href="">Engagement</a> </li>
      </ul>
      <ui className='nav-items'>
        <li><a href=""><FaRegBell /></a></li>
        <li><a href=""><FiMessageSquare /></a></li>
      </ui>
    </nav>
  )
}

export default Navbar