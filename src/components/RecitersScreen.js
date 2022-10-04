import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const RecitersScreen = ({ reciters, reciterHandler }) => {
  const [activeId, setActiveId] = useState('')

  return (
    <div className='min-vh-100 shadow-lg p-2 bg-red '>
      <h1 className='fs-3 fw-bold text-center'></h1> <hr />
      {reciters && reciters.length > 0 ? (
        reciters.map((reciter) => (
          <div key={reciter.id}>
            <div
              onClick={(e) => {
                reciterHandler(reciter)
                setActiveId(reciter.id)
                console.log(reciter)
              }}
              className={`d-flex align-items-center py-0 cursor ${
                reciter.id === activeId && 'active'
                
              }`}
            >
            
                         <FaUserCircle className='fs-1' />
              <span className='px-3'>{reciter.name}</span> <br />
              <span className='px-3'>{reciter.rewaya}</span> <br />
             
              
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
  )
}

export default RecitersScreen
