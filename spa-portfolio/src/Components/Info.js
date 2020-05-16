import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

const Info = (props) => {
  return (
    <div>
      <div className="col-10 col-lg-4 mx-auto mb-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={props.img}
            alt={props.headerTitle}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title text-uppercase">{props.headerTitle}</h3>
            <h5 className="card-title">{props.headerSubtitle}</h5>
            <p className="card-text">{props.headerText}</p>
            <Link
              to="/details"
              className="btn btn-outline-primary text-uppercase"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
