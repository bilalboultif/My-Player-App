import { useEffect, useState } from 'react'
import axios from 'axios'
import RecitersScreen from './RecitersScreen'
import PlayerScreen from './PlayerScreen'
import ChaptersScreen from './ChaptersScreen'

const HomeScreen = () => {
  const [reciters, serReciters] = useState([])
  const [chapters, setChapters] = useState([])

  const [chapterDetail, setChapterDetail] = useState(null)
  const [reciterDetail, setReciterDetail] = useState(null)

  // Get All Reciters with Audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_arabic.php`)

      serReciters(reciters)
    }

    fetchData()
  }, [])

  // Get All Chapters
  useEffect(() => {
    async function fetchData() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters`)

      setChapters(chapters)
    }
    reciters && reciters.length > 0 && fetchData()
  }, [reciters])

  const reciterHandler = (reciter) => {
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter)
  }

  return (
    <div>
      <div className='row p-0 home-body margin-0'>
    <div className='p-5 text-center  col-lg-6 pb-0 fs-2 fw-bold min-vh-100 shadow-lg p-0 bg-red'>
    قائمة القراء      </div>
      <div className='p-5 text-center  col-lg-6 pb-0 fs-2 fw-bold min-vh-100 shadow-lg p-0 bg-orang'>
      فهرس السور
      </div>
      
    </div>
      
    <div className='row p-0 home-body'>
    <div className='col-lg-6  scroll'>
        <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} />
      </div>
      <div className='col-lg-6  scroll '>
        <ChaptersScreen chapters={chapters} chapterHandler={chapterHandler} />
      </div>
      
    </div>
    <div className='col-lg-12  '>
        <PlayerScreen
          reciterDetail={reciterDetail}
          chapterDetail={chapterDetail}
        />
      </div>
    </div>
  )
}

export default HomeScreen
