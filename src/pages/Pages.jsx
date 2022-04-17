import Home from './Home'
import Random from './Random'
import Latest from "./Latest"
import TopList from "./TopList"
import Upload from "./Upload"
import {Route, Routes} from "react-router-dom"

function Pages() {
  return (   
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/random" element={<Random/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/latest" element={<Latest/>}/>
          <Route path="/toplist" element={<TopList/>}/>
      </Routes> 
   
    
  )
}

export default Pages