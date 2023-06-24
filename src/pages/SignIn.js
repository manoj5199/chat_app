import React from "react";
import "./css/SignIn.css";
import signinImg from "../images/pexels-pixabay-461064.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin_container">
      <div className="signin_image_container">
        <img className="signin_image" src={signinImg} alt="SIGn IN" />
      </div>
      <div className="signin_form_container">
        <div className="signin_input_container">
          <label htmlFor="userName">User name</label>
          <input id="userName" type="text"></input>
        </div>
        <div className="signin_input_container">
          <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
        </div>
        <div className="signin_input_container">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input id="checkbox" type="checkbox" title="remember"></input>
            <span>Remember me</span>
          </div>
          <Link to={"/forgot"}>Forgot password?</Link>
        </div>
        <div>
          <button>SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
