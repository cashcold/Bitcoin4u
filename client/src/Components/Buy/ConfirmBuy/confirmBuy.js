import React, { Component } from 'react';
import './style.css'
class ConfirmBuyMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='confirm__buy__main'>
                <section className='confirm__section__1'>
                    <h1><span>Confirm</span> Buying  <i class="fab fa-bitcoin fa-3x"></i></h1>
                     </section>
                      <div className="both__confirm">
                         <section className='confrim__section__2'>
                                <div className='confirm'>
                            
                                <div className='confirmLine'>
                                <div className='lastConfirm'>
                                <div className='planInfo planInfo_2'>
                                    <p><span>Recieving Address:</span></p>  
                                    <p className='wallertAddress'>1EQsAFCTJBn4ADpyUpyWaK7VeJC2Wyr26w</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span>Buy Amount :</span></p>
                                    <p>GHC 50</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span>Payment Phone Number:</span></p>
                                    <p>0268253787</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span>Payment Number Name:</span></p>
                                    <p>Kate wosaye</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span> Miners Fees:</span></p>
                                    <p>Not available</p>
                                </div>

                                <div className='confirmBtnInfo'>
                                    <p>Please send exactly<span> 50</span> GHC to<br/>
                                    <p className='wallertNumber'>Airtel Number <span>0268253887</span></p>
                                    <p>Name <span>Frank Ainoo</span></p>
                                    <h4><span>Order status:</span> Waiting for payment</h4>
                                    </p>
                                </div>
                                <div className='btnConfirm'>
                                    <button className='btn btn-success' onClick={this.onSubmit}>I PAID CONFIRM</button>
                                </div>
                                </div>
                                </div>
                                <div className='blochChanImg'>
                                    {/* <img src={require('../../pic/')}/> */}
                                </div>
                                </div>
                        </section>
                        <section className='other__section__confirm'>
                                <img src={require('../../../images/cardmapr-nl-rDzI7m7sjPE-unsplash.jpg')}/>
                        </section>
                </div>
            </div>
         );
    }
}
 
export default ConfirmBuyMain;