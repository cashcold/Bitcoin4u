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
                        <div className="log__btn">
                            <a href='' className='btn btn-warning'>Login</a>
                            <a href='' className='btn btn-danger'>Forgot password</a>
                        </div>
                    </div>
                </section>
                <section className='login_section_2'>
                    <img src={require('../../images/thought-catalog-Xeo_7HSwYsA-unsplash.jpg')}/>
                </section>
            </div>
         );
    }
}
 
export default LoginMain;