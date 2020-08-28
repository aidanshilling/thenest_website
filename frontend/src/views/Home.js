import React from 'react';
import '../css/Home.css';
import OurTakes from './OurTakes';
import NestBets from './NestBets';

export default function Home() {
	return (
		<div className="home-container">
			<div className="home-ourtakes home-category">
				<h4>Hot Takes</h4>
				<OurTakes />
			</div>
			<div className="home-bets home-category">
				<h4>Our Bets</h4>
				<NestBets />
			</div>
			<div className="home-category">
				<h4>Latest Podcast</h4>
				<div className="home-podcasts">
					<img className="home-podimg" src="podcast.jpg" alt="podcast img" />
					<span>
						<a
							className="home-link"
							href="https://podcasts.apple.com/us/podcast/the-rattlin-boys/id1522377645"
						>
							Listen on Apple Music
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
