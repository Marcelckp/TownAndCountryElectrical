import React from 'react';
import './Homescreen.css'

//components
import Construction from '../../img/electrical-supply.png';
import MVcable from '../../img/MV-Cable.png';
import Ex from '../../img/EX.png';
import Thermography from '../../img/Thermography.png';

function Homescreen() {
    return (
        <div className="HomeScreen">
        <div className='bgg1'></div>
        <div className="bgg1 bg4"></div>
        <div className="bgg1 bg5"></div>
            <div className='HomeScreen-co-details shadow'>
                <div className="typing-demo">
                    Your Need, Our Expertise.
                </div>
                <p>When Town and Country Electrical was established in 2020, the idea was simple: to provide specialised electrical services that was affordable, reliable and contributes to its customers goals.

                Town and Country Electrical is an experienced owner-managed electrical contracting firm that aims to provide excellent service to the commercial, manufacturing, construction and petrol chemical industries.
                <br />
                <br />
                We are registered with the Electrical Contractor Association and Department of Labour. We acknowledge that our team members are our most valuable asset and ensure that the Health & Safety of our employees is a priority. Trained and skilled team members are the cornerstone of the business and we are committed to development. We have also invested in high quality test equipment and tools providing us with a competitive advantage and capability.</p>
            </div>

            <div className="service--details shadow">
                <h1>Services</h1>
                <div className="service--serviceProvided">
                    <img className='service--image' src={`${Construction}`} alt="Construction and Maintenance" />
                    <p>Construction and Maintenance</p>
                    <div className='service--button--div'>
                        <a href='/services/:0'><button className='service--button gradient-btn'>View More</button></a>
                    </div>
                </div>
                <div className="service--serviceProvided">
                    <img className='service--image' src={`${Ex}`} alt="Hazardous Area Electrical" />
                    <p>Hazardous Area Electrical</p>
                    <div className='service--button--div'>
                        <a href='/services/:1'><button className='service--button gradient-btn'>View More</button></a>
                    </div>
                </div>
                <div className="service--serviceProvided">
                    <img className='service--image' src={`${MVcable}`} alt="MV Cable Services" />
                    <p>MV Cable Services</p>
                    <div className='service--button--div'>
                        <a href='/services/:3'><button className='service--button gradient-btn'>View More</button></a>
                    </div>
                </div>
                <div className="service--serviceProvided last--service">
                    <img className='service--image' src={`${Thermography}`} alt="" />
                    <p>Thermography Services</p>
                    <div className='service--button--div'>
                        <a href='/services/:2'><button className='service--button gradient-btn'>View More</button></a>
                    </div>
                </div>
            </div>
        
            <div className="contact-form-container shadow">
                <h1>Contact Us</h1>
                <p>Fill out this form to contact us, and we will contact you as soon as possible 
                <br />* All field are required *</p>
                <div className="contact-form-section">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input required type="text" className='shadowGreen' id='name' name='name' placeholder='Enter Your Name' />
                        <br />
                        <br />
                        <label htmlFor="email">Email</label>
                        <input required className='shadowGreen' type="email" id='email' name='email' placeholder='Enter Your Email' />
                        <br />
                        <br />
                        <label htmlFor="subject">Subject</label>
                        <input required className='shadowGreen' type="text" id='subject' name='subject' placeholder='Enter Your Subject' />
                        <br />
                        <br />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className='shadowGreen' cols="30" rows="10" name='message' placeholder='Enter Your Message'></textarea>
                        <button type="submit" className='service--button--submit gradient-btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Homescreen;
