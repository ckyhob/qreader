import './App.css';
import OTPField from './OTPField.tsx';

import { useState } from 'react';

function App() {

  const [arr, setArr] = useState(['1','2','3','4','5','6','7','8']);

  const change = () => {
    setArr(prev => {
      return ['8','8','8','8','8','8','8','8']
    })
    console.log(arr)
  }

  return (
    <>
    <div>
      <OTPField count={8} content={arr} />
      </div>
      <div>
      <button onClick={() => change()}> CHANGE </button>
      </div>
    </>
    
  );
}

export default App;
