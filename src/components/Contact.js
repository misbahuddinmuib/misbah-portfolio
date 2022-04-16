import React, { useState, useEffect } from "react";
import contact from "../data/about.json";
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Contact() {
	const [contactData, setContact] = useState([]);
	useEffect(() => {
		const contactData = contact.profile;
        setContact(contactData);
        Aos.init({ duration: 2000});
	}, [contactData]);

	return (
		<div data-aos="fade-up" className="contact section" id="contact">
			<div className="container">
				<div className="row">
					{contactData.map((contactInfo) => {
						return (
							<div className="col-md-6">
								<div className="contact-status">
									<ul>
										<li>
											<h5>Email</h5>
											<p>{contactInfo.Email} (Recommended)</p>
										</li>
										<li>
											<h5>Skype</h5>
											<p>{contactInfo.Skype} </p>
										</li>
										<li>
											<h5>Social</h5>
											<p>{contactInfo.social} (Always Available)</p>
										</li>
										<li>
											<h5>Address</h5>
											<p>{contactInfo.Address}</p>
										</li>
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
