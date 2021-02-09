import React, {useEffect} from 'react';
import {Header} from '../components/index';
import {Redirect} from 'react-router-dom';
import {ROUTES} from "../constants/routes";
import {Button} from 'react-bootstrap';

export const Profile = ({user, handleLogout}) => {

  return(
    <div className="profile">
      <Header />
      {
        !user ? 
        <Redirect from={ROUTES.PROFILE} to={ROUTES.LOGIN} /> :
        (
          <div className="container">
            <div className="profile-body">
              <h2>Welcome</h2>
              <Button variant="success" onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        )
      }
    </div>
  );
}