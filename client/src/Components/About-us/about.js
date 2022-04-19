import React, { Component } from 'react';
import './style.css'
class AboutMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='about__main'>
                <section className='aboutSection'>
                  <div className="about_head">
                      <h1 className='about_h1'>Our <span>mission</span> is making buying<br/> and selling of <span>cryptocurrency</span><br/> fast and <span>secure.</span></h1>
                      <p>Bitcoin4u is a Cryptocurrency dealer in Africa. Over the years we have developed mutual relationship with international partners to ensure constant availability of Cryptocurrencies at a good rate. We are also constantly monitoring the exchange market to set the most favorable rates. Our success is based on individual and fair approach. Our services are faster, better and trustworthy. No hidden fees, lowest rates ever, maximum reliability, live chat helpful support, and free instant SMS notification.</p>
                  </div>
                  <div className="about_head">
                      <h1><span>What</span> we do</h1>
                      <p>Bitcoin4u  helps you buy and sell Bitcoin, and other cryptocurrencies easily and securely.People love our easy-to-use products. From local payment methods to customer support, we make your cryptocurrencies experience the best one.</p>
                  </div>
                  <div className="about_head">
                      <h1><span>Our</span> Commitment</h1>
                      <p>We're doing things differently.Buying and selling cryptocurrencies has been complex and exhausting for too long, we are committed to change that and make cryptocurrency trading worthwhile to everyone.</p>
                  </div>
                  <div className="about_head">
                      <h1><span>Trans</span>parency</h1>
                      <p>We’re early industry pioneers and have been around since 2014, successfully processed more than 1 million dollars in transactions and have happy customers in over 15 countries.</p>
                  </div>
                  <div className="about_head">
                      <h1><span>Built </span>for you</h1>
                      <p>People love our easy-to-use products. From local payment methods to customer support in many different languages, we make your cryptocurrencies experience the best one.</p>
                  </div>
                </section>
            </div>
         );
    }
}
 
export default AboutMain;