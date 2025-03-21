import React, { Component } from 'react';
import axios from 'axios';
import './watchNotification.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { io } from "socket.io-client";

class WatchNotificationMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BuyBitcoin: '',
            bitcoinBuy: [],
            bitcoinSell: []
        };
    }

    handleChange = input => event => {
        event.preventDefault();
        this.setState({ [input]: event.target.value });
    };

    playSound = (soundFile) => {
        const audio = new Audio(`/tones/${soundFile}`);
        audio.play()
            .then(() => console.log('Sound played successfully.'))
            .catch((error) => console.error('Error playing sound:', error));
    };

    fetchBitcoinBuys = () => {
        axios.get('http://localhost:8000/users/last-bitcoinBuy')
            .then(response => {
                this.setState({ bitcoinBuy: response.data });
            })
            .catch(error => console.error('Error fetching bitcoinBuy:', error));
    };

    fetchBitcoinSell = () => {
        axios.get('http://localhost:8000/users/last-bitcoinSell')
            .then(response => {
                this.setState({ bitcoinSell: response.data });
            })
            .catch(error => console.error('Error fetching bitcoinSell:', error));
    };

    componentDidMount() {
        this.fetchBitcoinBuys();
        this.fetchBitcoinSell();

        this.interval = setInterval(this.fetchBitcoinBuys, 3000);
        this.interval = setInterval(this.fetchBitcoinSell, 3000);

        const socket = io('http://localhost:8000', {
            reconnection: true,
            reconnectionAttempts: 10,
            reconnectionDelay: 500
        });

        socket.on('BuyBitcoin', BuyBitcoin => {
            toast.success(
                <div className='New_Deposit_main'>
                    <h4>User {BuyBitcoin.full_name}<br />Buying Bitcoin of ${BuyBitcoin.usd} and in GHC{BuyBitcoin.ghc}<br />
                        Time: {BuyBitcoin.date}
                    </h4>
                </div>, {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    onOpen: () => this.playSound('incoming_message.mp3')
                });
        });

        socket.on('SellBuyBitcoin', SellBuyBitcoin => {
            toast.info(
                <div className='New_Deposit_main'>
                    <h4>User {SellBuyBitcoin.full_name}<br />Selling Bitcoin of ${SellBuyBitcoin.usd} and in GHC{SellBuyBitcoin.ghc}<br />
                        Time: {SellBuyBitcoin.date}
                    </h4>
                </div>, {
                    position: "top-left",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    onOpen: () => this.playSound('incoming_msg.mp3')
                });
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='watch_notifi_main'>
                <ToastContainer />
                <section className="watch_not">
                    <h1> WATCH THE NOTIFICATION!!!</h1>
                    <section className="displayBothTrans">
                        <section className="displayNewBitcoinSell">
                            <h2>Recent Bitcoin Sells</h2>
                            {this.state.bitcoinSell.map((bitcoinSell, index) => (
                                <div key={index} className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{bitcoinSell.full_name}</h3>
                                        <p className="card-text">Amount: ${bitcoinSell.usd} in GHC{bitcoinSell.ghc}</p>
                                        <p className="card-text">Method: <span className="bitcoinColour">Bitcoin</span></p>
                                        <p className="card-text"><span className="">Deposit</span> Date: {new Date(bitcoinSell.date).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <section className="displayNewBitcoinBuy">
                            <h2>Recent Bitcoin Buys</h2>
                            {this.state.bitcoinBuy.map((bitcoinBuy, index) => (
                                <div key={index} className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{bitcoinBuy.full_name}</h3>
                                        <p className="card-text">Amount: ${bitcoinBuy.usd} in GHC{bitcoinBuy.ghc}</p>
                                        <p className="card-text">Method: <span className="bitcoinColour">Bitcoin</span></p>
                                        <p className="card-text"><span className="">Deposit</span> Date: {new Date(bitcoinBuy.date).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </section>
                </section>
                <section>
                    <ul id="BuyBitcoin"></ul>
                </section>
                <section>
                    <ul id="deposit_message"></ul>
                </section>
                <section>
                    <ul id="deposit_message_A"></ul>
                </section>
            </div>
        );
    }
}

export default WatchNotificationMain;