import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ProductsPricingPage extends Component {
  head() {
    return (
      <Helmet>
        <title>Bnchmrk Employee Benefits Benchmarking</title>
        <meta property="og:title" content="Features" />
      </Helmet>
    );
  }

  render() {
    const products = [
      {
        license: "Single Report",
        amount: "299",
        basis: "report",
        description: "No annual contract required.",
        features: ["Single Report", "Single Employer", "Single User"],
      },
      {
        license: "Standard License",
        amount: "829",
        basis: "month",
        description: "Annual contract is required.",
        features: ["Unlimited Reporting", "100 Employers", "25 Users"],
      },
      {
        license: "Premium License",
        amount: "1459",
        basis: "month",
        description: "Annual contract is required.",
        features: [
          "Unlimited Reporting",
          "Unlimited Employers",
          "100 Users",
          "Book of Business Reporting",
        ],
      },
      {
        license: "API License",
        amount: "2599",
        basis: "month",
        description: "Annual contract is required.",
        features: [
          "Unlimited Reporting",
          "Unlimited Employers",
          "250 Users",
          "Book of Business Reporting",
          "API Access",
        ],
      },
    ];

    return (
      <div className="valign-wrapper" style={{ marginTop: "200" }}>
        <div className="container">
          {this.head()}
          <div className="row">
            <div className="col s12 l6">
              {products.map((product, i) => {
                return (
                  <div className="col s12 l6" key={i}>
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">{product.license}</span>
                        <h6>{`${product.amount}/${product.basis}`}</h6>
                        <p>{product.description}</p>
                      </div>
                      <div className="card-action">
                        {product.features.map((feature, i) => (
                          <span key={i}>{feature}, </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col s12 l6">
              <h3>Products & Pricing</h3>
              <p>
                Whether your benchmarking needs are large or small, we have the
                right plan for you. Single reports are ideal for first time
                users, while unlimited licenses are designed for firms looking
                to integrate benchmarking into their consulting models.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default { component: ProductsPricingPage };
