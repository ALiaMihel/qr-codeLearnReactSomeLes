import React, {useState} from 'react';
import { QRCodeSVG } from 'qrcode.react'
import qgs from './Qrgenstyle.module.css'

import {GEN_DATA} from '../../constants.js'


const Qrgen = () => {
    const[val,setVal]=useState('')
    // const[vall,setVall]=useState(val)
    const[sowQr,setSow]=useState('')

    function generate() {
        // setVall(val)
        const prevData = JSON.parse(localStorage.getItem(GEN_DATA) || '[]')
        localStorage.setItem(GEN_DATA,JSON.stringify([...prevData,val]))
        
        setSow(val)//помещаем значения из переменной ввода в аттрибут QR-генератора
        setVal('')//очищает поле ввода после нажатия на кнопку
        
    }

    function gen(event) {
        setVal(event.target.value)//помещаем в переменную значения из поля ввода
        
        
        
        
        setSow('')//исчезает qrcode при вводе в поле ввода
    }
    return (
        <div className={qgs.main}>
            <div>
                <h3>This is QR GEN</h3>
                <div className={qgs.input}>
                    <textarea name="" id="" value={val} onChange={gen}></textarea>
                    <button className={qgs.btn} onClick={generate}><h3>Generate</h3></button><br />
                </div>
            </div>
            {sowQr !== '' && 
                <div>
                    <QRCodeSVG value={sowQr}
                        bgColor='red'
                        fgColor='black'
                        size={250}
                    />
                    <h4>{sowQr}</h4>
                </div>
            }
            
        </div>
    );
}

export default Qrgen;
