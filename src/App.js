import React, { useEffect } from 'react';
import './App.css';


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
    <div className='App'>
      <HashRouter>

        <Routes>
          
          <Route path='/'       element={<StartPage />} />
          <Route path='/scan'   element={<ScanPage />} />
          <Route path='/result' element={<ResultPage />} />

        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
