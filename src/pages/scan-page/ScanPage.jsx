import React from "react";
import './ScanPage.css';
import { useNavigate } from 'react-router-dom';


const ScanPage = () => {
    const navigate = useNavigate()
    return(
            <div classname='container'>

                <h2>Scan Page</h2>
                <div style={{margin :' auto', width : '300px', height : '300px', backgroundColor : 'wheat'}}>
                    scan preview here
                </div>

                <br></br>
                <br></br>

                <h3>CODE INPUT FORM</h3>

                <br></br>
                <br></br>

                <button onClick={() => navigate('/result')}>
                    To results
                </button>
            </div>
            )
}

export default ScanPage