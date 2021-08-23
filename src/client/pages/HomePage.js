import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import laptop from "../../images/laptop.png";

class HomePage extends Component {
  head() {
    return (
      <Helmet>
        <title>Bnchmrk Employee Benefits Benchmarking</title>
        <meta property="og:title" content="Home Page" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="valign-wrapper" style={{ marginTop: "200" }}>
        <div className="container">
          {this.head()}
          <div className="row">
            <div className="col s12">
              <h1>
                Powerful Benchmarking Analytics for the Employee Benefits
                Industry
              </h1>
            </div>
            <div className="col s12 l6">
              <p className="flow-text">
                Get access to benchmarking data covering over 6,500 employers
                nationwide. Deliver benchmarking reports targeted to any
                combination of industry, region, and size. Make smarter renewal
                recommendations for all major employee benefits including:
                Medical, Rx, Dental, Vision, Life, STD, & LTD.
              </p>
              <Link
                to="/"
                className="blue darken-3 btn-large"
                style={{ marginRight: "10" }}
              >
                Learn More
              </Link>
              <Link to="/" className="blue darken-3 btn-large">
                Get a Sample Report
              </Link>
            </div>
            <div className="col s12 l6">
              <img src={laptop} width="100%" style={{ marginTop: "50" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default { component: HomePage };
