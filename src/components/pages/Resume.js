import React from 'react';
 import { FaFileDownload } from 'react-icons/fa';

export default function Resume() {
	return (
		<div className='mx-5 mt-3 p-3'>
			<h1 className="text-center">Mekonnen's Resume Summary</h1>
			<div className="container justify-contact-center">
				<h4>Education</h4>
				<ul>
                    <li>University of Toronto Boot camp October 2021 - March 2022
						<ul>
							<li>Full Stack Web Development</li>
						</ul>
					</li>
					<li>Conestoga College  2019 -2020
						<ul>
							<li>Software Engineering -Not comleted</li>
						</ul>
					</li>

					
                    <li>Shaw Academy 2019
						<ul>
							<li>Graphic design</li>
						</ul>
					</li>
					<li>Tom Film Production 2013
						<ul>
							<li>Photography and Videography</li>
						</ul>
					</li>
					<li> Queens College – Ethiopia, June 2011 - September 2009
						<ul>
							<li>Diploma Information Technology
								<ul>
									<li>Emphases: Computer hardware and Software infrustructure </li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>

				<h4>Technical skills</h4>
				<ul>
					<li>Full stack web development
						<ul>
							<li>HTML, CSS, JavaScript, jQuery, APIs, node.js, SQL, Express,OOP, mysql, orm, mvc, MongoDB, PWA, React, MERN</li>
						</ul>
					</li>
					<li>Graphic design
								<ul>
									<li>Adobe photoshop, Illustrator, Video editing </li>
								</ul>
					</li>
				</ul>


				<h5>Download my resume here</h5>
				<a className="iconLink" href='./images/resume.pdf' download="Mekonnen Mohammed 2022">
					{<FaFileDownload size={45} /> }
				</a>

			</div>

		</div>
	);
}