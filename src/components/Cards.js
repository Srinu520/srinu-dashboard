import React from 'react'

function Cards({cards}) {
  return (
    <div id='cards'>
      <div className='d-flex justify-content-between'>
        {
          cards.map((card, index) => {
            return (
              <div key={index} className='card'>
                <div className='card-header'>
                  <h3>{card.title}</h3>
                </div>
                <div className='card-body d-flex justify-content-between align-items-center'>
                  <h1>{card.value}</h1>
                  <div className=''>
                    {
                      card.category.map((category, index) => {
                        return (
                          <p key={index}>{category}</p>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards