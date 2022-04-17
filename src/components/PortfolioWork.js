import React, { useState, useEffect } from "react";
import Portfolio from "../data/portfolio.json";
import Aos from "aos";
import "aos/dist/aos.css";
export default function PortfolioWork() {
	const [react, setReact] = useState([]);
	const [reactNative, setReactNative] = useState([]);
	const [other, setOther] = useState([]);
	const [website,setWebsite ] = useState([]);
	useEffect(() => {
		const react = Portfolio.React;
		const reactNative = Portfolio.ReactNative;
		const other = Portfolio.Others;
		const website = Portfolio.website;
		setReact(react);
		setReactNative(reactNative);
		setWebsite(website);
		setOther(other);
		Aos.init({ duration: 2000 });
	}, [react, reactNative,website, other]);

	return (
		<section data-Aos="fade-up" className="portfolio section" id="portfolio">
			<div className="container">
				<div className="section-title-text mb-2">
					<h1 className="dark-color">Portfolio</h1>
				</div>
				<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li class="nav-item">
						<a
							class="nav-link active"
							id="pills-react-tab"
							data-toggle="pill"
							href="#pills-react"
							role="tab"
							aria-controls="pills-react"
							aria-selected="true"
						>
							React
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="pills-reactNative-tab"
							data-toggle="pill"
							href="#pills-reactNative"
							role="tab"
							aria-controls="pills-reactNative"
							aria-selected="false"
						>
							React Native
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="pills-others-tab"
							data-toggle="pill"
							href="#pills-others"
							role="tab"
							aria-controls="pills-others"
							aria-selected="false"
						>
							Others
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="pills-website-tab"
							data-toggle="pill"
							href="#pills-website"
							role="tab"
							aria-controls="pills-website"
							aria-selected="false"
						>
							Website
						</a>
					</li>
				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div
						class="tab-pane fade show active"
						id="pills-react"
						role="tabpanel"
						aria-labelledby="pills-react-tab"
					>
						<div className="row">
							{react.map((reactInfo) => {
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-4 bg-blue">
												<div>
													<img className="portfolio-img" src={reactInfo.image} alt="" srcset="" />
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={reactInfo.demo} target="_blank">
															<h5 class="card-title">{reactInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{reactInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={reactInfo.demo} target="_blank">


																	<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
																		</svg>

																		
																	
																	</a>
																</li>
																<li>
																	<a href={reactInfo.source} target="_blank">
																	<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{reactInfo.tools1}</li>
															<li>{reactInfo.tools2}</li>
															<li>{reactInfo.tools3}</li>
															<li>{reactInfo.tools4}</li>
															<li>{reactInfo.tools5}</li>
															<li>{reactInfo.tools6}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					{/* reac native start */}
					<div
						class="tab-pane fade"
						id="pills-reactNative"
						role="tabpanel"
						aria-labelledby="pills-reactNative-tab"
					>
						<div className="row">
							{reactNative.map((reactNativeInfo) => {
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-3 bg-blue">
											<div>
													<img className="portfolio-img" src={reactNativeInfo.image} alt="" srcset="" />
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={reactNativeInfo.demo} target="_blank">
															<h5 class="card-title">{reactNativeInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{reactNativeInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={reactNativeInfo.demo} target="_blank">
																	<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
																		</svg>

																	</a>
																</li>
																<li>
																	<a href={reactNativeInfo.source} target="_blank">
																	

																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{reactNativeInfo.tools1}</li>
															<li>{reactNativeInfo.tools2}</li>
															<li>{reactNativeInfo.tools3}</li>
															<li>{reactNativeInfo.tools4}</li>
															<li>{reactNativeInfo.tools5}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					{/* reac native  end*/}
					<div
						class="tab-pane fade"
						id="pills-others"
						role="tabpanel"
						aria-labelledby="pills-others-tab"
					>
						<div className="row">
							{other.map((otherInfo) => {
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-3 bg-blue">
											<div>
													<img className="portfolio-img" src={otherInfo.image} alt="" srcset="" />
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={otherInfo.demo} target="_blank">
															<h5 class="card-title">{otherInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{otherInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={otherInfo.demo} target="_blank">
																	<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
																		</svg>
																	
																	</a>
																</li>
																<li>
																	<a href={otherInfo.source} target="_blank">
																	<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{otherInfo.tools1}</li>
															<li>{otherInfo.tools2}</li>
															<li>{otherInfo.tools3}</li>
															<li>{otherInfo.tools4}</li>
															<li>{otherInfo.tools5}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					{/* website start */}
					<div
						class="tab-pane fade"
						id="pills-website"
						role="tabpanel"
						aria-labelledby="pills-website-tab"
					>
						<div className="row">
							{website.map((websiteInfo) => {
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-3 bg-blue">
											<div>
													<img className="portfolio-img" src={websiteInfo.image} alt="" srcset="" />
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={websiteInfo.demo} target="_blank">
															<h5 class="card-title">{websiteInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{websiteInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={websiteInfo.demo} target="_blank">
																	<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
																		</svg>
																	</a>
																</li>
																<li>
																	<a href={websiteInfo.source} target="_blank">
																	
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{websiteInfo.tools1}</li>
															<li>{websiteInfo.tools2}</li>
															<li>{websiteInfo.tools3}</li>
															<li>{websiteInfo.tools4}</li>
															<li>{websiteInfo.tools5}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					{/* website end */}
				</div>
			</div>
		</section>
	);
}
