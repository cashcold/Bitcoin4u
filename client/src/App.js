import React, { Component } from 'react'; 
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import './App.css'
import HomeMain from './Components/Home/home';
import Footer from './Components/Footer/footer';
import AboutMain from './Components/About-us/about';
import FAQ_Main from './Components/Faq\'s/faq\'s';
import ContactMain from './Components/Contact-us/contact-us';
import DigitalCurrency from './Components/FAQS-Router/DigitalCurrency';
import TypeDigitalCurrency from './Components/FAQS-Router/typeDigital';
import GetCurrency from './Components/FAQS-Router/GetCurrency';
import WhyRegister from './Components/FAQS-Router/WhyRegister';
import HowToBuy from './Components/FAQS-Router/HowToBuy';
import DashboardMain from './Components/Dashboard/dashboard';
import LoginMain from './Components/Login/login';
import RegisterMain from './Components/Register/register';
import BuyMain from './Components/Buy/Buy/buy';
import ConfirmBuyMain from './Components/Buy/ConfirmBuy/confirmBuy';
import SellMain from './Components/Sell/Sell/sell';
import ConfirmSellMain from './Components/Sell/ConfirmSell/confirmSell';
import ForgotPassword from './Components/Password/forgotpassword/forgotpassword';
import ActivitPassword from './Components/Password/forgotpassword/Activepassword/activtpassword';
import Settings from './Components/EditProfile/editprofile';
import WatchNotificationMain from './Components/watchNotification/watchNotification';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className=' mainApp animate__animated animate__zoomIn animate__slowerss'>
                    {/* <div  className='google__id' id="google_translate_element"></div> */}
                        <Navbar/>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={HomeMain}/>  
                              <Route path='/about-us' exact component={AboutMain}/> 
                              <Route path='/FAQS' exact component={FAQ_Main}/> 
                              <Route path='/contact-us' exact component={ContactMain}/> 
                              <Route path='/dashboard' exact component={DashboardMain}/> 
                              <Route path='/login' exact component={LoginMain}/> 
                              <Route path='/register' exact component={RegisterMain}/> 
                              <Route path='/forgotpassword' exact component={ForgotPassword}/>
                             <Route path='/activitPassword/:token' exact component={ActivitPassword}/> 
                             <Route path='/editprofile' exact component={Settings}/> 
                              <Route path='/buy' exact component={BuyMain}/> 
                              <Route path='/confirmBuy' exact component={ConfirmBuyMain}/> 
                              <Route path='/sell' exact component={SellMain}/> 
                              <Route path='/confirmSell' exact component={ConfirmSellMain}/> 
                              <Route path='/digitalcurrency' exact component={DigitalCurrency}/> 
                              <Route path='/typedigitalcurrency' exact component={TypeDigitalCurrency}/> 
                              <Route path='/getcurrency' exact component={GetCurrency}/> 
                              <Route path='/whyRegister' exact component={WhyRegister}/> 
                              <Route path='/howtobuy' exact component={HowToBuy}/> 
                              <Route path='/watch_notification' exact component={WatchNotificationMain}/> 
                           </Switch>
                        </div>
                        <Footer/>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;