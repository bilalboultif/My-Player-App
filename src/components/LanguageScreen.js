import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const LanguageScreen = ({ languages, languageHandler }) => {
  const [activeId, setActiveId] = useState('')

  return (
    <div className='min-vh-100 shadow-lg p-2 bg-red '>
      <h1 className='fs-3 fw-bold text-center'></h1> <hr />
      {languages && languages.length > 0 ? (
        languages.map((language) => (
          <div key={language.id}>
              console.console.log(language.id);
            <div
              onClick={(e) => {
                languageHandler(language)
                setActiveId(language.id)
                console.log(language)
              }}
              className={`d-flex align-items-center py-0 cursor ${
                language.id === activeId && 'active'
                
              }`}
            >
            
                         <FaUserCircle className='fs-1' />
              <span className='px-3 cursor' >{language.id}</span> <br />
              
             
              
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

export default LanguageScreen
