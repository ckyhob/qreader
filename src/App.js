import React, { useEffect } from 'react';
import './App.css';
// import ScanPage from './pages/ScanPage';

import { HashRouter, Routes, Route } from 'react-router-dom'

import StartPage from './pages/start-page/StartPage';
import ScanPage from './pages/scan-page/ScanPage';
import ResultPage from './pages/result-page/ResultPage';

 
function App() {
 
  useEffect ( () => {
    const documentHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
     }
     window.addEventListener('resize', documentHeight())
     documentHeight()
  }, [])

  
  return (

    <HashRouter>

      <Routes>
        
        <Route path='/'       element={<StartPage />} />
        <Route path='/scan'   element={<ScanPage />} />
        <Route path='/result' element={<ResultPage />} />

      </Routes>


    </HashRouter>
    // <div className="App">

    //   <ScanPage />

    // </div>
  );
}

export default App;
