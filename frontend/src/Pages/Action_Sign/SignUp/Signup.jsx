import React from 'react'
import * as Component from '../Component';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {RiErrorWarningLine} from 'react-icons/ri';
const Signup = (props) => {
    const location = useLocation();    
    const navigate = useNavigate()
    const {isSignIn,setIsSignIn} = props;
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
        onSubmit : (values,{resetForm}) => {                // console.log('ok')
               
            // console.log(values);
            resetForm({values:''});            
            
        }
    })
    
  return (
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
                    <div className='form__input'>
                        <input
                            type= "text"
                            placeholder=' '
                            className={`input__info ${formik.errors.username && formik.touched.username ? 'info__error' : ''}`}
                            id = 'username'
                            name =  'username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />  
                        <label htmlFor="" className='label__input'> Username</label> 
                        {
                            formik.errors.username && formik.touched.username && (<span><RiErrorWarningLine/></span>  )                            
                            
                        }              
                        {                           
                            formik.errors.username && formik.touched.username && (
                                <p className='input__error'> {formik.errors.username}</p>
                            )
                        }                 
                    </div>
                    <div className='form__input'>
                        <input
                            type= "email"
                            placeholder=' '
                            className={`input__info ${formik.errors.email && formik.touched.email ? 'info__error' : ''}`}
                            id = 'email'
                            name =  'email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />  
                        <label htmlFor="" className='label__input'> Email</label> 
                        {
                            formik.errors.email && formik.touched.email && (<span><RiErrorWarningLine/></span>  )                            
                            
                        }              
                        {                           
                            formik.errors.email && formik.touched.email && (
                                <p className='input__error'> {formik.errors.email}</p>
                            )
                        }                 
                    </div>
                    <div className='form__input'>
                        <input
                            type= "password"
                            placeholder=' '
                            className={`input__info ${formik.errors.password && formik.touched.password ? 'info__error' : ''}`}
                            id = 'password'
                            name =  'password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />  
                        <label htmlFor="" className='label__input'> Password</label> 
                        {
                            formik.errors.password && formik.touched.password && (<span><RiErrorWarningLine/></span>  )                            
                            
                        }              
                        {                           
                            formik.errors.password && formik.touched.password && (
                                <p className='input__error'> {formik.errors.password}</p>
                            )
                        }                 
                    </div>
                    <div className='form__input'>
                        <input
                            type= "password"
                            placeholder=' '
                            className={`input__info ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'info__error' : ''}`}
                            id = 'confirmPassword'
                            name =  'confirmPassword'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />  
                        <label htmlFor="" className='label__input'> Confirm Password</label> 
                        {
                            formik.errors.confirmPassword && formik.touched.confirmPassword && (<span><RiErrorWarningLine/></span>  )                            
                            
                        }              
                        {                           
                            formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                <p className='input__error'> {formik.errors.confirmPassword}</p>
                            )
                        }                 
                    </div>
                
                    {/* {createFormInput('text','Username')} */}
                    {/* {createFormInput('email','Email')}
                    {createFormInput('password','Password')}
                    {createFormInput('password','Confirm Password')} */}
                    <Component.Button type='submit' className='btn btn--primary' onClick={formik.handleSubmit}>Create Account</Component.Button>
                    <Component.Extra>
                    <span>Already have an account?</span>                       
                    <span  style={{'color':'#4285F4'}} onClick={() => setIsSignIn(true)} className='cta-login'>Login Now </span>
                    </Component.Extra>                        
                </Component.Form>         
            
            </div>
            
        </div>
    </Component.SignUpContainer>
  )
}

export default Signup