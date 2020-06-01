import React from 'react'

/*  IMAGES   */
import green from '../../../images/green.jpg';
import johnson from '../../../images/johnson.jpg';
import kim from '../../../images/kim.jpg';
import timKim from '../../../images/tim-kim.jpg';

const CONTENT1 = `If you are another nonprofit or social worker in the Redmond who would like to refer families with school-aged, disabled, or unborn children, we would love to help.`;
const CONTENT2 = `Currently, we are only able to deliver within Redmond. Hopefully, we'll be able to expand soon. If you are looking for ways to volunteer remotely from your home, we would love to chat with you. Some of the things we could use help in include marketing, organizing, and developing apps to help us automate some processes with our deliveries (stack: JavaScript, Node, React, AWS, DynamoDB).`;
const CONTENT3 = `Even if you feel like you don't have that much experience but have the hunger to learn, we love to mentor and help each other learn. Please feel free reach out. We value dedication, the hunger to learn, and the dedication to help others.`;
const SECTION_TITLE = `An invitation from our board members`;

export const Volunteer = () => {
    return (
        <section className="volunteer-section" id="volunteer">

            <div className="volunteer-title">{SECTION_TITLE}</div>

            <div className="volunteer-container">
                <div className="volunteer-content">
                    <p>{CONTENT1}</p>
                    <p>{CONTENT2}</p>
                    <p>{CONTENT3}</p>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9N1_wWETbeMs7UAxzUTCMl0FhCnVneozlA-EMAMQXSBFy3A/viewform" target="_blank">
                        <button className="btn-container">volunteer with us</button>
                    </a>
                </div>

                <div className="image-col">
                    <div className="image-row">
                        <img src={kim} alt="board-img" />
                        <img src={johnson} alt="board-img" />
                    </div>
                    <div className="image-row">
                        <img src={green} alt="board-img" />
                        <img src={timKim} alt="board-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
