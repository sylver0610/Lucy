import React, { useState } from 'react'
import {useFormik} from 'formik'
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import {RiErrorWarningLine} from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signup.scss';
import * as Yup from 'yup'
import _ from 'lodash';
import * as Component from './Component';
const Action = () => {
    const location = useLocation();    
    const navigate = useNavigate()
    const _ = require('lodash');

    const formik = useFormik({
        initialValues:{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
            
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required").min(6,"Must be 6 characters or more!"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email address!"),
            password: Yup.string().required("Required")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,"Password must be more 6 characters, at least one letter, one number!"),
            confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"),null],"Password must match!")
        }),        
        onSubmit: values => {
            // console.log(values)
            
        }
    })
    const createFormForLogIn = (type,name) => {
        let value = _.lowerFirst(name.replace(/\s/g, ''));       
        return(
            <div className="form__input">
                        <input
                            type={type}
                            placeholder=' '
                            className={`input__info`}
                            id = {`${value}-login`}
                            name =  {`${value}-login`}
                        
                        />  
                        <label htmlFor="" className='label__input'> {(name)}</label> 
                    
            </div>
        )
    }

    const createFormInput = (type,name) => {
        let value = _.lowerFirst(name.replace(/\s/g, ''));       
        return(
            <div className="form__input">
                        <input
                            type={type}
                            placeholder=' '
                            className={`input__info ${formik.errors[value] ? 'info__error' : ''}`}
                            id = {value}
                            name =  {value}
                            value={formik.values.value}
                            onChange={formik.handleChange}
                        />  
                        <label htmlFor="" className='label__input'> {(name)}</label> 
                        {
                            formik.errors[value] && (<span><RiErrorWarningLine/></span>  )                            
                            
                        }
                        {

                        }
                       
                        {                           
                            formik.errors[value] && (
                                <p className='input__error'> {formik.errors[value]}</p>
                            )
                        }                 
            </div>
        )
    }
    const [isSignIn,setIsSignIn] = useState(location?.state?.isLogIn ? location?.state?.isLogIn : false);
    
    
    // console.log(formik.errors)
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
                        {createFormInput('password','Confirm Password')}
                        <Component.Button type='submit' className='btn btn--primary' onClick={formik.handleSubmit}>Create Account</Component.Button>
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
                    
                        {createFormForLogIn('email','Email')}
                        {createFormForLogIn('password','Password')}
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

export default Action