import React,{useState} from "react";
import './ScanPage.css';

import QrReader from "react-web-qr-reader";


import useWindowDimensions from "../hooks/useWindowDimensions";
import CodeInput from "../components/code-input/CodeInput";

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
        console.log(result)

        setResult( prev => result.data)
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    const squareSize = `${(Number(Math.min(height, width)) - 30)}px`;

    return(
        <div className="wrapper">
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
            <div className="result-preview">
                {result}
                <CodeInput />
            </div>
        </div>
    )
}

export default ScanPage



