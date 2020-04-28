import React from 'react';
import {
	FaHtml5,
} from 'react-icons/fa';

import {
	GrIntegration,
} from 'react-icons/gr';

import {
	GiDiploma,
} from 'react-icons/gi';

import './style.scss';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<GrIntegration size="fa-2x" color="#d22780" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Unmanned Aircaft Systems (UAS)</h1>
									<p className="subtitle is-size-5">
										Design, build, and integrate remote-controlled industrial quadcopters for scientific research using Pixhawk and Ardupilot
									</p>
								</div>
							</div>
						</article>
					</div>


					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<GiDiploma size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Licensed FAA Part 107 Pilot</h1>
									<p className="subtitle is-size-5">
										Over 200+ hours flown as a flight test engineer and drone mapping pilot
									</p>
								</div>
							</div>
						</article>
					</div>



					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Software Engineer</h1>
									<p className="subtitle is-size-5">
										Experienced in Java, C++, Python, HTML, CSS, JS, PHP, Node.js, git to create internal website tools and applications for Arduino and Raspberry Pi
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
