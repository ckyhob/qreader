import React from "react";
import './ScanPage.css';

import useWindowDimensions from "../hooks/useWindowDimensions";

const ScanPage = () => {
    const { height, width } = useWindowDimensions();

    const squareSize = `${(Number(Math.min(height, width)) - 30)}px`;

    return(
        <div className="wrapper">
            <div className="scan-preview">
                <div style={{width: `${squareSize}`, height: `${squareSize}`, backgroundColor: 'red'}}>
                    {squareSize}
                </div>
            </div>
            <div className="result-preview">
                result
            </div>
        </div>
    )
}

export default ScanPage