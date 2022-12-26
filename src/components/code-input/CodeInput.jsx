
import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import "./CodeInput.css";

const CORRECT_PIN_CODE = "111222";

const CodeInput = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const [apinCode, setAPinCode] = useState("");

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) setPinCode("");
  };

  const handlePinChange = pinCode => {
    console.log(pinCode);
    setPinCode(pinCode);
    setAPinCode(prev => {
        const replaced = 'b' + pinCode.substring(1);
        return replaced;
    })
    setBtnIsPressed(false);
    
  };

  const getPinCode = () => {
    console.log('PIN STATE: ', pinCode)
  }

  const setPin = (pin) => {
    console.log('SET PIN STATE: ', pin)
    setPinCode(prev => {
        return pin
    })
  }


  const getVal = () => {
    console.log('VAL :', apinCode)
  }

  return (
    <>
      <ReactCodeInput
        id="pinCode"
        type="text"
        isValid={isPinCodeValid}
        fields={6}
        onChange={handlePinChange}
        value={apinCode}
      />
      <label>Code from state: {pinCode}</label>
      <label>Correct pin code: {CORRECT_PIN_CODE}</label>
      <label>{isPinCodeValid && btnIsPressed && "Valid"}</label>
      <label>{!isPinCodeValid && btnIsPressed && "Not valid"}</label>
      <button onClick={checkPinCode}>Check pin</button>
      <button onClick={() => getPinCode()}>Get pin</button>
      <button onClick={() => setPin("111333")}>SET pin</button>
      <button onClick={() => getVal()}>Get val</button>
    </>
  );
};

export default CodeInput;
