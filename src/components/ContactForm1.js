import React from 'react'
import '../styles/ContactForm1.css'

function ContactForm1() {
  return (
    <div>
        <div className="main-container">
            <div className="form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="form-header">
                        <h2 className="form-title">Contact Us For Career Councelling</h2>
                        <p className="form-description">
                            Please fill out the form for us to contact you for Career Councelling. All required fields are marked with *.
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname" className="form-label">Full Name*</label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="form-input"
                            required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-input"
                            required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number*</label>
                        <input type="tel" name="phone" id="phone" className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company" className="form-label">Favourite Subjects (Optional)</label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message / Enquiry (Optional)</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            className="form-textarea"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm1;