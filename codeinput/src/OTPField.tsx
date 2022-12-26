import React, { FC, useEffect, useRef, useState } from "react";

interface Props {count:number, content:string[]}

let currentOTPIndex: number = 0;
const OTPField: FC<Props> = (props): JSX.Element => {
    const initArr:string[] = props.content? props.content : new Array(props.count).fill("")
    const [otp, setOtp] = useState<string[]>(initArr);
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
    

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus();
    }, [activeOTPIndex])

    const handleOnChange = (
        {target} : React.ChangeEvent<HTMLInputElement>):void => {
        const {value} = target;
        const newOTP:string[] = [...otp];
        newOTP[currentOTPIndex] = value.substring(value.length - 1);
        
        if (!value){
            setActiveOTPIndex(currentOTPIndex -1) 
        } 
        else {
            setActiveOTPIndex(currentOTPIndex + 1);
        }

        setOtp([...newOTP]);
    }

    const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>,
        index : number) => {
            currentOTPIndex = index;
            if ( key === 'Backspace') setActiveOTPIndex(currentOTPIndex -1);
        }    

    return (
        <div className="h-screen flex justify-center items-center space-x-2">
        {otp.map((_, index) => {
            return (
            <React.Fragment key={index}>
                <input
                    ref={index===activeOTPIndex? inputRef : null}
                    value={otp[index]}
                    type="number"
                    className="w-12 h-12 border-2 rounded bg-transparent 
                                outline-none text-center font-semibold text-xxl 
                                border-gray-400 focus:border-gray-700 
                                focus:text-gray-700 text-gray-400 
                                transition spin-button-none"
                    onChange={handleOnChange}
                    onKeyDown={(e)=> handleKeyDown(e, index)}
                />
                {/* {index === otp.length - 1 ? null : (
                <span className="w-2 py-0.5 bg-gray-400" />
                )} */}
            </React.Fragment>
            );
        })}
        </div>
    );
};

export default OTPField;
