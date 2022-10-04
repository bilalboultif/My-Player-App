import { useEffect } from 'react'
import ReactPlayer from 'react-player'

const PlayerScreen = ({ reciterDetail, chapterDetail }) => {
  const audiLink = (reciter, number) =>
    reciter + '/' + ('00' + number).slice(-3) + '.mp3'

  useEffect(() => {}, [chapterDetail, reciterDetail])

  return (
    <div style={{border: '1px black'}}>
    <div style={{border: '1px black'}} className='width-vh-50 height-vh-50 shadow-lg p-2 bg-red'>
      <h1 className='menu fs-3 fw-bold text-center'>الاستماع للقرآن الكريم</h1> <hr />
      {reciterDetail !== null && chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between p-0`}
            >
              <span className='fw-bold'>القارئ: </span>{' '}
              <span>{reciterDetail.name}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between cursor fs-7 p-0`}
            >
              <span>{chapterDetail.name_arabic}</span>
              <span className='fw-bold'> :السورة  </span>{' '}
              
            </li>
            <hr />

            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between cursor fs-7`}
            >
              <span className='fw-bold'>Surrah In English: </span>{' '}
              <span>{chapterDetail.name_complex}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between cursor fs-7`}
            >
              <span className='fw-bold'>مكان النزول: </span>{' '}
              <span>{chapterDetail.revelation_place}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between cursor fs-7`}
            >
              <span className='fw-bold'>Translated Name: </span>{' '}
              <span>{chapterDetail.translated_name.name}</span>
            </li>
            <hr />

            <div className='div '>
              <ReactPlayer
                url={audiLink(reciterDetail.Server, chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60%'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
    </div>
  )
}

export default PlayerScreen
