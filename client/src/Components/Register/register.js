import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

class RegisterMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full_name: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            ip_address: '',
            checkBox: false,
            date: '',
            referral: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = input => event => {
        const value = input === 'checkBox' ? event.target.checked : event.target.value;
        this.setState({ [input]: value });
    };

    componentDidMount() {
        const referral = localStorage.getItem('reffer');
        this.setState({ referral });

        const DateTime = new Date().toString();
        this.setState({ date: DateTime });

        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(data => this.setState({ ip_address: data.ip }));
    }

    onSubmit = event => { 
        event.preventDefault();
        const SaveNewUser = {
            full_name: this.state.full_name,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            referral: this.state.referral,
            ip_address: this.state.ip_address,
            checkBox: this.state.checkBox,
            confirm_password: this.state.confirm_password,
            date: this.state.date,
        };

        if (SaveNewUser.full_name.length < 6) {
            toast.warn("Full Name must be at least 6 characters");
            return false;
        }

        if (SaveNewUser.password.length < 6) {
            toast.warn("Password must be at least 6 characters");
            return false;
        }

        if (!SaveNewUser.full_name || !SaveNewUser.phone || !SaveNewUser.password || !SaveNewUser.confirm_password || !SaveNewUser.email) {
            toast.error("Please fill all fields");
            return false;
        }

        if (SaveNewUser.password !== SaveNewUser.confirm_password) {
            toast.warn("Passwords do not match");
            return false;
        }

        if (!SaveNewUser.checkBox) {
            toast.warn("Please agree with Terms and Conditions");
            return false;
        }

        axios.post("/users/register", SaveNewUser)
            .then(res => {
                toast.success("Register Successful");
                setTimeout(() => {
                    window.location = "/login";
                }, 5000);
            })
            .catch(err => {
                const errorMessage = err.response?.data || "Registration failed";
                toast.error(errorMessage);
            });
    };

    render() { 
        return ( 
            <div className='login__main'>
                <section className='login__section_1 login__section_1_register'>
                    <ToastContainer />
                    <div className="login__box_1">
                        <h1><span>Sign</span> up</h1>
                        <h3>Create New Bitcoin4u Account</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="login__forms">
                                <div className='myForms'>
                                    <input type='text' name='fullName' placeholder='User Name' onChange={this.handleChange('full_name')} />
                                </div>
                                <div className='myForms'>
                                    <input type='email' name='email' placeholder='Email' onChange={this.handleChange('email')} />
                                </div>
                                <div className='myForms'>
                                    <input type='tel' name='phone' placeholder='Phone Number' onChange={this.handleChange('phone')} />
                                </div>
                                <div className='myForms'>
                                    <input type='password' name='password' placeholder='Password' onChange={this.handleChange('password')} />
                                </div>
                                <div className='myForms'>
                                    <input type='password' name='confirm_password' placeholder='Confirm Password' onChange={this.handleChange('confirm_password')} />
                                </div>
                            </div>
                            <div className="log__btn">
                                <div className='upfont'>
                                    <p>Referral:<br /> {this.state.referral}</p>
                                    <p>
                                        <input type='checkbox' name='checkbox' onChange={this.handleChange('checkBox')} /> I agree with Terms and Conditions
                                    </p>
                                    <button type="submit" className='btn btn-warning'>CREATE ACCOUNT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='login_section_2'>
                    <img src={require('../../images/cryptocurrency-3305671_1920.jpg')} alt="Background" />
                </section>
            </div>
        );
    }
}

export default RegisterMain;