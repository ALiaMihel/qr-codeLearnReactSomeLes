import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner'
import qss from './Qrscanstyle.module.css'
import { Link } from 'react-router-dom';

import {SCAN_DATA} from '../../constants.js'

const Qrscan = () => {
    const[reVal,setScan]=useState('')

    function scanHandler(result) {
        setScan(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA)||'[]')

        localStorage.setItem(SCAN_DATA,JSON.stringify([...prevData,result[0].rawValue]))
        console.log(prevData)
    }

    const setting = {
        audio: false,
        finder:false,
    }
    const styleSet = {
        container:{width:400}
    }

    const[cam,setCam]=useState(false)
    function onCamera() {
        setCam(!cam)
        setScan('')
    }

    return (
        <div className={qss.main}>
            <h3 className={qss.textScaner}>ScanneR</h3>
            <button className={qss.btn} onClick={onCamera}>On/Off Camera</button>
            {cam === true && 
                <div>
                    <Scanner
                        allowMultiple
                        onScan={scanHandler}
                        components={setting}
                        styles={styleSet}
                    />
                    {reVal !== "" &&
                        <Link to={reVal} target='blank'><h2 className={qss.outputScanner}>{reVal}</h2></Link>}
                </div>
            }
        </div>
    );
}

export default Qrscan;
