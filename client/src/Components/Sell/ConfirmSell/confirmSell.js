import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { io } from "socket.io-client";

class ConfirmSellMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id: '',
            usd: '',
            ghc: '',
            payment__number: '',
            payment__name: '',
            walletAddress: '',
            full_name: '',
            email: '',
            date: '',
            dateNow: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = input => event => {
        event.preventDefault();
        this.setState({ [input]: event.target.value });
    };

    componentDidMount() {
        const user_id = sessionStorage.getItem('user_id') || '';
        const usd = parseFloat(sessionStorage.getItem('usd')) || 0;
        const ghc = parseFloat(sessionStorage.getItem('ghc')) || 0;
        const full_name = sessionStorage.getItem('full_name') || '';
        const email = sessionStorage.getItem('email') || '';
        const walletAddress = sessionStorage.getItem('walletAddress') || '';
        const payment__number = sessionStorage.getItem('payment__number') || '';
        const payment__name = sessionStorage.getItem('payment__name') || '';
        const date = new Date().toString();

        this.setState({
            user_id,
            full_name,
            walletAddress,
            email,
            usd,
            ghc,
            payment__number,
            payment__name,
            date
        });
    }

    onSubmit = event => {
        event.preventDefault();
        const SellBuyBitcoin = {
            user_id: this.state.user_id,
            full_name: this.state.full_name,
            usd: this.state.usd,
            ghc: this.state.ghc,
            payment__number: Number(this.state.payment__number),
            payment__name: this.state.payment__name,
            walletAddress: this.state.walletAddress,
            email: this.state.email,
            date: this.state.date
        };

        let socket = io('/');

        socket.emit('SellBuyBitcoin', SellBuyBitcoin);

        axios.post("/users/sellBitcoin/", SellBuyBitcoin)
            .then(res => {
                toast.success("Transaction Successful");
                setTimeout(() => {
                    window.location = "/dashboard";
                }, 1100);
            })
            .catch(err => {
                toast.error(err.response.data);
            });
    };

    render() {
        const Recieving_BTC = this.state.usd * 0.000012;

        return (
            <div className='confirm__buy__main'>
                <section className='confirm__section__1'>
                    <ToastContainer />
                    <h1><span>Confirm</span> Selling  <i className="fab fa-bitcoin fa-3x"></i></h1>
                </section>
                <div className="both__confirm">
                    <section className='confrim__section__2'>
                        <div className='confirm'>
                            <div className='confirmLine'>
                                <div className='lastConfirm'>
                                    <div className='planInfo planInfo_2'>
                                        <p><span>Recieving Address:</span></p>
                                        <p className='wallertAddress'>bc1qrukzylvvwcy4vjd9f57wfzny8yhqyx7rjxs0m2</p>
                                        {/* <p className='wallertAddress'>{this.state.walletAddress}</p> */}
                                    </div>
                                    <div className='planInfo planInfo_2'>
                                        <p><span>Sending Bitcoin:</span></p>
                                        <p className='wallertAddress'>{Recieving_BTC}</p>
                                    </div>
                                    <div className='planInfo'>
                                        <p><span>Sell Amount :</span></p>
                                        <p>USD {this.state.usd}</p>
                                    </div>
                                    <div className='planInfo'>
                                        <p><span>Receiver Phone Number:</span></p>
                                        <p>{this.state.payment__number}</p>
                                    </div>
                                    <div className='planInfo'>
                                        <p><span>Receiver Mobile Name:</span> </p>
                                        <p>{this.state.payment__name}</p>
                                    </div>
                                    <div className='planInfo'>
                                        <p><span>Service Fees:</span></p>
                                        <p>Free</p>
                                    </div>
                                    <div className='confirmBtnInfo'>
                                        <p> Please you will get exactly <span className='outAmount'>{this.state.ghc}</span> GHC to Momo Number {this.state.payment__number} and Payment Name {this.state.payment__name} <br />
                                          
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
                        <img src={require('../../../images/cardmapr-nl-rDzI7m7sjPE-unsplash.jpg')} alt="Office" />
                    </section>
                </div>
            </div>
        );
    }
}

export default ConfirmSellMain;