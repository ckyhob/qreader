import React  from "react";
import './ScanPage.css';

import QrReader from "react-web-qr-reader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { useNavigate } from 'react-router-dom';
import CodeField from "../../components/otp-field/CodeField.tsx";

import { useCode } from "../../store/store";

const ScanPage = () => {

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

                <CodeField disabled={false} />            

                <br></br>
                <br></br>
                <br></br>

                <button onClick={() => navigate('/result')}>
                    To results
                </button>
            </div>
            )
}

export default ScanPage