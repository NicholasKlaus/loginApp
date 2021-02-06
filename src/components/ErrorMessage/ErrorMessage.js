import React from "react";
import "./errorMessage.css";
import {Link} from 'react-router-dom';
import {ROUTES} from "../../constants/routes";
import {Alert} from 'react-bootstrap';

export const ErrorMessage = () => (
  
  <Alert variant='danger' className="e-message__wrap">
    <h2>Error! Something went wrong!</h2>
    <span>Please click <Link to={ROUTES.HOME}>here</Link> to return to the Home</span>
  </Alert>
  
)