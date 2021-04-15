import React, { Component } from 'react';
import './style.css'
class RegisterMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='login__main'>
                <section className='login__section_1 login__section_1_register'>
                    <div className="login__box_1">
                        <h1><span>Sign</span> up</h1>
                        <h3>Create New Bitcoin4u Account</h3>
                        <div className="login__forms">
                            <div className='myForms'>
                                <input type='text' name='fullName' placeholder='Full Name'/>
                            </div>
                            <div className='myForms'>
                                <input type='email' name='email' placeholder='Email'/>
                            </div>
                            <div className='myForms'>
                                <input type='tel' name='phone' placeholder='Phone Number'/>
                            </div>
                            <div className='myForms'>
                                 <input type='password' name='password' placeholder='Password' required/>
                            </div>
                          
                        </div>
                        <div className="log__btn">
                             <div className='upfont'>
                                <p><input type='radio' name='checkbox' /> I agree with Terms and conditions</p>
                                <a href='' className='btn btn-warning' onClick={this.onSubmit}>CREATE ACCOUNT</a>
                             </div>
                        </div>
                    </div>
                </section>
                <section className='login_section_2'>
                    <img src={require('../../images/cryptocurrency-3305671_1920.jpg')}/>
                </section>
            </div>
         );
    }
}
 
export default RegisterMain;