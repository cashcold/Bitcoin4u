import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restartLinkPassword: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const saveRestartLinkPassword = {
            email: this.state.restartLinkPassword,
        };

        // Validate email
        if (!saveRestartLinkPassword.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(saveRestartLinkPassword.email)) {
            return toast.warning("Enter a valid email address", { position: 'top-center' });
        }

        axios.post("/users/forgotpassword", saveRestartLinkPassword)
            .then(res => {
                toast.success("Password reset link sent to your email");
            })
            .catch(err => {
                const errorMessage = err.response?.data || "Failed to send reset link";
                toast.error(errorMessage);
            });
    };

    render() {
        return (
            <div className='passwordForgot'>
                <ToastContainer />
                <div className='mainPassword'>
                    <h3 className='animate__animated animate__zoomInRight animate__slower'>
                        <span>RECOVER</span> YOUR PASSWORD <span>VIA</span> INBOX
                    </h3>
                    <div className='recoverInput animate__animated animate__zoomInLeft animate__slower'>
                        <input
                            placeholder='Email'
                            onChange={this.handleChange("restartLinkPassword")}
                            name='restartLinkPassword'
                        />
                    </div>
                    <button className='btn btn-success' onClick={this.onSubmit}>
                        Recover Password
                    </button>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;