import React, { Component } from 'react';
import './style.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='footer__main'>
                <section className='footer__box'>
                    <div className="footerBox">
                        <div className='logoImg_footer animate__animated animate__slower animate__flash'>
                         <h1><span> <i class="fab fa-bitcoin fa-2x"></i>Bitcoin4u</span></h1>
                         <div className="collabo">
                            <i class="fab fa-apple fa-2x"></i>
                            <i class="fab fa-windows fa-2x"></i>
                            <i class="fab fa-ubuntu fa-2x"></i>
                            <i class="fab fa-android fa-2x"></i>
                         </div>
                         <h3>+233268253787</h3>
                         <div className="social_icons">
                            <i class="fab fa-twitter fa-2x"></i>
                            <i class="fab fa-linkedin-in fa-2x"></i>
                            <i class="fab fa-instagram fa-2x"></i>
                            <i class="fab fa-telegram fa-2x"></i>
                         </div>
                       </div>
                    </div>
                    <div className="footerBox">
                        <h3><span>Bitcoin4u Suite</span></h3>
                        <ul>
                            <li><a href='#'>Wallet</a></li>
                            <li><a href='#'>Buy</a></li>
                            <li><a href='#'>Sell</a></li>
                            <li><a href='#'>Explorer</a></li>
                            <li><a href='#'>Commerce</a></li>
                        </ul>
                    </div>
                    <div className="footerBox">
                        <h3><span>Academy</span></h3>
                        <ul>
                            <li><a href='#'>First steps</a></li>
                            <li><a href='#'>How to buy?</a></li>
                            <li><a href='#'>How to sell?</a></li>
                            <li><a href='#'>What is mining?</a></li>
                            <li><a href='#'>What is Halving?</a></li>
                        </ul>
                    </div>
                    <div className="footerBox">
                        <h3><span>Company</span></h3>
                        <ul>
                            <li><a href='#'>Support</a></li>
                            <li><a href='#'>Team</a></li>
                            <li><a href='#'>Invite and win</a></li>
                            <li><a href='#'>Brand</a></li>
                            <li><a href='#'>Employment</a></li>
                        </ul>
                    </div>
                </section>
                <section className='lastFooter'>
                    <div className='footerMsg'>
                    <p>&copy; COPYRIGHT  || DEVELOP BY BITCOIN4U TEAM || PRIVACY POLICY || TERMS OF USE || AD CHOICES || COOKIE POLICY || COOKIE SETTINGS</p>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Footer;