import React, { Component } from 'react';
import './style.css'
class SellMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            usd: '',
            payment__number: '',
            payment__name: '',
            walletAddress: '',
            full_name: '',
            email: '',
             date: ''
         }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
       
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
  

    componentDidMount(){
  
    }

    onSubmit = (event)=>{
        event.preventDefault()
        const buyNow = {
            usd: this.state.usd,
            payment__number: this.state.payment__number,
            payment__name: this.state.payment__name,
            walletAddress: this.state.walletAddress,
            
        }
        console.log(buyNow)
        JSON.stringify( sessionStorage.setItem('usd',this.state.usd))
        JSON.stringify( sessionStorage.setItem('payment__number',this.state.payment__number))
        JSON.stringify( sessionStorage.setItem('payment__name',this.state.payment__name))
        JSON.stringify( sessionStorage.setItem('walletAddress',this.state.walletAddress))


        setTimeout(()=>{
            window.location='/confirmSell'
        },800)
    }
    render() { 
        const Check___usd = ()=>{
             if(this.state.usd){
             document.querySelector('.innOut').innerHTML = "GHC " + this.state.usd * 5.8
         }

        }
      Check___usd()
   
   
        return ( 
            <div className='buy__main'>
                <section className='buy__section_1'>
                    <h3><span>You</span> are <span>Selling</span> Bitcoin  <i class="fab fa-bitcoin fa-3x"></i></h3>
                </section>
              <div className="both__section">
                <section className='buy__section_2'>
                        <div className="buyform">
                           <div className="buy__all">
                                <p>Enter BTC USD Amount to sell</p>
                                <img src={require('../../../images/illustration-usa-flag_53876-18165.jpg')}/>
                                <input  name='usd' className='usd' onChange={this.handleChange('usd')}/>
                           </div>
                        </div>
                        {/* <div className="buyform">
                            <div className="buy__all">
                                 <p>Enter GH¢ Amount to pay</p>
                                 <img src={require('../../../images/istockphoto-1161593798-612x612.jpg')}/>
                                 <input name='gh' className='gh' onChange={this.handleChange('gh')}/>
                            </div>
                        </div> */}
                        <div className="buyform buyform__p">
                            <p><span>You</span> are to Received Total <br/><p className='innOut'></p> </p>
                            
                           
                            <p className='amount__to__pay'></p>
                        </div>
                        <div className="buyform">
                            <p>Payment Phone Number</p>
                            <input name='payment__number' onChange={this.handleChange('payment__number')}/>
                        </div>
                        <div className="buyform">
                            <p>Payment Number Name</p>
                            <input name='payment__name' onChange={this.handleChange('payment__name')}/>
                        </div>
                        <div className="buyform">
                            {/* <a href='' onClick={this.onSubmit} className='btn btn-warning'>Next</a> */}
                            <a href='#' onClick={this.onSubmit} className='btn btn-warning'>Next</a>
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
 
export default SellMain;