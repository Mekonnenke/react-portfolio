import React from "react"

export default function Cards() {
	return (
		<div className="container">
			<div className="row justify-content-center">
			<div className="card bg-dark border-primary" style={{ width: '18rem' }}>
					<img src="./images/movieGrab.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Movie Grab</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://chamibia.github.io/lyrics-finder/" className="cardBtn">Website</a>
								<a href="https://mekonnenke.github.io/DiceChallengeofA/" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}