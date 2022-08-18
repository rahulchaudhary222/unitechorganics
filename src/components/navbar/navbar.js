import React from "react";

import "./navbar.css";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //   const navigate = useNavigate();
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div
            //   onClick={() => navigate("/")}
            className="nav-title"
          >
            <h1 style={{ marginTop: "0", fontSize: "25px", color: "white" }}>
              Unitech Organics
            </h1>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a
            onClick={(e) => {
              e.preventDefault();
              //   navigate("/ContactUs");
            }}
            target="_blank"
          >
            Contact Us
          </a>
          {/* <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Stackoverflow
          </a> */}
          {/* <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            facebook
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            JsFiddle
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
