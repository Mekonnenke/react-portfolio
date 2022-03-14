import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImStackoverflow } from 'react-icons/im' ;

export default function Footer() {
	return (
		<footer className="footer pt-1">
			<div className="container text-center">
				<div>
					<a className="iconLink" href='https://github.com/Mekonnenke'>
						<FaGithubSquare size={30} />
					</a>
					<a className="iconLink" href='https://www.linkedin.com/in/mekonnen-mohammed-5a9b8b16a/'>
						<AiFillLinkedin size={35} />
					</a>
					<a className="iconLink" href='https://stackoverflow.com/users/16924685/mekonnen'>
						<ImStackoverflow size={30} />
					</a>
					<span className="footerCopy" >© Mekonnen Moh </span>
				</div>
			</div>
		</footer>
	);
}