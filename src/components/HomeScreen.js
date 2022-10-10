import { useEffect, useState } from 'react'
import axios from 'axios'
import RecitersScreen from './RecitersScreen'
import PlayerScreen from './PlayerScreen'
import ChaptersScreen from './ChaptersScreen'
import LanguageScreen from './LanguageScreen'

const HomeScreen = () => {
  const [reciters, serReciters] = useState([])
  const [chapters, setChapters] = useState([])

  const [chapterDetail, setChapterDetail] = useState(null)
  
  const [reciterDetail, setReciterDetail] = useState(null)
  const [languages,setLanguages] = useState([])
  const [languageDetail, setLanguageDetail] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const {
        data: {languages},
      } = await axios.get('https://mp3quran.net/api/mp3quran.json')
      setLanguages(languages)
    }
    languages && languages.length && fetchData()
  },[languages])

  // Get All Reciters with Audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_english.php`)

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

  const languagesHandler = (language) => {
      setLanguageDetail(language)
  }

  const reciterHandler = (reciter) => {
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter)
  }

  return (
   
    <div class="row p-0 home-body margin-0">
      <div class="col-md-12">
    <PlayerScreen
            reciterDetail={reciterDetail}
            chapterDetail={chapterDetail}
            languageDetail = {languageDetail}
          />
    </div>
    <div class="col-md-12">  
     
  
  
      <div class="p-5 text-center  col-lg-12 py-0 fs-2 fw-bold shadow-lg">
       Reciters List
      </div>
      <div class="row p-0 home-body">
         
        <div class="col-md-12 scroll fs-2 fw-bold">
        <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} /> 
        </div>
        <div class="p-5 text-center  col-lg-12 py-0 fs-2 fw-bold shadow-lg">
       Surrah    
      </div>
        <div class="col-md-12 scroll fs-2 fw-bold">
        <ChaptersScreen chapters={chapters} chapterHandler={chapterHandler} />
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default HomeScreen
