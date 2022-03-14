import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function gallery() {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/movieGrab.png"
						alt="Movie Grab"
					/>
					<Carousel.Caption>
						<h3 className="cardHeader" >Movie Grab</h3>
						<a className="iconLink cardBtn" href='https://github.com/CodyG-2021'>
							View Site
						</a>
						<a className="iconLink cardBtn" href='https://github.com/CodyG-2021'>
							Source Code
						</a>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/brew3.png"
						alt="You're My Boy Brew"
					/>
					<Carousel.Caption>
						<h3 className="cardHeader" >You're My Boy Brew</h3>
						<a className="iconLink cardBtn" href='https://github.com/CodyG-2021'>
							View Site
						</a>
						<a className="iconLink cardBtn" href='https://github.com/CodyG-2021'>
							Source Code
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				
			</Carousel>
		</div>
	);
}