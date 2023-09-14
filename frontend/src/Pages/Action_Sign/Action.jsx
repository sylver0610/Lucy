import React, { useState } from "react";
import { useFormik } from "formik";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Signup.scss";
import * as Yup from "yup";
import _ from "lodash";
import * as Component from "./Component";

import { postLogin, registerUser } from "../../Services/api.service";
import { toast } from "react-toastify";
const Action = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _ = require("lodash");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address!"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          "Password must be more 6 characters, at least one letter, one number!"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // console.log(values);
      registerUser("R3", values.email, values.password)
        .then((data) => {
          toast.success(data.message);
          resetForm({ values: "" });
          setIsSignIn(true);
        })
        .catch((data) => {
          toast.error(data.response.data.message);
          console.log("err: ", data.response.data.message);
        });
    },
  });

  const handleLogIn = () => {
    // console.log(`submit`)
    postLogin(email, password, dispatch, navigate);
  };

  const [isSignIn, setIsSignIn] = useState(
    location?.state?.isLogIn ? location?.state?.isLogIn : false
  );

  return (
    <Component.Container>
      {/* <figure className="register__media">
                <img src="/assets/img/Logo.svg" alt="Lucy" className="logo" />
                <p>Join the platform to get more exciting features.</p>
                <img src="/assets/img/bg-signup.png" alt="" className='img'/>
            </figure> */}
      <Component.SignUpContainer signinIn={isSignIn}>
        <Component.Header>
          <Component.Icon onClick={() => navigate("/")}>
            <IoChevronBackCircleOutline />
          </Component.Icon>
          <div>
            <span>English(US)</span>
          </div>
        </Component.Header>
        <div className="container">
          <div className="form-container">
            <Component.Title>Регистрация </Component.Title>
            {/* <Component.FormOptions className="register__options">
              <Component.Option>
                <Component.Icon>
                  <FcGoogle />
                </Component.Icon>
                Login With Google
              </Component.Option>
              <Component.Option>
                <Component.Icon>
                  <i
                    className="fa-brands fa-vk"
                    style={{ color: "#4783eb" }}
                  ></i>
                </Component.Icon>
                Login With Facebook
              </Component.Option>
            </Component.FormOptions>
            <Component.Label>-OR-</Component.Label> */}
            <Component.Form className="register__form">
              <div className="form__input">
                <input
                  type="email"
                  placeholder=" "
                  className={`input__info ${
                    formik.errors.email && formik.touched.email
                      ? "info__error"
                      : ""
                  }`}
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <label htmlFor="" className="label__input">
                  {" "}
                  Email
                </label>
                {formik.errors.email && formik.touched.email && (
                  <span>
                    <RiErrorWarningLine />
                  </span>
                )}
                {formik.errors.email && formik.touched.email && (
                  <p className="input__error"> {formik.errors.email}</p>
                )}
              </div>
              <div className="form__input">
                <input
                  type="password"
                  placeholder=" "
                  className={`input__info ${
                    formik.errors.password && formik.touched.password
                      ? "info__error"
                      : ""
                  }`}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <label htmlFor="" className="label__input">
                  {" "}
                  Пароль
                </label>
                {formik.errors.password && formik.touched.password && (
                  <span>
                    <RiErrorWarningLine />
                  </span>
                )}
                {formik.errors.password && formik.touched.password && (
                  <p className="input__error"> {formik.errors.password}</p>
                )}
              </div>
              <div className="form__input">
                <input
                  type="password"
                  placeholder=" "
                  className={`input__info ${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "info__error"
                      : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                <label htmlFor="" className="label__input">
                  {" "}
                  Подтверждение пароля
                </label>
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <span>
                      <RiErrorWarningLine />
                    </span>
                  )}
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <p className="input__error">
                      {" "}
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>

              {/* {createFormInput('text','Username')} */}
              {/* {createFormInput('email','Email')}
                    {createFormInput('password','Password')}
                    {createFormInput('password','Confirm Password')} */}
              <Component.Button
                type="submit"
                className="btn-a btn--primary"
                onClick={formik.handleSubmit}
              >
                Зарегистрироваться
              </Component.Button>
              <Component.Extra>
                <span>У вас уже есть аккаунт?</span>
                <span
                  style={{ color: "#4285F4" }}
                  onClick={() => setIsSignIn(true)}
                  className="cta-login"
                >
                  Войти сейчас{" "}
                </span>
              </Component.Extra>
            </Component.Form>
          </div>
        </div>
      </Component.SignUpContainer>

      <Component.SignInContainer signinIn={isSignIn}>
        <Component.Header>
          <Component.Icon onClick={() => navigate("/")}>
            <IoChevronBackCircleOutline />
          </Component.Icon>
          <div>
            <span>English(US)</span>
          </div>
        </Component.Header>
        <div className="container">
          <div className="form-container">
            <Component.Title>Вход</Component.Title>
            <Component.Form className="login__form">
              <div className="form__input">
                <input
                  type="email"
                  placeholder=" "
                  className={`input__info login-email`}
                  id="login-email"
                  name="login-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="" className="label__input">
                  {" "}
                  Email
                </label>
              </div>
              <div className="form__input">
                <input
                  type="password"
                  placeholder=" "
                  className={`input__info login-password`}
                  id="login-password"
                  name="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="" className="label__input">
                  {" "}
                  Пароль
                </label>
              </div>
              {/* {createFormForLogIn('email','Email')} */}
              {/* {createFormForLogIn('password','Password')} */}
              <Component.Anchor href="#">Забыли пароль?</Component.Anchor>
              <Component.Button
                className="btn-a btn--primary"
                onClick={() => handleLogIn()}
              >
                Войти
              </Component.Button>
            </Component.Form>
            {/* <Component.Label>
              ----------------OR-----------------
            </Component.Label>
            <Component.FormOptions className="register__options">
              <Component.Option>
                <Component.Icon>
                  <FcGoogle />
                </Component.Icon>
                Login With Google
              </Component.Option>
              <Component.Option>
                <Component.Icon>
                  <i
                    className="fa-brands fa-vk"
                    style={{ color: "#4783eb" }}
                  ></i>
                </Component.Icon>
                Login With Facebook
              </Component.Option>
            </Component.FormOptions> */}
            <Component.Extra>
              <span>У вас нет аккаунта?</span>
              <span
                style={{ color: "#4285F4" }}
                onClick={() => setIsSignIn(false)}
                className="cta-login"
              >
                Зарегистрироваться{" "}
              </span>
            </Component.Extra>
          </div>
        </div>
      </Component.SignInContainer>

      <Component.OverlayContainer signinIn={isSignIn}>
        <Component.Overlay signinIn={isSignIn}>
          <Component.LeftOverlayPanel signinIn={isSignIn}>
            <img src="/assets/img/bg-signup.png" alt="" className="img" />
            <Component.Title>Привет!</Component.Title>

            <Component.Paragraph>
              Введите свои личные данные и начните путешествие с нами
            </Component.Paragraph>
          </Component.LeftOverlayPanel>

          <Component.RightOverlayPanel signinIn={isSignIn}>
            <Component.Title>Добро пожаловать!</Component.Title>

            <Component.Paragraph>
              Чтобы оставаться на связи с нами, пожалуйста, войдите под своей
              личной информацией
            </Component.Paragraph>
          </Component.RightOverlayPanel>
        </Component.Overlay>
      </Component.OverlayContainer>
    </Component.Container>
  );
};

export default Action;
