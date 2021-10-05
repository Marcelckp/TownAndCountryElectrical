import React from 'react';
import './Footer.css';

//components 
import CIDB from '../../img/CIDB.png';
import ECA from '../../img/ECA.png';
import LeadHV from '../../img/LeadHV.png';
import Treasury from '../../img/Treasury.jpg';
import Affiliation from '../../img/Affiliations.png';
function Footer() {
    return (
        <div className="Footer-container shadow">
            <div className="icons">
                <img src={`${CIDB}`} alt="" />
                <img src={`${ECA}`} alt="" />
                <img src={`${LeadHV}`} alt="" />
                <img className='Treasury' src={`${Treasury}`} alt="" />
                <img className='lastAfil' src={`${Affiliation}`} alt="" />
            </div>
            <div className="Footer-license">
                <p>©  2021 - Town and Country Electrical | All rights reserved</p>
                <p>Creator - Marcel Palmer</p>
            </div>
        </div>
    )
			
}

export default Footer
