import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

import './style.scss';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-size-1 has-text-white">
								Rolando Gonzalez
							</h1>
							<p className="subtitle has-text-white is-size-3">
								Systems Engineer @ University of Miami{' '}
							</p>
							<p> 
								<a
									className="button is-info is-inverted"
									href="https://www.linkedin.com/in/rolandoglez/"
								>
									<span className="icon">
										<FaLinkedin size="fa-2x" />
									</span>
									<span> Contact me</span>
								</a>
								</p>
						
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
