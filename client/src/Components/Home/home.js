import React, { Component } from 'react';
import './style.css'
class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
           
    const Typing = ()=>{
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["Bitcoin","What is Bitcoin mining?","The Must leading  cryptocurrency In Market","Where and how can we safely invest in Bitcoin today?","How much is a bitcoin worth? How and who determines its price?","Bitcoin as money","Bitcoin as a means of payment","Knowing how to invest in Bitcoin safely is not difficult at all if you have some basic recommendations in mind to do so",""];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
        }

        function erase() {
        if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
        } 
        else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
        }
        }

        document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
        if(textArray.length) setTimeout(type, newTextDelay + 250);
        });
    }
    Typing()
     
    }
    render() { 
        return (
            <div className='home__main'>
                <div className="">
                    <section className='homeNow'>
                       
                        <div className="home_1">
                            <h1><span>Buy</span> and <span>sell</span> cryptocurrency<br/> the <span>best</span> price, with no <span>hidden</span> fees.</h1>
                        </div>
                        <div className="home__text">
                            <p><span>Trade</span> confidently and conveniently in <span>Ghana</span> <br/>Get Blockchain <span>wallet</span> Address to Save Your Bitcoin.</p>
                            <a href='' className='btn btn-getStart'>Get Started For Free</a>
                        </div>
                        
                        <div className="playstore">
                            <div className="payment_method">
                                <h1>We <span>Accept:</span></h1>
                                <img src={require('../../images/mobile-money.jpg')}/>
                            </div>
                           <div className="pay">
                               <h3><span>Download</span> App Now and Get <span>$5 Bonus</span> Bitcoin</h3>
                                 <img className='playLogo' src={require('../../images/e563d97183e6468f0f32f4a01c424e68.png')}/>
                            </div>
                           </div>
                           <div className="bothHead">
                            <div className='subHead'>
                                <h1> <span class="typed-text"></span><span class="cursor">&nbsp;</span></h1>
                            </div>
                            <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
                        </div> 
                    </section>
                    <section className='moreInfo'>
                        <div className="info__head">
                            <h3><span>Dive</span> into the <span>future</span> of <span>finance</span></h3>
                            <h1><span>Buy</span> and <span>sell</span> cryptocurrencies in a <span>few</span> seconds</h1>
                        </div>
                        <div className="both__flow">
                            <div className="flow__start_1">
                                <img className='' src={require('../../images/undraw_bitcoin2_ave7 (1).svg')}/>
                            </div>
                            <div className="flow__start_2">
                                <div className="flowContext">
                                    <div className="flow__box">
                                        <div className="flowNow">
                                            <p><span>Register</span> FREE in 30 <span>seconds</span></p>
                                            <hr/>
                                            <h3>Create your account. Individuals, companies, developers, institutions and investors are welcome</h3>
                                        </div>
                                    </div>
                                    <div className="flow__box">
                                        <div className="flowNow">
                                            <p><span>Login</span> Into Your <span>Dashboard</span></p>
                                            <hr/>
                                            <h3>Use Your User Credential To Login Dashboard.</h3>
                                        </div>
                                    </div>
                                    <div className="flow__box">
                                        <div className="flowNow">
                                            <p><span>Start</span> buying and selling <span>Bitcoin</span></p>
                                            <hr/>
                                            <h3>Create your portfolio at the click of a button. Buy, sell and trade in 1 second!</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='great__work'>
                        <div className="great__work__head">
                            <h3><span>Excellence</span></h3>
                            <h1>Details make the <span>difference</span></h1>
                        </div>
                        <div className="aboutBitcoin4u">
                            <div className="bit4u__box">
                                 <i class="fab fa-bitcoin fa-5x"></i>
                                 <h3><span>Multicurrency</span></h3>
                                 <p>Buy, sell, receive, send, explore...<br/> multiple cryptocurrencies.</p>
                            </div>
                            <div className="bit4u__box">
                                <i class="fas fa-headset fa-5x"></i>
                                 <h3><span>24 hour support Trading</span></h3>
                                 <p>Telephone support, email, video and tutorials at any time..</p>
                            </div>
                            <div className="bit4u__box">
                                        <i class="fas fa-walking fa-5x"></i>
                                 <h3><span>Extra protection</span></h3>
                                 <p>Cryptocurrencies protected with cold security vaults.</p>
                            </div>
                            <div className="bit4u__box">
                                    <i class="fas fa-globe fa-5x"></i>
                                 <h3><span>Global</span></h3>
                                 <p>Multiple services available for 180 countries around the world..</p>
                            </div>
                            <div className="bit4u__box">
                                        <i class="fas fa-users fa-5x"></i>
                                 <h3><span>Affiliates</span></h3>
                                 <p>Earn money by inviting. Advanced Affiliate Management System.</p>
                                </div>
                            <div className="bit4u__box">
                                        <i class="fas fa-bell fa-5x"></i>
                                 <h3><span>Real-time notifications</span></h3>
                                 <p>Notices when receiving payments and auditable history of actions in real time.</p>
                             </div>
                            <div className="bit4u__box">
                                    <i class="fas fa-search-dollar fa-5x"></i>
                                 <h3><span>ALL INCLUSIVE, COMPETITIVE PRICING</span></h3>
                                 <p>The most competitive prices in the market. The price you see is the price you pay. No added fees and no trade slippage.</p>
                            </div>
                            <div className="bit4u__box">
                                    <i class="fas fa-money-check-alt fa-5x"></i>
                                 <h3><span>MANY WAYS TO PAY</span></h3>
                                 <p>Pay using MTN MOBILE, Vodafone Cash, Airtel Money, TiGo Money, G-Money.</p>
                            </div>
                        </div>
                    </section>
                    <section className='contect__info'>
                        <div className="contextInfo">
                            <h3><span>Do</span> you have any <span>questions?</span> Contact us</h3>
                            <h4><span>0268253787</span></h4>
                            <p>Or write us by <span>email</span> or chat here.</p>
                            <h1><span>Access</span> Bitcoin and other <span>cryptocurrencies</span> with Bitcoin4u</h1>
                        </div>
                        <div className="contextInfo_mail">
                            <h2><span>Open</span> your account today, <span>FREE</span></h2>
                            <h4><span>Access</span> the entire suite, <span>without</span> opening cost or maintenance <span>costs.</span></h4>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
 
export default HomeMain;