import { useState } from 'react'

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState('')

  return (
    <div className='min-vh-100 shadow-lg p-1 bg-red'>
      
      <h1 className='fs-3 fw-bold text-center '></h1> <hr />
      <ul className='list-group text-end'>
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div key={chapter.id}>
              <li
                onClick={(e) => {
                  chapterHandler(chapter)
                  setActiveId(chapter.id)
                }}
                className={`list-group-item bg-transparent border-0 text-light py-1 d-flex justify-content-between cursor fs-7 ${
                  chapter.id === activeId && 'active'
                }`}
              >
                <span>〘{chapter.name_simple}〙 </span> <span>{chapter.translated_name.name}</span>
              </li>
              <hr />
            </div>
          ))
        ) : (
          <div className='text-center'>
            <span className='spinner-border'></span>
          </div>
        )}
      </ul>
    </div>
  )
}

export default ChaptersScreen
