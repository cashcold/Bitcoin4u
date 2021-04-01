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
                           </Switch>
                        </div>
                        <Footer/>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;