import React, { Component } from 'react';
import './style.css'
class FAQ_Main
 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='faqs__main'>
                <section className='faqSection'>
                    <h1><span>Asked</span> Questions</h1>
                    <h3>Some of the <span>frequently</span> asked questions on our system. <span>Feel Free</span> to contact us for more <span>information.</span></h3>
                </section>
                <section className='mainfaq__box'>
                    <div className="faqs__box">
                        <h1>Introduction of Digital Currencies</h1>
                        <ul>
                            <li><a href=''>1. What is Digital Currency ?</a></li>
                            <li><a href=''>2. Types of Digital Currencies.</a></li>
                            <li><a href=''>3. How to get different types of digital currencies</a></li>
                            <li><a href=''>4. How to use ecurrency4u to buy and sell Digital Currencies</a></li>
                        </ul>
                    </div>
                    <div className="faqs__box">
                        <h1>Registering on Bitcoin4u</h1>
                        <ul>
                            <li><a href=''>1. Why do i have to Register ?</a></li>
                            <li><a href=''>2. How to Register ?</a></li>
                        </ul>
                    </div>
                    <div className="faqs__box">
                        <h1>Buying on Bitcoin4u</h1>
                        <ul>
                            <li><a href=''>1. How to Buy ?</a></li>
                            <li><a href=''>2. How to Add Payment Details ??</a></li>
                            <li><a href=''>3. How to update payment transaction id ?</a></li>
                        </ul>
                    </div>
                    <div className="faqs__box">
                        <h1>Selling on Bitcoin4u</h1>
                        <ul>
                            <li><a href=''>1. How to Sell ?</a></li>
                            <li><a href=''>2. How to Check if your Order has Confirmed?</a></li>
                            <li><a href=''>3. What to do when your order is expired ?</a></li>
                        </ul>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default FAQ_Main
;