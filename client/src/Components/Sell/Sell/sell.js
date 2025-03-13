import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

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
            date: '',
            exchangeRate: 7.00 // Default exchange rate
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = input => event => {
        event.preventDefault();
        this.setState({ [input]: event.target.value });
    };

    componentDidMount() {
        this.fetchExchangeRate();
    }

    fetchExchangeRate() {
        axios.get('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => {
                const rate = response.data.rates.GHS;
                this.setState({ exchangeRate: rate });
            })
            .catch(error => {
                console.error('Error fetching exchange rate:', error);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.usd !== this.state.usd) {
            this.updateUsdToGhc();
        }
    }

    updateUsdToGhc() {
        if (this.state.usd) {
            const ghcAmount = (this.state.usd * this.state.exchangeRate).toFixed(2);
            document.querySelector('.innOut').innerHTML = "GHC " + ghcAmount;
            sessionStorage.setItem('ghc', ghcAmount);
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const sellNow = {
            usd: this.state.usd,
            payment__number: this.state.payment__number,
            payment__name: this.state.payment__name,
            walletAddress: this.state.walletAddress,
        };
        console.log(sellNow);
        sessionStorage.setItem('usd', this.state.usd);
        sessionStorage.setItem('payment__number', this.state.payment__number);
        sessionStorage.setItem('payment__name', this.state.payment__name);
        sessionStorage.setItem('walletAddress', this.state.walletAddress);

        setTimeout(() => {
            window.location = '/confirmSell';
        }, 800);
    };

    render() {
        return (
            <div className='buy__main'>
                <section className='buy__section_1'>
                    <h3><span>You</span> are <span>Selling</span> Bitcoin  <i className="fab fa-bitcoin fa-3x"></i></h3>
                </section>
                <div className="both__section">
                    <section className='buy__section_2'>
                        <div className="buyform">
                            <div className="buy__all">
                                <p>Enter BTC USD Amount to sell</p>
                                <img src={require('../../../images/illustration-usa-flag_53876-18165.jpg')} alt="USA Flag"/>
                                <input name='usd' className='usd' onChange={this.handleChange('usd')} />
                            </div>
                        </div>
                        <div className="buyform buyform__p">
                            <p><span>You</span> are to Receive Total <br/><span className='innOut'></span> </p>
                        </div>
                        <div className="buyform">
                            <p>Receiver Phone Number</p>
                            <input name='payment__number' onChange={this.handleChange('payment__number')} />
                        </div>
                        <div className="buyform">
                            <p>Receiver Mobile Name</p>
                            <input name='payment__name' onChange={this.handleChange('payment__name')} />
                        </div>
                        <div className="buyform">
                            <a href='#' onClick={this.onSubmit} className='btn btn-warning'>Next</a>
                        </div>
                    </section>
                    <section className='other__section'>
                        <img src={require('../../../images/office-620822_1920.jpg')} alt="Office"/>
                    </section>
                </div>
            </div>
        );
    }
}

export default SellMain;