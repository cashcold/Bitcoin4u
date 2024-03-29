import React, { Component } from 'react';
import './watchNotification.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { io } from "socket.io-client";

class WatchNotificationMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BuyBitcoin: ''

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]:event.target.value })
    }
    componentDidMount(){


    
        let socket = io()
        // let socket = io('http://capitalgain.herokuapp.com/')

       
    
         
         socket.on('BuyBitcoin',BuyBitcoin =>{
            toast.success(
            <div className='New_Deposit_main'>
                <h4>User {BuyBitcoin.full_name}<br/>Buying Bitcoin of  {BuyBitcoin.usd}$<br/>
                Time: {BuyBitcoin.date}
                </h4>
            </div>,{
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
         })
   
         socket.on('SellBuyBitcoin',SellBuyBitcoin =>{
            toast.info(
            <div className='New_Deposit_main'>
                <h4>User {SellBuyBitcoin.full_name}<br/>Selling Bitcoin of  {SellBuyBitcoin.usd}$<br/>
                Time: {SellBuyBitcoin.date}
                </h4>
            </div>,{
                position: "top-left",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
         })
   
  
        
    }
    render() { 
    let socket = io()
    // let socket = io('http://localhost:8000/')

     return ( 
            <div className='watch_notifi_main'>
                <ToastContainer/>

                <section className="watch_not">
                    <h1 >WE ARE ABOUT TO WATCH THE NOTIFICATION!!!</h1>
                    
                 </section>
                <section>
                    <ul  id="BuyBitcoin"></ul>
                </section>
                <section>
                    <ul  id="deposit_message"></ul>
                </section>
                <section>
                    <ul  id="deposit_message_A"></ul>
                </section>
                 {/* <section className="flow">
                     <input  name='live_deposit'  onChange={this.handleChange('live_deposit')}/>
                     <a onClick={()=>{
                         toast.success('hi',{
                            position: "top-right",
                            autoClose: false,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            })
                     }} className='btn-btn-warning' href='#' >Send</a>
                 </section> */}
               
            </div>
         );
    }
}
 
export default WatchNotificationMain;