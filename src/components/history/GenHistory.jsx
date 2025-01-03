import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { GEN_DATA } from '../../constants';




const GenHistory = () => {
    return (
        <>
            <h2 style={{textAlign:'center'}}>Generate History</h2>
            <ul>
            {JSON.parse(localStorage.getItem(GEN_DATA)) === null  ?<li>No History</li>:JSON.parse(localStorage.getItem(GEN_DATA)).map((el, ind) => {
                return (
                    <div style={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                        <li key={ind} style={{
                            display: 'flex',
                            minWidth:'70%',
                            justifyContent: 'space-between',
                            alignItems: 'end',
                            marginBottom: '20px',
                            fontSize: '20px'
                    }}>{el} 
                        <QRCodeSVG value={el}
                                                size={120}
                                            />
                        </li>
                    </div>
                )
            })}
        </ul>
        </>
    );
}

export default GenHistory;
