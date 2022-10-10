import { useEffect } from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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
             
              <span>{reciterDetail.name}</span>
              <span className='fw-bold'>:القارئ </span>{' '}
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between cursor fs-7 p-0`}
            >
              <span>{chapterDetail.name_arabic}</span>
              <span className='fw-bold'> :السورة  </span>{' '}
              
            </li>
            <hr />

          
            

         
      <>
      
        {/*<audio />*/}
        <AudioPlayer
          autoPlay
          src={audiLink(reciterDetail.Server, chapterDetail.id)}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      </>
    
          </div>
        </ul>
      ) : (
        <div className='text-center'>
          <span className='spinner-border'>بلال </span>
        </div>
      )}
    </div>
    </div>
  )
}

export default PlayerScreen
