import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { SCAN_DATA } from '../../constants';



const ScanHistory = () => {
    return (
        <>
        <h2 style={{textAlign:'center'}}>History Scan</h2>
        <ul>
            {JSON.parse(localStorage.getItem(SCAN_DATA)) === null ? <li>No History</li> : JSON.parse(localStorage.getItem(SCAN_DATA)).map((el, ind) => {
                return (
                    <li key={ind}
                        style={{display:'flex',gap:'15px',alignItems:'end',marginBottom:'20px',fontSize:'20px'}}
                    >{el}
                        <QRCodeSVG value={el}
                                                bgColor='#faf'
                                                fgColor='blue'
                                                size={75}
                                            />
                    </li>
                )
            })}
            {/* {JSON.parse(localStorage.getItem(SCAN_DATA)).map((el, ind) => {
                return (
                    <li key={ind}>{el}</li>
                )
                })
            } */}
            </ul>
            </>
    );
}

export default ScanHistory;
