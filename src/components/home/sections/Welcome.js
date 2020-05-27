import React from 'react'
import './sections.scss';
import landing_image from '../../../images/landing-image.png';

const HEADER_TXT = "Providing fresh food to families in need."
const SUB_HEADER_TXT = "Join our team in using technology to end childhood hunger in our communities.";

export const Welcome = () => {
    return (
        <section className="welcome-section" id="welcome">
            <div className="welcome-text-container">
                <div className="welcome-title">{HEADER_TXT}</div>
                <div className="welcome-sub-title">{SUB_HEADER_TXT}</div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9N1_wWETbeMs7UAxzUTCMl0FhCnVneozlA-EMAMQXSBFy3A/viewform" target="_blank"><button className="volunteer-btn">get involved</button></a>
                <a href="https://donorbox.org/nouri" target="_blank"><button className="donate-btn">donate</button></a>
            </div>
            <img src={landing_image} alt="family-image" />
        </section>
    )
}
