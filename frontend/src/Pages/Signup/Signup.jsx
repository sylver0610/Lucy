import React, { useState } from 'react'
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import {FcGoogle} from 'react-icons/fc';
import {SlSocialVkontakte} from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';
import './Action.scss';
import * as Component from './Component';
const Signup = () => {
    const navigate = useNavigate()
    const createFormInput = (type,name) => {
        return(
            <div className="form__input">
                        <input type={type} placeholder=' ' className='input__info'/>
                        <label htmlFor="" className='label__input'> {name}</label>                        
            </div>
        )
    }
    const [isSignIn,setIsSignIn] = useState(false);
    return (
        <Component.Container>
       
           
            {/* <figure className="register__media">
                <img src="/assets/img/Logo.svg" alt="Lucy" className="logo" />
                <p>Join the platform to get more exciting features.</p>
                <img src="/assets/img/bg-signup.png" alt="" className='img'/>
            </figure> */}
            <Component.SignUpContainer signinIn={isSignIn}>
            <Component.Header>
                <Component.Icon onClick={()=>navigate('/')}>
                <IoChevronBackCircleOutline/>
                </Component.Icon>                
                <div>
                    
                    <span>English(US)</span>
                </div>
                </Component.Header>                
                <div className="container">
                    <div className="form-container">
                    <Component.Title>Create Account</Component.Title>                   
                    <Component.FormOptions className='register__options'>
                        <Component.Option>
                        <Component.Icon>
                        <FcGoogle/>
                        </Component.Icon>
                        Login With Google                        
                        </Component.Option>
                        <Component.Option>
                        <Component.Icon>
                        <i className='fa-brands fa-vk' style={{'color': "#4783eb",}}></i>
                        </Component.Icon>
                        Login With Facebook 
                        
                        </Component.Option>                   
                    </Component.FormOptions>                   
                    <Component.Label>-OR-</Component.Label>         
                    <Component.Form className="register__form">
                        {createFormInput('text','Username')}
                        {createFormInput('email','Email')}
                        {createFormInput('password','Password')}
                        <Component.Button className='btn btn--primary'>Create Account</Component.Button>
                        <Component.Extra>
                        <span>Already have an account?</span>                       
                        <span  style={{'color':'#4285F4'}} onClick={() => setIsSignIn(true)} className='cta-login'>Login Now </span>
                        </Component.Extra>                        
                    </Component.Form>         
                    
                    </div>
                    
                </div>
            </Component.SignUpContainer>

           

       
        <Component.SignInContainer signinIn={isSignIn}>
        <Component.Header>
                <Component.Icon onClick={()=>navigate('/')}>
                <IoChevronBackCircleOutline/>
                </Component.Icon>                
                <div>
                    
                    <span>English(US)</span>
                </div>
                </Component.Header>   
                <div className="container">
                    <div className="form-container"> 
                    <Component.Title>Sign in</Component.Title>
                    <Component.Form className="login__form">
                      
                        {createFormInput('email','Email')}
                        {createFormInput('password','Password')}
                       <Component.Anchor href='#'>Forgot your password?</Component.Anchor>
                       <Component.Button className='btn btn--primary'>Sign In</Component.Button>
                   </Component.Form>
                   <Component.Label>----------------OR-----------------</Component.Label>    
                   <Component.FormOptions className='register__options'>
                        <Component.Option>
                        <Component.Icon>
                        <FcGoogle/>
                        </Component.Icon>
                        Login With Google                        
                        </Component.Option>
                        <Component.Option>
                        <Component.Icon>
                        <i className='fa-brands fa-vk' style={{'color': "#4783eb",}}></i>
                        </Component.Icon>
                        Login With Facebook 
                        
                        </Component.Option>     
                        </Component.FormOptions>    
                        <Component.Extra>
                        <span>Don't you have an account?</span>                       
                        <span  style={{'color':'#4285F4'}} onClick={() => setIsSignIn(false)} className='cta-login'>Sign Up </span>
                        </Component.Extra>       
                    </div>
                
                    </div>    
                  
              </Component.SignInContainer>        
        <Component.OverlayContainer signinIn={isSignIn}>
                  <Component.Overlay signinIn={isSignIn}>

                  <Component.LeftOverlayPanel signinIn={isSignIn}>
                  <img src="/assets/img/bg-signup.png" alt="" className='img'/>
                  <Component.Title>Hello, Friend!</Component.Title>

<Component.Paragraph>
    Enter Your personal details and start journey with us
</Component.Paragraph>
                      
                      </Component.LeftOverlayPanel>

                      <Component.RightOverlayPanel signinIn={isSignIn}>
                      <Component.Title>Welcome Back!</Component.Title>
                      
                      <Component.Paragraph>
                          To keep connected with us please login with your personal info
                      </Component.Paragraph>
                        
                             
                      </Component.RightOverlayPanel>
  
                  </Component.Overlay>
        </Component.OverlayContainer>
        </Component.Container>
    )
}

export default Signup