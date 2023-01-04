import React, { FC, useEffect, useRef, useState } from "react";
import './CodeField.css';
import { useCode } from "../../store/store";

interface Props {
    disabled: boolean | undefined;
}

let currentCodeIndex: number = 0;

const CodeField: FC<Props> = (props): JSX.Element => {

    const code = useCode(state=> state.code);
    const setCode = useCode(state=> state.setCode);
        
    const [activeCodeIndex, setActiveCodeIndex] = useState<number>(0);
    
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus();
    }, [activeCodeIndex])

    const handleOnChange = (
        {target} : React.ChangeEvent<HTMLInputElement>):void => {
        const {value} = target;
        const newOTP:string[] = [...code];
        
        newOTP[currentCodeIndex] = value.substring(value.length - 1);
        
        if (!value){
            setActiveCodeIndex(currentCodeIndex -1) 
        } 
        else {
            setActiveCodeIndex(currentCodeIndex + 1);
        }

        setCode([...newOTP]);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,
        index : number) => {
            if ((!/[0-9]/.test(e.key)) && (e.key !=='Backspace')) {
                e.preventDefault();
                return;
            }  

            const newCode:string[] = [...code];
            newCode[index] = '';
            
            setCode([...newCode])

            currentCodeIndex = index;
            if ( e.key === 'Backspace') setActiveCodeIndex(currentCodeIndex -1);
        }    

    return (
        <div style={{width : '100%', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="flex justify-center items-center space-x-2 h-18">
            {code.map((_: any, index: number ) => {
                return (
                <React.Fragment key={index}>
                    <input
                        disabled={props.disabled}
                        ref = {index === activeCodeIndex? inputRef : null}
                        value = {code[index]}
                        type = "number"
                        maxLength = {1}
                        className=' h-12 border-2 rounded bg-transparent 
                                    outline-none text-center font-semibold text-3xl  
                                    transition spin-button-none'
                        style={{width : '25px'}}
                        onChange = {handleOnChange}
                        onKeyDown = {(e) => handleKeyDown(e, index) }
                    />
                    { ((index === 1) || (index === 5))?  (
                    <span className = "w-2 py-0.5" />
                    ) : null}
                </React.Fragment>
                );
            })}
            </div>
        </div>
    );
};

export default CodeField;
