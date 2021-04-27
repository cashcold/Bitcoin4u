import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id: '',
            full_name: '',
            password: '',
            confirmPassword: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange =input => (event)=>{ 
        event.preventDefault()
        this.setState({[input]:event.target.value })
    }
    componentDidMount(){
        
       
        
        const user_id =  sessionStorage.getItem('user_id')
        const phone =  sessionStorage.getItem('phone')
        const full_name = sessionStorage.getItem('full_name')
        const email  = sessionStorage.getItem('email')

        this.setState({
            user_id,
            full_name,
            email,
            phone,


        })
    }
    

    onSubmit = ()=>{
        const confirmPassword = this.state.confirmPassword
        const EditProfil = {
            full_name: this.state.full_name,
            password: this.state.password,
            phone: this.state.phone,

        }

        if(EditProfil.password != confirmPassword){
            {toast.warning('Password Do Not Match')}
            return false;
        }
        console.log(EditProfil)
        console.log(this.state.user_id)
        axios.post( `http://localhost:8000/users/updateprofile/${this.state.user_id}`,EditProfil).then(res => { 
            sessionStorage.setItem('RefreshToken',JSON.stringify(res.data))
            return res.data;
        }).then(toast.success(" Update Successful")).then( setTimeout(()=>{
            window.location ="/dashboard"
        },5000)).catch(err => {toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
    });
    }
    render() { 
        return ( 
            <div className='mainSettings'>
                <section className='edit__section__1'>
                            
                    <div className='settingNow'>
                        <h1><span>Edit</span> Profile</h1>
                        <ToastContainer/>
                        <hr/>
                        <div className='settings'>
                            <p>Your Full Name:</p>
                            <p><input name='full_name'  onChange={this.handleChange('full_name')} placeholder={this.state.full_name}/></p>
                        </div>
                        <hr/>
                        <div className='settings'>
                            <p>New Password:</p>
                            <p><input name='password' onChange={this.handleChange('password')}/></p>
                        </div>
                        <hr/>
                        <div className='settings'>
                            <p>Retype Password:</p>
                            <p><input name='confirmPassword' onChange={this.handleChange('confirmPassword')}/></p>
                        </div>
                        <hr/>
                        <div className='settings'>
                            <p>Your E-mail address:</p>
                            <p><input placeholder={this.state.email}/></p>
                        </div>
                        <div className='settings'>
                            <p>Phone Number:</p>
                            <p><input name='tel' onChange={this.handleChange('phone')}  placeholder={this.state.phone}/></p>
                        </div>
                    </div>
                    <button className='btn btn-warning btnData' onClick={this.onSubmit}>CHANGE ACCOUNT DATA</button>
                </section>
            </div>
         );
    }
}
 
export default Settings;