import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../components/Button';
import IconLogo from './iconText';
import 'bootstrap/js/dist/collapse'



export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    }

    return (
        <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <IconLogo/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item ${getNavLinkClass("/")}`}>
                                    <Button className="nav-link" type="link" href="/">Home</Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                    <Button className="nav-link" type="link" href="/browse-by">Browse By</Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                                    <Button className="nav-link" type="link" href="/stories">Stories</Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/agent")}`}>
                                    <Button className="nav-link" type="link" href="/agent">Agents</Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </Fade>
    )
}
