import React, { Component } from 'react';
import './style.css'
class WhyRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Digital__currency'>
                <section className='digital__box1'>
                    <h1><span>Why</span> Must You <span>Register?</span></h1>
                    <p>To be able to Buy or Sell Digital/Cryptocurrencies on our website (Bitcoin4u). All Users are required to create an account using a valid Email, Mobile Number </p>
                    <p>
                    Registration is free and one-time. Once you become a verified registered user on our platform. You enjoy all the features that comes with our platform, including discounts and special rates.</p>
                    <p>
                    </p>
                </section>
                <section className='hlogo'>
                <div className='logoImg animate__animated animate__slower animate__flash'>
                         <h1> <i class="fab fa-bitcoin fa-3x"></i><span className='h1_bitcoin4u'>Bitcoin4u</span></h1>
                       </div>
                </section>
            </div>  
         );
    }
}
 
export default WhyRegister;