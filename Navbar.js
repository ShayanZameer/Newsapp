import React, { Component } from "react";


import { Link } from "react-router-dom";

export class Navbar extends Component {
  

  render() {
    return (
      <div>
        <nav style={{backgroundColor:'grey'}} className="navbar navbar-expand-lg  fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <strong>NewsApp</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
        

                <li>
                  <Link className="nav-link" to="/Business">
                    business
                  </Link>
              
                </li>
                <li>
                  <Link className="nav-link" to="/General">
                    general
                  </Link>{" "}
                </li>
                <li>
                  <Link className="nav-link" to="/Health">
                    health
                  </Link>{" "}
                </li>
                <li>
                  <Link className="nav-link" to ="/Science">
                    science
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Sports">
                    sports
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Technology">
                    technology
                  </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/Entertainment">
                      entertainment
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
