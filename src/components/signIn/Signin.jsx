import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import googleLogo from "../../assets/images/google/logo.png";
import imagesignin from "../../assets/images/signin/signin-img.jpg";
import "./signin.css";

const SigninComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signInWithGoogle, user, signIn, forgotPassword } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      // navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/main");
    }
  }, [user]);

  return (
    <>
      <div id="signin" className="card">
        <section className="signin-text">
          <p className="first">
            {" "}
            Don't have any account?{" "}
            <span>
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </span>
          </p>
          <h1> Login </h1>
          <form onSubmit={handleSubmit}>
            <p> Email </p>
            <div className="box-signin">
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p> Password </p>
            <div className="box-signin">
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-signin">
              Sign In
            </button>
          </form>

          <div>
            <span>
              <p className="forget">Forgot Password?</p>
            </span>
          </div>
          <p> Or </p>

          <div className="actions">
            <button className="btn btn-google" onClick={handleGoogleSignIn}>
              <img className="icon" src={googleLogo} alt="googlelogo" />
              <span className="icon-text">Sign in with Google </span>
            </button>
          </div>
        </section>
        <section className="signin-img">
          <img src={imagesignin} alt="signin" />
        </section>
      </div>
    </>
  );
};

export default SigninComp;
