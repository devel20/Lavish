import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__section">
                        <div className="footer__row">

                            <div className="footer__col">
                                <ul className='footer__list'>
                                    <li className='footer__title'><h2>About</h2></li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Careers
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Corporate Sales
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Where To Buy
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__col">
                                <ul className='footer__list'>
                                    <li className='footer__title'><h2>Support</h2></li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Contact
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Returns
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Warranty
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Help
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__col">
                                <ul className='footer__list'>
                                    <li className='footer__title'><h2>Legal</h2></li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Privacy
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Account
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Terms
                                        </Link>
                                    </li>
                                    <li className='footer__item'>
                                        <Link to='/' className='footer__link'>
                                            Patents
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="footer__wraper">
                            <ul className="social">
                                <li>
                                    <Link to='/' className='social__link'>
                                        <TiSocialFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='social__link'>
                                        <TiSocialInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='social__link'>
                                        <TiSocialLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='social__link'>
                                        <TiSocialTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='social__link'>
                                        <TiSocialYoutube />
                                    </Link>
                                </li>
                            </ul>
                            <div className="description">
                                <h2>© 2022 Incase © All Rights Reserved</h2>
                                <p>Site By SIDE-Commerce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
