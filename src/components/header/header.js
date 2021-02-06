import React from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../constants/routes";
import "./header.css";

export const Header = () => {

  return(
    <div className="header">
      <div className="container">
        <div className="h-wrap">
          <h1>App</h1>
          <div className="menu-list">
            <NavLink 
              to={ROUTES.HOME} 
              className="h-link"
              activeStyle={{
                color: " #fff",
              }}
            >
              Home
            </NavLink>
            <NavLink 
              to={ROUTES.NEWS} 
              className="h-link"
              activeStyle={{
                color: " #fff",
              }}
            >
              News
            </NavLink>
            <NavLink 
              to={ROUTES.PROFILE} 
              className="h-link"
              activeStyle={{
                color: " #fff",
              }}
            >
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}