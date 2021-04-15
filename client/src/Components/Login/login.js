import React, { Component } from 'react';
import './style.css'
class LoginMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='login__main'>
                <section className='login__section_1'>
                    <div className="login__box_1">
                        <h1><span>Sign</span> in</h1>
                        <h3>with your Bitcoin4u Account</h3>
                        <div className="login__forms">
                            <div className='myForms'>
                                <input type='email' name='name' placeholder='Email'/>
                            </div>
                            <div className='myForms'>
                                 <input type='password' name='password' placeholder='Password' required/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='login_section_2'>
                    <img src={require('../../images/undraw_nakamoto_2iv6.svg')}/>
                </section>
            </div>
         );
    }
}
 
export default LoginMain;