import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

class ConfirmSellMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id: '',
            usd: '',
            payment__number: '',
            payment__name: '',
            walletAddress: '',
            full_name: '',
            email: '',
             date: '',
         }
         this.handleChange = this.handleChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    componentDidMount(){
        const user_id =  sessionStorage.getItem('user_id')
        const usd =  sessionStorage.getItem('usd')
        const full_name = sessionStorage.getItem('full_name')
        const email  = sessionStorage.getItem('email')
        const walletAddress = sessionStorage.getItem('walletAddress')
        const payment__number = sessionStorage.getItem('payment__number')
        const payment__name = sessionStorage.getItem('payment__name')
        const date = new Date().toString()

        this.setState({
            user_id,
            full_name,
            walletAddress,
            email,
            usd,
            payment__number,
            payment__name,
            date


        })
    }

    onSubmit = (event)=>{
        event.preventDefault()
        const BuyBitcoin = {
            user_id: this.state.user_id,
            full_name: this.state.full_name,
            usd: this.state.usd,
            payment__number: this.state.payment__number,
            payment__name: this.state.payment__name,
            walletAddress: this.state.walletAddress,
            email: this.state.email,
            date: this.state.date
        }
        console.log(BuyBitcoin)
        // http://localhost:8000
        axios.post("/users/sellBitcoin/", BuyBitcoin).then(res => {toast.success("Transaction Successful")}).then(res => setTimeout(()=>{
            window.location="/dashboard"
        }),800).catch(err => {toast.error(err.response.data)})

       
    }


    render() { 
        console.log(this.state.date)
        const Check___usd = ()=>{
            if(this.state.usd){
            document.querySelector('.outAmount').innerHTML = this.state.usd + " usd"
        }

       }
     Check___usd()
        return ( 
            <div className='confirm__buy__main'>
                <section className='confirm__section__1'>
                    <ToastContainer/>
                    <h1><span>Confirm</span> Selling  <i class="fab fa-bitcoin fa-3x"></i></h1>
                     </section>
                      <div className="both__confirm">
                         <section className='confrim__section__2'>
                                <div className='confirm'>
                            
                                <div className='confirmLine'>
                                <div className='lastConfirm'>
                                <div className='planInfo'>
                                    <p><span>Sell Amount :</span></p>
                                    <p>USD {this.state.usd}</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span>Payment Phone Number:</span></p>
                                    <p>{this.state.payment__number}</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span>Payment Number Name:</span></p>
                                    <p>{this.state.payment__name}</p>
                                </div>
                                <div className='planInfo'>
                                    <p><span>Service Fees:</span></p>
                                    <p>Not available</p>
                                </div>

                                <div className='confirmBtnInfo'>
                                    <p>Please send exactly <span className='outAmount'></span> to<br/>
                                    <p className='wallertNumber'>Recieving Address: <span>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</span></p>
                                    <h4><span>Order status:</span> Waiting for payment</h4>
                                    </p>
                                </div>
                                <div className='btnConfirm'>
                                    <button className='btn btn-success' onClick={this.onSubmit}>I SELL CONFIRM</button>
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
 
export default ConfirmSellMain;