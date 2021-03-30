import React, { Component } from 'react';
import './style.css'
class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
           
    // const Typing = ()=>{
    //     const typedTextSpan = document.querySelector(".typed-text");
    //     const cursorSpan = document.querySelector(".cursor");

    //     const textArray = ["Buy and sell cryptocurrency at the best price, with no hidden fees.",];
    //     const typingDelay = 200;
    //     const erasingDelay = 100;
    //     const newTextDelay = 2000; // Delay between current and next text
    //     let textArrayIndex = 0;
    //     let charIndex = 0;

    //     function type() {
    //     if (charIndex < textArray[textArrayIndex].length) {
    //         if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    //         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    //         charIndex++;
    //         setTimeout(type, typingDelay);
    //     } 
    //     else {
    //         cursorSpan.classList.remove("typing");
    //         setTimeout(erase, newTextDelay);
    //     }
    //     }

    //     function erase() {
    //     if (charIndex > 0) {
    //     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    //     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    //     charIndex--;
    //     setTimeout(erase, erasingDelay);
    //     } 
    //     else {
    //     cursorSpan.classList.remove("typing");
    //     textArrayIndex++;
    //     if(textArrayIndex>=textArray.length) textArrayIndex=0;
    //     setTimeout(type, typingDelay + 1100);
    //     }
    //     }

    //     document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    //     if(textArray.length) setTimeout(type, newTextDelay + 250);
    //     });
    // }
    // Typing()
     
    }
    render() { 
        return (
            <div className='home__main'>
                <div className="">
                    <section className='homeNow'>
                        <div className="home_1">
                            <h1><span>Buy</span> and <span>sell</span> cryptocurrency<br/> the <span>best</span> price, with no <span>hidden</span> fees.</h1>
                        </div>
                            {/* <div className='subHead'>
                                <h1> <span class="typed-text"></span><span class="cursor">&nbsp;</span></h1>
                            </div> */}
                        <div className="home__text">
                            <p>Trade confidently and conveniently in Ghana <br/>with our award winning OTC brokerage and wallet.</p>
                            <a href='' className='btn btn-getStart'>Get Started For Free</a>
                        </div>
                        <div className="playstore">
                            <div className="payment_method">
                                <h1>We Accept:</h1>
                                <img src={require('../../images/mobile-money.jpg')}/>
                            </div>
                           <div className="pay">
                               <h3>Download App Now and Get $5 Bonus Bitcoin</h3>
                                 <img className='playLogo' src={require('../../images/e563d97183e6468f0f32f4a01c424e68.png')}/>
                            </div>
                           </div>
                        
                    </section>
                </div>
            </div>
        );
    }
}
 
export default HomeMain;