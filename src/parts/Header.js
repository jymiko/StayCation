import React from 'react';

import Button from '../components/Button';
import IconLogo from './iconText';

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    }

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <IconLogo/>
                    <div className="collapse navbar-collapse">
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
    )
}
