import React, { useRef, useContext, useState } from 'react';
import './ReviewForm.css';
import { Context } from '../../Context'

function ReviewForm(props) {

    console.log(props.serviceName);

    let { data } = useContext(Context)

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(null);
    
    let Subject = useRef(null);
    let NameCompany = useRef(null);
    let Message = useRef(null);
    let Rating = useRef(null);

    const handleChange = (val) => {
        const review = {writer: NameCompany.current.value, subject: Subject.current.value, message: Message.current.value, rating: Rating.current.value}
        // console.log(val.current.value);
        console.log(review.review);
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {writer: NameCompany.current.value, subject: Subject.current.value, message: Message.current.value, rating: Rating.current.value}

        if (props.serviceName.name === 'Construction And Maintenance') {
            setLoading(true);
            data.createReviewCanM(review)
                .then( error => {
                    setLoading(false);
                    if (error.length) {
                        setError(error);
                        console.log(error);
                    } else {
                        // history.push('/');
                        console.log('Course Created Successfully');
                    } 
                    console.log(review);
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error);
                })
        } else if (props.serviceName.name === 'Hazardous Area Electrical') {
            setLoading(true)
            data.createReviewHazard(review)
                .then( error => {
                    setLoading(false);
                    if (error.length) {
                        setError(error);
                        console.log(error)
                    } else {
                        // history.push('/');
                        console.log('Course Created Successfully')
                    } 
                    console.log(review)
                })
                .catch(error => {
                    setLoading(false)
                    console.log(error);
                })
        } else if (props.serviceName.name === 'Medium Voltage Cable Commissioning and Maintenance') {
            setLoading(true)
            data.createReviewMVcable(review)
                .then( error => {
                    setLoading(false)
                    if (error.length) {
                        setError(error);
                        console.log(error)
                    } else {
                        // history.push('/');
                        console.log('Course Created Successfully')
                    } 
                    console.log(review)
                })
                .catch(error => {
                    setLoading(false)
                    console.log(error);
                })
        } else if (props.serviceName.name === 'Thermography') {
            setLoading(true)
            data.createReviewThermography(review)
                .then( error => {
                    setLoading(false)
                    if (error.length) {
                        setError(error);
                        console.log(error)
                    } else {
                        // history.push('/');
                        console.log('Course Created Successfully')
                    } 
                    console.log(review)
                })
                .catch(error => {
                    setLoading(false)
                    console.log(error);
                })
        }
    }

    console.log(error)

    return (
            <div className='service-screen-text fade-in-text'>
                {loading ? 
                    <div className='preloader center-preloader'></div>
                : 
                <>
                    <h1 className='reviewTitle--service'>Write A Review</h1>
                    { error ? 
                        <div className='error-div'>
                            { error.map((err, i) => {
                                return (
                                    <p className='errors-for-error-div' key={i}>* {err} </p>
                                )
                            }) }
                        </div>
                    : null }
                    <div className='reviewService--form'>
                        <form className='review--form'>
                            <label htmlFor="company-name">Name / Company Name</label>
                            <input onChange={() => handleChange(NameCompany)} ref={NameCompany} className='shadowGreen' id='company-name' type="text" placeholder="Enter Your Name Or Company Name"/>
                            <br />
                            <label htmlFor="rating-service">Rating</label>
                            <input type="text" ref={Rating} id='rating-service' className='shadowGreen' placeholder="Enter a Number from 0 - 5"/>
                            <br />
                            <label htmlFor="subject-review">Subject</label>
                            <input onChange={() => handleChange(Subject)} ref={Subject} className='shadowGreen' id='subject-review' type="text" placeholder="Enter Your Subject Matter"/>
                            <br />
                            <label htmlFor="message-review">Message</label>
                            <textarea onChange={() => handleChange(Message)} ref={Message} name="" id="message-review" cols="30" rows="10" placeholder="Please enter your message" className='shadowGreen'></textarea>
                            <button type='submit' onClick={handleSubmit} className='service--button--submit gradient-btn'>SUBMIT</button>
                        </form>
                    </div>
                </>}
                
            </div>
    )
}

export default ReviewForm;
