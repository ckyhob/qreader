import React, { useState } from "react";
import './ScanPage.css';

import QrReader from "react-web-qr-reader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { useNavigate } from 'react-router-dom';




const ScanPage = () => {
    const { height, width } = useWindowDimensions();


    const delay = 500;

    const previewStyle = {
        height: {height},
        width: {width}
    };

    const [result, setResult] = useState("No result");

    const handleScan = (result) => {
        if (result) {
        console.log(result.data)

        setResult( prev => result.data)
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    const squareSize = `${(Number(Math.min(height, width)) - 30)}px`;


    const navigate = useNavigate()
    return(
            <div classname='container'>

                {/* <h2>Scan Page</h2> */}
                {/* <div style={{margin :' auto', width : '300px', height : '300px', backgroundColor : 'wheat'}}> */}
                    
                    
                <div className="scan-preview">
                    <div style={{width: `${squareSize}`, height: `${squareSize}`, backgroundColor: 'red'}}>
                        <QrReader
                            delay={delay}
                            style={previewStyle}
                            onError={handleError}
                            onScan={handleScan}
                        />
                    </div>
                </div>



                {/* </div> */}

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