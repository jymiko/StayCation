import React from 'react'
import Button from '../components/Button'
import IconLogo from './iconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <IconLogo/>
                        <p className="brand-tagline">
                        We kaboom your beauty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">
                            For Beginners
                            <ul className="list-group list-group-flush mt-4">
                                <li className="list-group-item my-1">
                                    <Button type="link" href="/register">New Account</Button>
                                </li>
                                <li className="list-group-item my-1">
                                    <Button type="link" href="/properties">Start Booking a Room</Button>
                                </li>
                                <li className="list-group-item my-1">
                                    <Button type="link" href="/use-payment">Use Payments</Button>
                                </li>
                            </ul>
                        </h6>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                            <ul className="list-group list-group-flush mt-4">
                                <li className="list-group-item my-1">
                                    <Button type="link" href="/career">Our Careers</Button>
                                </li>
                                <li className="list-group-item my-1">
                                    <Button type="link" href="/privacy">Privacy</Button>
                                </li>
                                <li className="list-group-item my-1">
                                    <Button type="link" href="/term-condition">Terms & Conditions</Button>
                                </li>
                            </ul>
                        </h6>
                    </div>
                    <div className="col-4">
                        <h6 className="mt-2">
                            Connect Us
                            <ul className="list-group list-group-flush mt-4">
                                <li className="list-group-item my-1">
                                    <Button type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                                </li>
                                <li className="list-group-item my-1">
                                    <Button type="link" href="tel:+622122081996">021 - 2208 - 1996</Button>
                                </li>
                                <li className="list-group-item my-1">
                                    <span>Staycation, Kemang, Jakarta</span>
                                </li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="row copyrights">
                    Copyright 2019 • All rights reserved • Staycation
                </div>
            </div>
        </footer>
    )
}
