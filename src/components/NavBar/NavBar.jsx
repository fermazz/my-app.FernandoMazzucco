import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Zapas
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <Link to="/" className="nav-link active">
                <li className="nav-item">
                  Home
                  <span className="visually-hidden">(current)</span>
                </li>
              </Link>

              <Link to="/categoria/running" className="nav-link active">
                <li className="nav-item">Running</li>
              </Link>

              <Link to="/categoria/allday" className="nav-link active">
                <li className="nav-item">All Day</li>
              </Link>

              <Link to="/" className="nav-link active">
                <li className="nav-item">About</li>
              </Link>
            </ul>
            <Link to="/cart" className="nav-link active">
              <CartWidget />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
