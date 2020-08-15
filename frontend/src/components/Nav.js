import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import NestBets from '../views/NestBets';
import OurTakes from '../views/OurTakes';
import Podcasts from '../views/Podcasts';
import '../css/Nav.css';
import TextEditor from './TextEditor';

export default function Nav() {
	return (
		<Router>
			<div className="nav-container">
				<div className="nav-border">
					<nav id="navbar">
						<div className="nav-row">
							<div className="nav-item">
								<Link className="nav-logo" to="/">
									<img src="thenest.png" alt="Logo" />
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/our-takes">
									Our Takes
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/nest-bets">
									Nest Bets
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/podcasts">
									Podcasts
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/editor">
									Editor
								</Link>
							</div>
						</div>
					</nav>
				</div>
				<main className="nav-content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/our-takes">
							<OurTakes />
						</Route>
						<Route path="/nest-bets">
							<NestBets />
						</Route>
						<Route path="/podcasts">
							<Podcasts />
						</Route>
						<Route path="/editor">
							<TextEditor />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}
