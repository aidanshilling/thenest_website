import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import NestBets from './NestBets';
import OurTakes from './OurTakes';
import Podcasts from './Podcasts';
import './Nav.css'

export default function Nav() {
    return (
        <Router>
            <div className="nav-container">
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-logo" to="/">Nest Sports</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/our-takes">Our Takes</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/nest-bets">Nest Bets</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/podcasts">Podcasts</Link>
                        </li>
                    </ul>
                </nav>
                <main className="nav-content">
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/our-takes">
                            <OurTakes></OurTakes>
                        </Route>
                        <Route path="/nest-bets">
                            <NestBets></NestBets>
                        </Route>
                        <Route path="/podcasts">
                            <Podcasts></Podcasts>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}