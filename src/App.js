import React, { useEffect } from 'react';
import './App.css';
import ScanPage from './pages/ScanPage';

 
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
    <div className="App">

      <ScanPage />

    </div>
  );
}

export default App;
