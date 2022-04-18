import React from "react";
import Social from "./element/Social";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {
	return (
		<section className="hero-banner" id="hero">
			<div className="container">
				<div className="hero-body">
					<div data-aos="fade-down" className="social title float-left">
						<Social></Social>
						<p>Follow me</p>
					</div>

					<div className="intro-content ml-5">
						<div data-aos="fade-left" className="welcome-title">
							<p>Hello! I am</p>
							<h1>
								Misbah Uddin <span className="bold-color">Muib</span>{" "}
							</h1>
						</div>
						<div data-aos="fade-left" className="designation-list">
							<ul>
								<li>Software Developer</li>
							</ul>
						</div>
						<div data-aos="fade-left" className="resume">
							<a
								href="https://drive.google.com/file/d/1wSWWobOYOJfI8NFumudEdP9o-z2GSMTm/view?usp=sharing"
								target="_blank"
								type="file"
								className="btn btn-lg btn-green text-white"
								download
							>
								Get Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
