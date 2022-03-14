import React from "react"

export default function Cards() {
	return (
		<div className="container">
			<div className="row justify-content-center">

				<div className="card bg-secondary border-dark" style={{ width: '22rem' }}>
					<img src="./images/movieGrab.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">lyrics-finder</h5>
						{ <p className="cardText">This app is a first project in my coding class and it alows users to generate musics lyric  </p> }
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://chamibia.github.io/lyrics-finder/" className="cardBtn">Website</a>
								<a href="https://github.com/chamibia/lyrics-finder/pull/9" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-secondary border-dark" style={{ width: '22rem' }}>
					<img src="./images/brew3.png" className="card-img-top brewImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">MVC Tech Bloger</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://pure-cliffs-54858.herokuapp.com/" className="cardBtn">Website</a>
								<a href="https://github.com/Mekonnenke/MVC-TECH_BLOG" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-secondary border-dark" style={{ width: '22rem' }}>
					<img src="./images/budget.png" className="card-img-top budgetImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center"> Express Note Taker</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href=" https://desolate-headland-54764.herokuapp.com/notes" className="cardBtn">Website</a>
								<a href="https://github.com/Mekonnenke/express_note_taker" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="row justify-content-center">

				<div className="card bg-secondary border-dark" style={{ width: '22rem' }}>
					<img src="./images/workout.png" className="card-img-top workoutImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">TingDong</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href=" https://mekonnenke.github.io/TingDong-Project/" className="cardBtn">Website</a>
								<a href="https://github.com/Mekonnenke/TingDong-Project" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-secondary border-dark" style={{ width: '22rem' }}>
					<img src="./images/tech.png" className="card-img-top techImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Weather Dashboard</h5>
						{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://mekonnenke.github.io/WeatherDashBoard/" className="cardBtn">Website</a>
								<a href="https://github.com/Mekonnenke/WeatherDashBoard" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-secondary border-dark" style={{ width: '22rem' }}>
					<img src="./images/note.png" className="card-img-top noteImg" alt="..." />
					<div className="card-body">
						<h5 className="cardTitle text-center">Taskination</h5>
						{ <p className="cardText">This Html app developed for code Bootcamping.</p> }
						<div className="container">
							<div className="row justify-content-center">
								<a href="https://mekonnenke.github.io/HTML_CSS-_challengeAssignmnet/" className="cardBtn">Website</a>
								<a href="https://github.com/Mekonnenke/HTML_CSS-_challengeAssignmnet" className="cardBtn">Source</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}