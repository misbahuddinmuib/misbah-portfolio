import emailjs from "@emailjs/browser";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
// import React, { useState, useEffect } from "react";

import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	const form = useRef();
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ee9gpuv",
				"template_fmvsc78",
				form.current,
				"user_CfbcviF6wI5hzTQxtAnHq"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Thanks for your message, I will get back to you soon!");
				},
				(error) => {
					console.log(error.text);
				}
			);
	}
	return (
		<section data-Aos="fade-up" className="Contact section" id="contact">
			<Container data-Aos="fade-up">
				<div data-Aos="fade-up" className="section-title-text mb-2">
					<h1 className="pt-3 text-start pb-3 text-left">CONTACT WITH ME</h1>
				</div>

				<div data-Aos="fade-up" className="contact-form">
					<form className="" ref={form} onSubmit={sendEmail}>
						<div className="form-icon">
							<FontAwesomeIcon
								className="m-5"
								icon={faIdCardAlt}
								color="white"
								size="6x"
							></FontAwesomeIcon>
						</div>
						{/* <label>Name</label> */}
						<input
							type="text"
							name="user_name"
							placeholder="Your Name"
							className="item"
							required
						/>
						<br />
						<input
							type="email"
							name="user_email"
							placeholder="Email Address"
							className="item"
							required
						/>
						<br />
						<textarea
							name="message"
							placeholder="Write Down Message"
							className="item"
							required
						/>
						<br />
						<input
							type="submit"
							value="Send"
							className="item btn btn btn-outline-success btn-download text-white my-3 my-sm-0"
						/>

						
					</form>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
