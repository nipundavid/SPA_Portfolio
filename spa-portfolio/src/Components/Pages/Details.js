import React, { useContext } from "react";
import { InfoContext } from "../Context";
import styled from "styled-components";
import Reviews from "../Reviews";

const Details = () => {
  const [data, setData] = useContext(InfoContext);
  return (
    <React.Fragment>
      <HeaderDetails className="container-fluid align-items-center">
        <h1 className="display-1 font-weight-bold">{data.dInfo.headerTitle}</h1>
        <h4 className="display-5"> {data.dInfo.headerSubTitle}</h4>
        <p>{data.dInfo.headerText}</p>
        {/* Social Icons */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-2">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-reddit"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-facebook-messenger"></i>
            </div>
          </div>
        </div>
      </HeaderDetails>

      {/* Nav Link */}
      <div className="container">
        <ul className="nav nav-tabs">
          {/* About Place Link */}
          <li className="nav-item">
            <a
              href="#aboutplace"
              className="nav-link active"
              role="tab"
              data-toggle="tab"
            >
              About Place
            </a>
          </li>
          {/* Reviews Link */}
          <li className="nav-item">
            <a
              href="#reviews"
              className="nav-link"
              role="tab"
              data-toggle="tab"
            >
              Reviews
            </a>
          </li>
          {/* MapLink */}
          <li className="nav-item">
            <a href="#map" className="nav-link" role="tab" data-toggle="tab">
              Map
            </a>
          </li>
        </ul>
        {/* Tab Pane */}
        <div className="tab-content mb-5">
          {/* About Place Tab */}
          <div
            id="aboutplace"
            className="tab-pane in active text-center mt-5"
            role="tabpanel"
          >
            <h2 className="mb-3">{data.dInfo.title}</h2>
            <p>{data.dInfo.description}</p>
            <img
              src={data.dInfo.img}
              alt={data.dInfo.title}
              className="img-thumbnail img-fluild"
            />
          </div>

          {/* Reviews Pane */}
          <div id="reviews" className="tab-pane" role="tabpanel">
            <Reviews />
          </div>
          {/* Map Pane */}
          <div id="map" className="tab-pane" role="tabpanel">
            <iframe
              src={data.dInfo.maps}
              style={{
                border: "0",
                height: "28.125rem",
                width: "100%",
                frameborder: "0",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }
  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
