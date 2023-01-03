import React from "react";
import './ResultPage.css';
import { useNavigate } from 'react-router-dom';
import CodeField from "../../components/otp-field/CodeField.tsx";
import { useCode } from "../../store/store";


const ResultPage = () => {
    const setCodeToDefault = useCode(state => state.setCodeToDefault);
    const navigate = useNavigate()


    return(
            <div className='container'>

                <h3 className="text-2xl font-bold dark:text-white">
                    Результаты для кода:
                </h3>

                <CodeField disabled={true} /> 
                
                <br></br>
                <br></br>

                <p style={{marginTop:'1rem'}}>Краткое описание если требуется.</p>

                <br></br>
                <br></br>

                <div className="scroll-container">                    
                                <p>
                                    <center>
                                        <h3>
                                            Полная "расшифровка" по пунктам:
                                        </h3>
                                    </center>
                                </p>
                                <p>
                                    <strong>1. Работоспособность - 4 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>
                                    <strong>2. Обучаемость - 5 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>
                                    <strong>2. Внимательность - 5 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>                   
                                    <strong>3. Ответственность - 3 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>     
                                    <strong>4. Тип характера - Штирлиц</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Истинный ариец. Характер нордический, выдержанный. 
                                        Беспощаден к врагам рейха. Отличный семьянин.
                                        Cвязей, порочивших его, не имел.
                                    </i>
                                </p>
                                <p>                    
                                    <strong>1. Работоспособность - 4 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>                    
                                    <strong>2. Обучаемость - 5 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>                    
                                    <strong>2. Внимательность - 5 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>                    
                                    <strong>3. Ответственность - 3 (из 5)</strong>
                                    <br></br>
                                    <i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики 
                                        Разъяснение оценки, описание характеристики
                                    </i>
                                </p>
                                <p>                    
                                    <strong>4. Спасибо что дочитали до конца</strong>
                                    <br></br>
                                    <i>Здесь могла бы быть ваша реклама.</i>
                                </p>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <button onClick={() => {
                        setCodeToDefault();
                        navigate('/scan')
                    }}>
                    Scan once more
                </button>
            </div>
            )
}

export default ResultPage