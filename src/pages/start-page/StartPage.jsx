import React from "react";
import './StartPage.css';
import { useNavigate } from 'react-router-dom';


const StartPage = () => {
    const navigate = useNavigate()
    return(
        <div classname='container'>

            <h2>Start Page</h2>

            <center>Текст приветствия. Краткое описание если требуется.</center>
            
            <br></br>
            <br></br>
            <br></br>
            
            <button onClick={() => navigate('/scan')}>
                Ввести код
            </button>
        </div>
    )
}

export default StartPage