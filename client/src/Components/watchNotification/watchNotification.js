import React, { Component } from 'react';
import axios from 'axios'
import './watchNotification.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { io } from "socket.io-client";

class WatchNotificationMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BuyBitcoin: '',
            bitcoinBuy: []
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

    componentDidMount() {

        axios.get('http://localhost:8000/users/last-bitcoinBuy')
        .then(response => {
          this.setState({ bitcoinBuy: response.data });
        })
        .catch(error => console.error('Error fetching bitcoinBuy:', error));


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

    render() {
        return (
            <div className='watch_notifi_main'>
                <ToastContainer />
                <section className="watch_not">
                    <h1>WE ARE ABOUT TO WATCH THE NOTIFICATION!!!</h1>
                    <section class="displayBothTrans">
                        <section class="displayNewBitcoinBuy">
                            <h2>Recent Bitcoin Buy</h2>
                            {this.state.bitcoinBuy.map((bitcoinBuy, index) => (
                            
                            
                                <div className="recent-users-container user-info">
                                    {/* <img src={`https://robohash.org/${bitcoinBuy.user}`} alt="User Avatar" /> */}
                                    <h3>{bitcoinBuy.full_name}</h3>
                                    <p>Amount: ${bitcoinBuy.usd} in ghc{bitcoinBuy.ghc}</p>
                                    <p>Method: <span class="bitcoinColour">Bitcoin</span> </p>
                                    <p><span class="dateColor">Deposit</span> Date: {new Date(bitcoinBuy.date).toLocaleString()}</p>
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
