import React, { Component } from 'react';
import './style.css'
class ContactMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainContact'>
                <h1><span>SUPPORT</span> CENTER</h1>
                <section className='contactNow'>
                <div className='bothAll'>
                        <div className='bothSupportA'>
                            <div className='bothMenu bothMenuCount1' >
                                <div className='supportInfo'>
                                    <h1> <i class="fas fa-envelope-square fa-3x"></i></h1>
                                    <h4><span>OUR</span> E-MAIL</h4>
                                    <p>support@bitcoin4uonline.com</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount2' >
                                <div className='supportInfo'>
                                    <h1><i class="fas fa-phone fa-3x"></i></h1>
                                    <h4><span>PHONE</span> NUMBER </h4>
                                    <p>+233268253787</p>
                                    <p>+23353747790</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount3'>
                                <div className='supportInfo'>
                                <h1><i class="fas fa-address-card fa-3x"></i></h1>
                                    <h4><span>ADDRESS</span> LINE</h4>
                                    <p>City: Accra Tema</p>
                                    <p> OPP. SUPPER ,THE CHRIST MIRACLES CHURCH INTL.</p>
                                </div>
                            </div>  
                        </div>
                        <div className='bothSupportB'>
                            <div className='supportLine'>
                                <div className='supportNow'>
                                    <div className='lineSupport'>
                                        <h1><span>SEND</span> US A MESSAGE</h1>
                                        <p>Get in <span>touch</span> with us any time you need an <span>assistance.</span> We are available 24/7 to answer your <span>queries</span>, We are here to <span>guide</span> you with anything you need.</p>
                                    </div>
                                </div>
                                <div className='contactDiv'>
                                   <div className='formA'>
                                        <form className='myFormControl'>
                                            <div className='myForms'>
                                                <input type='text' name='name' placeholder='Name'/>
                                            </div>
                                            <div className='myForms'>
                                                <input type='email' name='name' placeholder='Email'/>
                                            </div>
                                            <div className='myForms'>
                                                <textarea name='message' placeholder='Message Us'></textarea>
                                            </div>
                                            <a href='' className='btn btn-warning contactBtn'>Send</a>
                                        </form>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default ContactMain;