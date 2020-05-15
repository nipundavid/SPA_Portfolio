import React from "react";
import logo from "../logo.svg";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ width: "35px" }}></img>
        </a>
        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link text-white  ml-5" href="#">
              &nbsp;<i class="fas fa-home"></i> Home{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white  ml-5" href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white  ml-5" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
