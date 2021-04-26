import React, { Component } from 'react';
import './style.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            full_name: '',
            email: '',
            phone: '',
            date: '',
            ip_address: '',
            buyTotal: [],
            sellTotal: []
         }
    }

    componentDidMount(){
        const DropUserInfo = ()=>{
            const dropUserInfoBtn = document.querySelector('.dropUserInfo')
            const dashUser__box = document.querySelector('.dashUser__box')

            dropUserInfoBtn.addEventListener('click',()=>{
                if(dashUser__box.style.display==='none'){
                    dashUser__box.style.display='block';
                }
                else{
                    dashUser__box.style.display='none'
                }
            })
            
        }
        DropUserInfo()

        const token = sessionStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
         JSON.stringify( sessionStorage.setItem('user_id',decoded.user_id))
         JSON.stringify( sessionStorage.setItem('full_name',decoded.full_name))
         JSON.stringify( sessionStorage.setItem('email',decoded.email))
         JSON.stringify( sessionStorage.setItem('phone',decoded.phone))
         JSON.stringify( sessionStorage.setItem('ip_address',decoded.ip_address))
         JSON.stringify( sessionStorage.setItem('date',decoded.date))
        this.setState({
            id: decoded.user_id,
            full_name: decoded.full_name,
            ip_address: decoded.ip_address,
            email: decoded.email,
            phone: decoded.phone,
            date: decoded.date
         })

         const id = decoded.user_id
         axios.post('/users/buyBitcoinInfo',{id}).then(data => this.setState({
            buyTotal: data.data
         }))
         axios.post('/users/sellBitcoinInfo',{id}).then(data => this.setState({
            sellTotal: data.data
         }))

    }
    render() { 
    //   console.log(this.state.buyTotal.lastBuy)
        const {lastBuy1} = this.state.buyTotal;
      console.log(lastBuy1)
        return ( 
            <div className='dashTop'>
                <section className='firstDash'>
                <div className='dashboard__main'>
                 {/* <div className='logoImg dashImg bitcoin4uDashH1 animate__animated animate__slower animate__flash'>
                        <h1> <i class="fab fa-bitcoin fa-2x"></i> Bitcoin4u</h1>
                       </div> */}
                <section className='dash__box____main'>
                    <div className="das__box_1">
                       <div className="dashList">
                           <h3><span>Hi</span> {this.state.full_name} <span className='dashicon'> <i class="fas fa-signal fa-1x"></i></span></h3>
                           <ul>
                               <li><a href=''><i class="fas fa-user fa-2x"></i> Dashboard </a></li>
                               <li><a href='/buy'><i class="fas fa-dollar-sign fa-2x"></i> Buy</a></li>
                               <li><a href='/sell'><i class="fas fa-dollar-sign fa-2x"></i> Sell</a></li>
                               <li><a href=''><i class="fas fa-file-invoice-dollar fa-2x"></i> Manage Orders</a></li>
                               <li><a href=''><i class="fas fa-file-signature fa-2x"></i> Manage Account</a></li>
                               <li><a href=''><i class="fas fa-key fa-2x"></i> Manage Payment</a></li>
                               <li><a href=''><i class="fas fa-hands-helping fa-2x"></i> Support Center</a></li>
                               <li><a href=''><i class="fas fa-sign-out-alt fa-2x"></i> Logout</a></li>
                           </ul>
                       </div>
                    </div>
                    <div className="das__box_2">
                        <div className="inner__box__1">
                           <div className="both__inner__box">
                               <div className="sapInner__box_1">
                                    <i class="fas fa-grip-horizontal fa-3x"></i>
                                    <i class="fas fa-bell fa-3x"></i>
                                    <span className='dropUserInfo'> <i class="fas fa-user-shield fa-3x"></i></span>
                                </div>
                                <div className="dashUser__box">
                                    <ul>
                                        <li><a href=''>Profile</a></li>
                                        <li><a href=''>Support</a></li>
                                        <li><a href=''>Lock</a></li>
                                        <li><a href=''>Logout</a></li>
                                    </ul>
                                </div>
                           </div>
                        </div>
                        <div className="inner__box__2">
                            <section className='section__box__main'>
                                <div className="main__main">
                                    <h3>Dashboard <i class="fas fa-scroll fa-2x"></i></h3>
                                    <h3>Transition <i class="fas fa-chart-line fa-2x"></i></h3>
                                </div>
                                
                            </section>
                            <section className='btiSection'>
                                <div className="dashBitMe">
                                    <coingecko-coin-price-chart-widget  coin-id="bitcoin" currency="usd" height="700" locale="en">
                                    </coingecko-coin-price-chart-widget>
                                </div>
                            </section>
                        </div>
                    </div>
                </section> 
            </div>
        </section>
        <section className='transition__main'>
                <div className="transition__all">
                     <div className="transition__box1">
                        <h1><span>Recent</span> Transition </h1>
                        <div className="transition__inner">
                            <div className="transi__inner__box">
                               <div className="tran__box__all transi__brand__color">
                                 <h4><span>Total  <i class="fab fa-bitcoin fa-2x"></i></span> Buy</h4>
                                <h4><img src={require('../../images/illustration-usa-flag_53876-18165.jpg')}/>{this.state.buyTotal.map(user => user.totalBuy)} <span>usd</span></h4>
                                 </div>
                               <div className="tran__box__all transi__brand__color_1">
                                 <h4><span>Total  <i class="fab fa-bitcoin fa-2x"></i> </span> Sell</h4>
                                 <h4><img src={require('../../images/illustration-usa-flag_53876-18165.jpg')}/> {this.state.sellTotal.map(user => user.totalSell)} <span>usd</span></h4>
                                </div>
                                 <div className="tran__box__all transi__brand__color">
                                 <h4><span>Last  <i class="fab fa-bitcoin fa-2x"></i></span> Buy</h4>
                                <h4><img src={require('../../images/illustration-usa-flag_53876-18165.jpg')}/> {this.state.buyTotal.map(user => user.lastBuy)} <span>usd</span></h4>
                               </div>
                               <div className="tran__box__all transi__brand__color_1">
                                 <h4><span>Last  <i class="fab fa-bitcoin fa-2x"></i> </span> Sell</h4>
                                 <h4><img src={require('../../images/illustration-usa-flag_53876-18165.jpg')}/> {this.state.sellTotal.map(user => user.lastSell)} <span>usd</span></h4>
                                </div>
                            </div>
                            <div className="transi__inner__box">
                              
                            </div>
                        </div>
                    </div>
              </div>
        </section>
     </div>
         );
    }
}
 
export default DashboardMain;