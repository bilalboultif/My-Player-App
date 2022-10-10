import { useEffect, useState } from 'react'
import axios from 'axios'
import RecitersScreen from './RecitersScreen'
import PlayerScreen from './PlayerScreen'
import ChaptersScreen from './ChaptersScreen'

const HomeScreen = () => {


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




  const languagesHandler = (language) => {
      setLanguageDetail(language)
  }


  return (
   
    <div class="row p-0 home-body margin-0">
    
    <div class="col-md-12">    
  
  
      <div class="p-5 text-center  col-lg-12 py-0 fs-2 fw-bold shadow-lg">
       قائمة القراء
      </div>
      <div class="row p-0 home-body">
        <div class="col-md-12 scroll fs-2 fw-bold">
        <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} /> 
        </div>
       
      </div>
    </div>
    
  </div>
  )
}

export default HomeScreen