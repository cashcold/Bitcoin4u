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
                <section className='confrim__section__2'>
                <div className='confirm'>
              
                <div className='confirmLine'>
                    <div className='lastConfirm'>
                        <div className='planInfo'>
                            <p>Recieving Address:</p>  
                            <p>1EQsAFCTJBn4ADpyUpyWaK7VeJC2Wyr26w</p>
                        </div>
                        <div className='planInfo'>
                            <p>Buy Amount :</p>
                            <p>GHC 50</p>
                        </div>
                        <div className='planInfo'>
                            <p>Payment Phone Number:</p>
                            <p>0268253787</p>
                        </div>
                          <div className='planInfo'>
                            <p> Miners Fee:</p>
                            <p>Not available</p>
                        </div>

                        <div className='confirmBtnInfo'>
                            <p>Please send exactly<span> 50</span> GHC to<br/>
                            <p className='wallertNumber'>0268253887</p>
                            <p>Frank Ainoo</p>
                            <div className='automatic'>
                                {/* <img src={require('../../images/blockChain.png')} alt='pic'/> */}
                            </div>
                            <h4>Order status: Waiting for payment</h4>
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
            </div>
         );
    }
}
 
export default ConfirmBuyMain;