import React from 'react';
import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png'

import './InfoBar.css';

const Infobar = ({ room }) => (
    <div className='InfoBar'>
        <div className='LeftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} ></img>
            <h3> {room}</h3>
        </div>
        <div className='RightInnerContainer'>
            <a href='/'><img src={closeIcon} alt="close image"></img></a>
        </div>
    </div>
)

export default Infobar;