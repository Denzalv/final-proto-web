import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import googleLogo from "../../assets/images/google/logo.png";
import imageSignUp from "../../assets/images/signup/signup-img.jpg";
import "./signup.css";

const SignupComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { createUser, signInWithGoogle, user } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password, name);
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
      <div id="signup" className="card">
        <section className="signup-text">
          <p className="first">
            {" "}
            Already have an account?{" "}
            <span>
              <Link to="/signin" className="link">
                Sign In
              </Link>
            </span>
          </p>

          <h1> Create your Account </h1>
          <form onSubmit={handleSubmit}>
            <p> Name </p>
            <div className="box-signup">
              <input
                placeholder="Name"
                type="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p> Email </p>
            <div className="box-signup">
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p> Password </p>
            <div className="box-signup">
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <input type="checkbox" id="c1" value="cc" />
              <label htmlFor="c1">
                By signing up, you agree to our{" "}
                <span>privacy policy, user terms </span> and{" "}
                <span>merchant agreement</span>
              </label>
            </div>

            <button type="submit" className="btn-signup">
              Sign Up
            </button>
          </form>

          <p> Or </p>
          <div className="actions">
            <button className="btn btn-google" onClick={handleGoogleSignIn}>
              <img className="icon" src={googleLogo} alt="googlelogo" />
              <span className="icon-text">Sign in with Google </span>
            </button>
          </div>
        </section>
        <section className="signup-img">
          <img src={imageSignUp} alt="logosignup" />
        </section>
      </div>
    </>
  );
};

export default SignupComp;
