import React, { FC, useEffect, useRef, useState } from "react";
import './OtpField.css';

interface Props {count:number, content:string[]}

let currentOTPIndex: number = 0;
const OtpField: FC<Props> = (props): JSX.Element => {
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,
        index : number) => {
            if ((!/[0-9]/.test(e.key)) && (e.key !=='Backspace')) {
                e.preventDefault();
                return;
            }  

            const newOTP:string[] = [...otp];
            newOTP[index] = '';
            setOtp([...newOTP]);

            currentOTPIndex = index;
            if ( e.key === 'Backspace') setActiveOTPIndex(currentOTPIndex -1);
        }    

    return (
        <div style={{width : '100%', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="flex justify-center items-center space-x-2 h-18">
            {otp.map((_, index) => {
                return (
                <React.Fragment key={index}>
                    <input
                        ref={index===activeOTPIndex? inputRef : null}
                        value={otp[index]}
                        type="number"
                        maxLength={1}
                        className="w-8 h-12 border-2 rounded bg-transparent 
                                    outline-none text-center font-semibold text-3xl  
                                    transition spin-button-none"
                        onChange={handleOnChange}
                        onKeyDown={(e)=> handleKeyDown(e, index) }
                    />
                    { ((index === 1) || (index === 5))?  (
                    <span className="w-2 py-0.5" />
                    ) : null}
                </React.Fragment>
                );
            })}
            </div>
        </div>
    );
};

export default OtpField;
