import React from 'react';
import {
  Form,
  Button,
} from 'react-bootstrap';
import {Redirect, NavLink} from 'react-router-dom';
import {ROUTES} from "../constants/routes";

export const Login = ({user, email, setEmail, password, setPassword, handleLogin, handleSignup, isLogin, setIsLogin, emailError, passwordError, hasAccount, setHasAccount}) => {

  return(
    <div className="login">
     {
       user ?
       <Redirect from={ROUTES.LOGIN} to={ROUTES.PROFILE} /> 
       :(
          <div className="container">
            <div className="wrapper">
              <NavLink
                to={ROUTES.HOME}
                activeStyle={{
                 color: "green"
                }}
              >
                Back to Home
              </NavLink>
            </div>
            <Form className="login-form">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  required
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <Form.Text className="text-muted">
                  {emailError}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted">
                  {passwordError}
                </Form.Text>
              </Form.Group>
              <div className="btn-container">
                {
                  hasAccount ? (
                    <>
                      <Button variant="primary" onClick={handleLogin}>
                        Sign In
                      </Button>
                      <p>Dont have an account ?
                        <span className="switch-link" onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <Button variant="primary" onClick={handleSignup}>
                        Sign Up
                      </Button>
                      <p>Have an account ?
                        <span className="switch-link" onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                      </p>
                    </>
                  )}
              </div>
            </Form>
          </div>
       )
     }
    </div>
  );
}