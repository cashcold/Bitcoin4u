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
                              <Route path='/digitalcurrency' exact component={DigitalCurrency}/> 
                              <Route path='/typedigitalcurrency' exact component={TypeDigitalCurrency}/> 
                              <Route path='/getcurrency' exact component={GetCurrency}/> 
                              <Route path='/whyRegister' exact component={WhyRegister}/> 
                              <Route path='/howtobuy' exact component={HowToBuy}/> 
                           </Switch>
                        </div>
                        <Footer/>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;