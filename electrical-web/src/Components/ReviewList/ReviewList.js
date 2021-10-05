import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import axios from 'axios';
import './ReviewList.css';
// import data from '../../Data';

function ReviewList(props) {

    let { data } = useContext(Context)
    let [reviews, setReviews] = useState(null);

    let [changeMadeCanM, setChangeMadeCanM] = useState(0);

    let [changeMadeHazard, setChangeMadeHazard] = useState(0);

    let [changeMadeMVcable, setChangeMadeMVcable] = useState(0);

    let [changeMadeThermo, setChangeMadeThermo] = useState(0);

    useEffect(() => {
        let mounted = true;
        if (props.serviceName.name === 'Construction And Maintenance') {
            axios.get('http://localhost:5000/api/services/CMreviews')
                .then(res => {
                    const reviews = res.data;
                    if (mounted) setReviews(reviews);
                })
                .catch(err => {
                    console.log(err);
                })
        } else if (props.serviceName.name === 'Hazardous Area Electrical') {
            axios.get('http://localhost:5000/api/services/HazardousReviews')
                .then(res => {
                    const reviews = res.data;
                    if (mounted) setReviews(reviews);
                })
        } else if (props.serviceName.name === 'Medium Voltage Cable Commissioning and Maintenance') {
            axios.get('http://localhost:5000/api/services/MVCableReviews')
                .then(res => {
                    const reviews = res.data;
                    if (mounted) setReviews(reviews);
                })
        } else if (props.serviceName.name === 'Thermography') {
            axios.get('http://localhost:5000/api/services/ThermographyReviews')
                .then(res => {
                    const reviews = res.data;
                    if (mounted) setReviews(reviews);
                })
        }

        return () => { 
            mounted = false;
        }

        
    }, [props.serviceName, changeMadeCanM, changeMadeThermo, changeMadeHazard, changeMadeMVcable])

    // if (reviews) console.log(changeMadeCanM, changeMadeThermo, changeMadeHazard, changeMadeMVcable);

    return (
        <div className="service-screen-text fade-in-text">
            { reviews && reviews.reviews ? reviews.reviews.map((re) => {
                return (
                    <div className="review--list--container gradient-btn" onClick={() => console.log(re.id)} key={re.id}>
                        <h1> {re.writer} </h1> 
                        <p>Rating:  {re.rating}/5</p>
                        <p>subject:  {re.subject}</p>
                        <p>message:  {re.message}</p>
                        <button className="delete-btn--review gradient-btn" onClick={() => { 
                            if (props.serviceName.name === 'Construction And Maintenance') {
                                
                                data.deleteReviewCanM(re.id);
                                setChangeMadeCanM(re.id);

                            } else if (props.serviceName.name === 'Hazardous Area Electrical') {
                                
                                data.deleteReviewHazard(re.id);
                                setChangeMadeHazard(re.id);

                            } else if (props.serviceName.name === 'Medium Voltage Cable Commissioning and Maintenance') {
                                
                                data.deleteReviewMVcable(re.id);
                                setChangeMadeMVcable(re.id);

                            } else if (props.serviceName.name === 'Thermography') {
                                
                                data.deleteReviewThermography(re.id);
                                setChangeMadeThermo(re.id);

                            }

                        }}>DELETE</button>
                    </div>
                )
            }) : null }
            { reviews && reviews.reviews.length === 0 ?
                <div className="review--list--container gradient-btn">
                    <p>No review has been left for this service as yet</p>
                </div>
                : null
            } 
        </div>
    )
}

export default ReviewList
