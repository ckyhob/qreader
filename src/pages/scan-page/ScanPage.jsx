import React, { useState } from "react";
import './ScanPage.css';

import QrReader from "react-web-qr-reader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { useNavigate } from 'react-router-dom';
import OtpField from "../../components/otp-field/OtpField.tsx";



const ScanPage = () => {
    const { height, width } = useWindowDimensions();


    const delay = 300;

    const previewStyle = {
        height: {height},
        width: {width}
    };

    const handleScan = (result) => {
        console.log('Scanned : ', result.data);
        if (result) {
        console.log(result.data)
        
        setArr(prev => {
            return ['8','8','8','8','8','8','8','8']
            })
        // setResult( prev => result.data)
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    const squareSize = `${(Number(Math.min(height, width)) - 30)}px`;

    const [arr, setArr] = useState(['','','','','','','','']);

    const change = () => {
        setArr(prev => {
        return ['8','8','8','8','8','8','8','8']
        })
        console.log(arr)
    }


    const navigate = useNavigate()
    return(
            <div classname='container'>      
                    
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


                <br></br>

                <OtpField count={8} content={arr} />            
                {/* <h3>CODE INPUT FORM</h3> */}

                <br></br>
                <br></br>
                <button onClick={() => change()}>
                    Change
                </button>
                <br></br>

                <button onClick={() => navigate('/result')}>
                    To results
                </button>
            </div>
            )
}

export default ScanPage