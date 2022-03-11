import React from 'react'
import { FaSearch, FaUsers, FaFolder } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

function LeftContainer() {
  return (
    <div className='left-container'>
      <div>
        <h1 onClick={() => { alert('For What Are You Looking...') }}><FaSearch /></h1>
        <h1 onClick={() => { alert('Is Everything Correct...') }}><FaUsers /></h1>
        <h1 onClick={() => { alert('No Files Found...') }}><FaFolder /></h1>
      </div>
      <div className='settings' onClick={() => alert('Configure Your Settings')}><FiSettings /></div>
    </div>
  )
}

export default LeftContainer