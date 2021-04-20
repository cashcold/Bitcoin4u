import React, { Component } from 'react';
import './style.css'
class BuyMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            usd: '',
            gh: ''
         }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    componentDidMount(){
        // const checkAmount__usd = ()=>{
        //   if(this.state.usd){
        //       this.state.usd + 5
        //   }
        // }
        // checkAmount__usd()

    }
    render() { 
        return ( 
            <div className='buy__main'>
                <section className='buy__section_1'>
                    <h3><span>You</span> are <span>buying</span> Bitcoin  <i class="fab fa-bitcoin fa-3x"></i></h3>
                </section>
              <div className="both__section">
                <section className='buy__section_2'>
                        <div className="buyform">
                           <div className="buy__all">
                                <p>Enter BTC USD Amount to buy</p>
                                <img src={require('../../../images/illustration-usa-flag_53876-18165.jpg')}/>
                                <input name='usd' className='usd' onChange={this.handleChange('usd')}/>
                           </div>
                        </div>
                        <div className="buyform">
                            <div className="buy__all">
                                 <p>Enter GH¢ Amount to pay</p>
                                 <img src={require('../../../images/istockphoto-1161593798-612x612.jpg')}/>
                                 <input name='gh' className='gh' onChange={this.handleChange('gh')}/>
                            </div>
                        </div>
                        <div className="buyform">
                            <p>Total to Pay {this.state.usd}</p>
                            <p className='amount__to__pay'></p>
                        </div>
                        <div className="buyform">
                            <p>Enter Bitcon Wallet Address</p>
                            <input/>
                        </div>
                    </section>
                    <section className='other__section'>
                        <img src={require('../../../images/office-620822_1920.jpg')}/>
                    </section>
              </div>
            </div>
         );
    }
}
 
export default BuyMain;