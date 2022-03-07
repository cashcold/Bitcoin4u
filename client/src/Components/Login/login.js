import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


class LoginMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }

         this.handleChange = this.handleChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    componentDidMount(){

    }

    onSubmit = (event)=>{
        event.preventDefault()
        const userLogin = {
            email: this.state.email,
            password: this.state.password
        }

        if(!userLogin.email){
            toast.warning('Enter Email Address')
            return false;
        }
        if(!userLogin.password){
            toast.warning('Enter Password')
            return false;
        }

        axios.post( "/users/login",userLogin).then(res => {  
            sessionStorage.setItem('x-access-token',JSON.stringify(res.data))
            return res.data;
        }).then(res => {toast.success("Login Successful !", setTimeout(()=>{
            toast.success("LOADING ACCOUNT") 
        },4000),{
            
            });}).then(res => window.location="/dashboard" ).catch(err => {toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT
         });
        });
    }
    render() { 
        return ( 
            <div className='login__main'>
                <section className='login__section_1'>
                <ToastContainer/>
                    <div className="login__box_1">
                        <h1><span>Sign</span> in</h1>
                        <h3>with your Bitcoin4u Account</h3>
                        <div className="login__forms">
                            <div className='myForms'>
                                <input type='email' name='name' placeholder='Email'  name='email' placeholder='Email' onChange={this.handleChange('email')}/>
                            </div>
                            <div className='myForms'>
                                 <input type='password' name='password' placeholder='Password'  onChange={this.handleChange('password')} />
                            </div>
                        </div>
                        <div className="log__btn">
                            <a href='' className='btn btn-warning' onClick={this.onSubmit}>Login</a>
                            <a href='/forgotpassword' className='btn btn-danger'>Forgot password</a>
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