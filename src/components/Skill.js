import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import SkillData from "../data/skill.json";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skill() {
	const [front, setFront] = useState([]);
	const [back, setBack] = useState([]);
	const [database, setDatabase] = useState([]);
	const [programming, setProgramming] = useState([]);
	const [tool, setTool] = useState([]);
	const [os, setOs] = useState([]);
	const [language, setLanguage] = useState([]);

	useEffect(() => {
		const front = SkillData.FrontEnd;
		const back = SkillData.BackEnd;
		const database = SkillData.Database;
		const programming = SkillData.Programming;
		const tool = SkillData.Tools;
		const os = SkillData.Os;
		const language = SkillData.Language;

		setFront(front);
		setBack(back);
		setDatabase(database);
		setProgramming(programming);
		setTool(tool);
		setOs(os);
		setLanguage(language);
		Aos.init({ duration: 2000 });
	}, [front, back, programming, database, tool, os, language]);

	return (
		<section data-Aos="fade-up" className="skill section" id="skill">
			<div className="container">
				<div className="section-title-text mb-2">
					<h1 className="dark-color">MY Skill</h1>
				</div>
				<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<a
							class="nav-link active "
							id="pills-FrontEnd-tab"
							data-toggle="pill"
							href="#pills-FrontEnd"
							role="tab"
							aria-controls="pills-FrontEnd"
							aria-selected="true"
						>
							Front-End
						</a>
					</li>
					<li class="nav-item" role="presentation">
						<a
							class="nav-link "
							id="pills-BackEnd-tab"
							data-toggle="pill"
							href="#pills-BackEnd"
							role="tab"
							aria-controls="pills-BackEnd"
							aria-selected="true"
						>
							Back-End
						</a>
					</li>

					<li class="nav-item" role="presentation">
						<a
							class="nav-link"
							id="pills-Database-tab"
							data-toggle="pill"
							href="#pills-Database"
							role="tab"
							aria-controls="pills-Database"
							aria-selected="true"
						>
							Database
						</a>
					</li>
					<li class="nav-item" role="presentation">
						<a
							class="nav-link"
							id="pills-programming-tab"
							data-toggle="pill"
							href="#pills-programming"
							role="tab"
							aria-controls="pills-programming"
							aria-selected="false"
						>
							Programming
						</a>
					</li>
					<li class="nav-item" role="presentation">
						<a
							class="nav-link"
							id="pills-tool-tab"
							data-toggle="pill"
							href="#pills-tool"
							role="tab"
							aria-controls="pills-tool"
							aria-selected="false"
						>
							Tools
						</a>
					</li>
					<li class="nav-item" role="presentation">
						<a
							class="nav-link "
							id="pills-OS-tab"
							data-toggle="pill"
							href="#pills-OS"
							role="tab"
							aria-controls="pills-OS"
							aria-selected="true"
						>
							OS
						</a>
					</li>
					<li class="nav-item" role="presentation">
						<a
							class="nav-link "
							id="pills-language-tab"
							data-toggle="pill"
							href="#pills-language"
							role="tab"
							aria-controls="pills-language"
							aria-selected="true"
						>
							Language
						</a>
					</li>
				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div
						class="tab-pane fade show active "
						id="pills-FrontEnd"
						role="tabpanel"
						aria-labelledby="pills-FrontEnd-tab"
					>
						<div className="row">
							{front.map((frontInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-4">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">
														{frontInfo.name}
													</h5>
													<h6 class="card-title float-right">
														{frontInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={frontInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-BackEnd"
						role="tabpanel"
						aria-labelledby="pills-BackEnd-tab"
					>
						<div className="row">
							{back.map((backInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-4">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">{backInfo.name}</h5>
													<h6 class="card-title float-right">
														{backInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={backInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-OS"
						role="tabpanel"
						aria-labelledby="pills-OS-tab"
					>
						<div className="row">
							{os.map((osInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-4">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">{osInfo.name}</h5>
													<h6 class="card-title float-right">
														{osInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={osInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-language"
						role="tabpanel"
						aria-labelledby="pills-language-tab"
					>
						<div className="row">
							{language.map((languageInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-4">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">
														{languageInfo.name}
													</h5>
													<h6 class="card-title float-right">
														{languageInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={languageInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div
						class="tab-pane fade"
						id="pills-Database"
						role="tabpanel"
						aria-labelledby="pills-Database-tab"
					>
						<div className="row">
							{database.map((databaseInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-5">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">
														{databaseInfo.name}
													</h5>
													<h6 class="card-title float-right">
														{databaseInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={databaseInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-programming"
						role="tabpanel"
						aria-labelledby="pills-programming-tab"
					>
						<div className="row">
							{programming.map((programmingInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-5">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">
														{programmingInfo.name}
													</h5>
													<h6 class="card-title float-right">
														{programmingInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={programmingInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-tool"
						role="tabpanel"
						aria-labelledby="pills-tool-tab"
					>
						<div className="row">
							{tool.map((toolInfo) => {
								return (
									<div className="col-md-4">
										<div class="card bg-darkblue mb-5">
											<div class="card-body">
												<div className="progress-header clearfix">
													<h5 class="card-title float-left">{toolInfo.name}</h5>
													<h6 class="card-title float-right">
														{toolInfo.percent}%
													</h6>
												</div>

												<ProgressBar
													className="bg-dark"
													animated
													variant="success"
													style={{ height: "1px" }}
													now={toolInfo.percent}
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
