import React, { useState } from 'react';
import data  from '../../Data';
import { useParams } from 'react-router-dom';

import './ServiceScreen.css';

//components 
import Construction from '../../img/electrical-supply.png';
import MVcable from '../../img/MV-Cable.png';
import Ex from '../../img/EX.png';
import Thermography from '../../img/Thermography.png';
import ReviewForm from '../../Components/ReviewForm/ReviewForm';
import ReviewList from '../../Components/ReviewList/ReviewList';

function ServiceScreen() {

    const i = useParams();
    const displayData = data.services[+i.id.slice(1)];

    let displayImage = '';
    if (displayData.image === 'MVcable') displayImage = MVcable;
    else if (displayData.image === 'Ex') displayImage = Ex;
    else if (displayData.image === 'Thermography') displayImage = Thermography;
    else if (displayData.image === 'Construction') displayImage = Construction;

    const [clickedAOE, setClickedAOE] = useState(null);

    const handleClickAOE = () => {
        if (clickedAOE) {
            setClickedAOE(null);
        }  else {
            setClickedAOE(true);
            setClickedProcess(null);
            setClickedReviews(null);
        }
    }

    // console.log(clickedAOE)

//============================================================================

    const [clickedProcess, setClickedProcess] = useState(null);

    const handleClickProcess = () => {
        if (clickedProcess) {
            setClickedProcess(null);
        } else {
            setClickedProcess(true);
            setClickedAOE(null);
            setClickedReviews(null);
        }
    }

    // console.log(clickedProcess);

//============================================================================

    const [clickedReviews, setClickedReviews] = useState(null);

    const handleClickReviews = () => {
        if (clickedReviews) {
            setClickedReviews(null);
        } else {
            setClickedReviews(true);
            setClickedAOE(null);
            setClickedProcess(null);
        }
    }

    // console.log(clickedReviews);

    //============================================================================



    return (
        <div className="service-screen">
        <div className='bg'></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className='service-screen-container shadow'>
            <div className="service--screen--details">
                <h1>{displayData.name}</h1>
                <div className="service-screen-img">
                    <img className='service-photo-current' src={displayImage} alt={`${displayData.name}`} />
                    <div className="communications">
                        <p onClick={handleClickAOE} key={'a'} className={clickedAOE ? 'clicked-service-btn gradient-btn' : 'gradient-btn'}>Area or Expertise</p>
                        <p onClick={handleClickProcess} key={'b'} className={clickedProcess ? 'clicked-service-btn gradient-btn' : 'gradient-btn'}>Write Review</p>
                        <p onClick={handleClickReviews} key={'c'} className={clickedReviews ? 'clicked-service-btn gradient-btn' : 'gradient-btn'}>Reviews</p>
                    </div>
                </div>
                
                { clickedAOE ?
                    <div className={`service-screen-text ${ clickedAOE ? 'fade-in-text' : 'fade-out-text' }`}>
                        {displayData.list1 ? 
                            <>
                                <div className="service-information">
                                    <h1 className='service-info-list-header'>* { displayData.listName1 }</h1>
                                    {displayData.list1.map((word, index) => {
                                        return (
                                            <div key={index}>
                                                <h1 className='aoe--title'>{word}</h1>
                                                {displayData.description1 ?
                                                    <p className='aoe--paragraph'>{displayData.description1[index]}</p>
                                                : 
                                                    <p className='aoe--paragraph'>There is no description for this area of expertise as yet.</p>}
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        : null }

                        {displayData.list2 ? 
                            <>
                                <div className='service-information'>
                                    <h1 className='service-info-list-header'>* { displayData.listName2 }</h1>
                                    {displayData.list2.map((word, index) => {
                                        return( 
                                            <div key={index}> 
                                                <h1 className='aoe--title'> {word} </h1>
                                                {displayData.description2 ?
                                                    <p className='aoe--paragraph'>{displayData.description2[index]}</p>
                                                : 
                                                    <p className='aoe--paragraph'>There is no description for this area of expertise as yet.</p>}
                                            </div>
                                        )
                                    })}
                                    {/* { displayData.description2 && displayData.description2.length === 1 ? 
                                        <div className="Service-description-blur">
                                            <p>{displayData.description2}</p>
                                        </div>
                                    : clicked2 && displayData.description2 ? 
                                        <div className="Service-description-blur"> 
                                            <h1 className='Blur_header'>{clicked2}</h1>
                                            <p>{displayData.description2[index2]} </p>
                                        </div> 
                                    : null } */}
                                </div> 
                            </>
                        : null }

                        {displayData.list3 ? 
                            <>
                                <div className="service-information">
                                    <h1 className='service-info-list-header'>* { displayData.listName3 }</h1>
                                        {displayData.list3.map((word, index) => {
                                            return ( 
                                                <div key={index}>
                                                    <h1 className='aoe--title'> {word} </h1>
                                                    {displayData.description3 ?
                                                    <p className='aoe--paragraph'>{displayData.description3[index]}</p>
                                                : 
                                                    <p className='aoe--paragraph'>There is no description for this area of expertise as yet.</p>}
                                                </div>
                                            )
                                        })}
                                    {/* { displayData.description3 && displayData.description3.length === 1 ? 
                                        <div className='Service-description-blur'>
                                            <p>{displayData.description3}</p>
                                        </div>
                                    : 
                                    clicked3 && displayData.description3 ? 

                                    <div className='Service-description-blur'> 
                                        <h1 className='Blur_header'>{clicked3}</h1>
                                        <p> { displayData.description3[index3] } </p>
                                    </div> 
                                    
                                    : null } */}
                                </div>
                            </>
                        : null }
                    </div>
                : clickedProcess ? <ReviewForm serviceName={displayData} /> : clickedReviews ? <ReviewList serviceName={displayData} /> : null}
            </div>
        </div>
    </div>
    )
}

export default ServiceScreen
