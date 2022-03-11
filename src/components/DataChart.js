import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'


function DataChart({ data, options}) {
  return (
    <div id='chart'>
            <div>
              <div>
                <Line data={data} options={options}/>
              </div>
              <section>
                <table class="table table-striped caption-top">
                  <caption>All</caption>
                  <thead>
                    <tr>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ratings</td>
                      <td>4.3-4.9</td>
                    </tr>
                    <tr>
                      <td>Reviews</td>
                      <td>100-1500</td>
                    </tr>
                    <tr>
                      <td>Dist. Range</td>
                      <td>15Kms</td>
                    </tr>
                  </tbody>
                </table>
                <button className='btn btn-primary'>Change Filter</button>
              </section>
            </div>
          </div>
  )
}

export default DataChart