import React from 'react'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <footer className='footer'>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>

                        <div className='newslatter-section'>
                            <h3>SIGN UP TO GET 10% OFF YOUR FIRST ORDER AND STAY UP TO DATE ON THE LATEST PRODUCT RELEASES, SPECIAL OFFERS AND NEWS
                            </h3>
                            <div className='newslatter-input'>

                                <form>
                                    <input size="40" type='email' placeholder='Your Email *'></input>
                                    <button type='submi' className='subscribe-button' >subscribe</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='footer-links'>
                            <ul>
                                <li>Shop</li>
                                <li>Faq</li>
                                <li>Shiping</li>
                                <li>Returns</li>
                                <li>careers</li>
                                <li>TERMS & CONDITIONS</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>

                        <div className='footer-contact'>
                            <p className='footer-para'>If you have any questions regarding your order, products or our service, please contact our customer service.</p>
                            <ul >
                                <li>MONDAY - FRIDAY: 10:00-6:00 PM</li>
                                <li><span>PHONE:</span> +1 712-339-9294</li>
                                <li><span>EMAIL:</span> INFO@MODERNO.COM</li>
                                <li><span>ADDRESS:</span> 283 N. GLENWOOD STREET, LEVITTOWN, NY</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-md-4'>

                        <div className='footer-partners'>
                            <img src='/ricky-2152262473.png'></img>
                        </div>

                    </div>

                    <div className='col-md-4'>

                        <div className='copyright-content'>
                            <h2 className="elementor-heading-title">© 2023 Moderno Theme. All Rights Reserved.</h2>
                        </div>

                    </div>



                    <div className='col-md-4'>

                        <div className='social-icons'>
                            <div>
                                <FacebookOutlinedIcon />
                            </div>
                            <div>
                                <InstagramIcon />
                            </div>
                            <div>
                               <TwitterIcon/>
                            </div>
                            <div>
                                <YouTubeIcon />
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div >


        </footer>

    )
}

export default Footer