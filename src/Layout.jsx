import {Routes,Route} from 'react-router-dom'

import Qrgen from "./components/generator/Qrgen"
import Qrscan from "./components/scaner/Qrscan"
import Navigations from "./components/navigations/Navigations"
import ScanHistory from './components/history/ScanHistory'
import GenHistory from './components/history/GenHistory'

function App() {

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Test</h1>
      <Navigations/>
      <Routes>
          <Route path='/generate' element={<Qrgen />} />
          <Route path='/scan' element={<Qrscan />} />
          <Route path='/historyScan' element={<ScanHistory />} />
          <Route path='/historyGen' element={<GenHistory />} />
      </Routes>
    </div>
  )
}

export default App
