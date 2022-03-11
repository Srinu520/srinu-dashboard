import React from 'react'
import { FaBars } from "react-icons/fa";
import { FcLeft } from "react-icons/fc";
import Cards from './Cards';
import DataChart from './DataChart';
function RightContainer({data, options, cards}) {
  return (
    <div className='right-container'>
          <div className='sub-navbar'>
            <div><h1>Srinu</h1></div>
            <div>
              <ul className='nav-items'>
                {
                  ['Prediction', 'Performence', 'Engagement', 'Engagement'].map((link, index) => {
                    return (
                      <li key={index}><a href="">{link}</a></li>
                    )
                  })
                }
                <li onClick={() => alert('Here No Menu...!')}><FaBars /></li>

              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-between p-2'>
            <h3 onClick={() => alert("Want's to go back, Currently Not Possible")}><FcLeft /> ssss</h3>
            <h3 onClick={() => alert('Here No Menu...!')}>Edit</h3>
          </div>
          <div className='line-filters'>
            {
              ['All', 'Work', 'Education', 'Health Care', 'Transport', 'Shoping', 'F&B', 'Population', 'Heatmap'].map((filter, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={filter}> {filter} </label>
                    <input type="radio" name="filter" id={filter} />
                  </div>
                )
              })
            }
          </div>
          <Cards cards={cards} />
          <DataChart data={data} options = {options} />
        </div>
  )
}

export default RightContainer