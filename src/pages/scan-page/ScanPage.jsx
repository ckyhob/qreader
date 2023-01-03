import React  from "react";
import './ScanPage.css';

import QrReader from "react-web-qr-reader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { useNavigate } from 'react-router-dom';
import CodeField from "../../components/otp-field/CodeField.tsx";

import { useCode } from "../../store/store";

import { useEffect } from "react";

const ScanPage = () => {
    

    useEffect(()=> {
        document.getElementById('btn1').focus()
    }, [])

    const setCode = useCode(state=>state.setCode);

    const { height, width } = useWindowDimensions();

    const delay = 300;

    const previewStyle = {
        height: {height},
        width: {width}
    };

    const handleScan = (result) => {
        const scannedCode = result.data
        console.log('Scanned : ', scannedCode);
        if (result) {
            setCode(scannedCode);
            console.log('Set: ', scannedCode)
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    const squareSize = `${(Number(Math.min(height, width)) - 30)}px`;

    const navigate = useNavigate()
    return(
            <div classname='wrapper'>      
                    
                <div className="scan-preview" id="scanPreview">
                    <div style={{width: `${squareSize}`, height: `${squareSize}`, backgroundColor: 'black'}}>
                        <QrReader
                            delay={delay}
                            style={previewStyle}
                            onError={handleError}
                            onScan={handleScan}
                        />
                    </div>
                </div>

<div className="result-preview">
                <br></br>

                <CodeField disabled={false} />            

                <br></br>
                <br></br>
                <br></br>

                <button id="btn1" onClick={() => navigate('/result')}>
                    To results
                </button>
</div>
            </div>
            )
}

export default ScanPage