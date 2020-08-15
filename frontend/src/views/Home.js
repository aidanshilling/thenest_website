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
			<div className="home-podcasts home-category">
				<h4>Latest Podcast</h4>
				<img src="podcast.jpg" alt="podcast img" />
			</div>
		</div>
	);
}
