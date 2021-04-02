import React, { Component } from 'react';
import './style.css'
class DigitalCurrency extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Digital__currency'>
                <section className='digital__box1'>
                    <h1>What is <span>Digital</span> Currency?</h1>
                    <p>Digital currency (digital money, electronic money or electronic currency) is any currency, money, or money-like asset that is primarily managed, stored or exchanged on digital computer systems, especially over the internet. Types of digital currencies include cryptocurrency, virtual currency and central bank digital currency. Digital currency may be recorded on a distributed database on the internet, a centralized electronic computer database owned by a company or bank, within digital files or even on a stored-value card
                    </p>
                    <p>
                    Digital currencies exhibit properties similar to traditional currencies, but generally do not have a physical form, unlike currencies with printed banknotes or minted coins. This lack of physical form allows nearly instantaneous transactions over the internet and removes the cost associated with distributing notes and coins. Usually not issued by a governmental body, virtual currencies are not considered a legal tender and they enable ownership transfer across governmental borders.
                    </p>
                    <p>
                    These types of currencies may be used to buy physical goods and services, but may also be restricted to certain communities such as for use inside an online game.
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
 
export default DigitalCurrency;