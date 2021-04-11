import React, { Component } from 'react';
import './style.css'
class HowToBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Digital__currency'>
                <section className='digital__box1'>
                    <h1><span>REQUIREMENTS</span></h1>
                    <p><span>Notes</span> To be able to buy any of the available digital currencies on Bitcoin4u</p>
                    <p><span>Notes</span> You must have  verified Payment Phone Number to Recieved Payment
                    </p>
                    <p>
                    <span>Notes</span> You must have a digital currency account where you will store the digital currency you are buying.
                    <br/>
                    <span>exp</span> Blackchain digital currency account
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
 
export default HowToBuy;