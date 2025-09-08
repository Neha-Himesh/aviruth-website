import React from 'react'

function ContactForm() {
  return (
   
	<div>
		<h2 className="text-center pt-5 fw-bold ">Get In Touch</h2>
		<div className="main-container">
			<div className="form-wrapper">
				<form action="https://formbold.com/s/FORM_ID" method="POST">
					<div className="form-header">
						<h2 className="form-title">Want us to train your colleagues / Want a Demo?</h2>
						<p className="form-description">
							Please fill out the below form for us to contact you. All required fields are marked with *.
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
						<label htmlFor="company" className="form-label">Company Name (Optional)</label>
						<input
							type="text"
							name="company"
							id="company"
							className="form-input"/>
					</div>

					<div className="form-group">
						<label htmlFor="demo-topics" className="form-label">Demo for below topics (Optional)</label>
						<select
							name="demo-topics"
							id="demo-topics"
							className="form-select"
							required>
							<option value="product-demo">Internship</option>
							<option value="pricing">Training</option>
							<option value="support">IT Support</option>
						</select>
					</div>
					<button type="submit" className="submit-btn">Submit</button>
				</form>
			</div>
		</div>
	</div>
		
  )
}

export default ContactForm