import React, { Component } from "react";
import { Helmet } from "react-helmet";

class FeaturesPage extends Component {
  head() {
    return (
      <Helmet>
        <title>Bnchmrk Employee Benefits Benchmarking</title>
        <meta property="og:title" content="Features" />
      </Helmet>
    );
  }

  render() {
    const features = [
      {
        title: "Real-Time Data",
        description:
          "Data is continually updated via a proprietary national survey and data-sharing agreements with brokers and consultants.",
        icon: "access_time",
      },
      {
        title: "Pinpoint Accuracy",
        description:
          "Bnchmrk's proprietary software, BenIQ, validates data at the point of entry to ensure accurate reporting results.",
        icon: "high_quality",
      },
      {
        title: "Custom Branding",
        description:
          "Add your company's branding and seamlessly integrate benchmarking reports into your consulting model.",
        icon: "photo_library",
      },
      {
        title: "Dedicated Support",
        description:
          "Customer service team staffed by data scientists and benefit analysts who are vested in their clients’ success.",
        icon: "help_outline",
      },
      {
        title: "No Conflict of Interest",
        description:
          "Bnchmrk works as an extension of your consulting team, not as a competitor or insurance carrier.",
        icon: "thumb_up",
      },
      {
        title: "Cost-Effective Solution",
        description:
          "Competitive pricing and minimal data entry requirements result in the most practical choice for benefits benchmarking.",
        icon: "monetization_on",
      },
    ];

    return (
      <div className="valign-wrapper" style={{ marginTop: "200" }}>
        <div className="container">
          {this.head()}
          <div className="row">
            <div className="col s12">
              <h3>A New Approach to Benefits Benchmarking</h3>
            </div>
            {features.map((feature, i) => {
              return (
                <div className="col s12 l4" key={i}>
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">
                        <div className="row">
                          <div className="col">
                            <i className="material-icons">{feature.icon}</i>
                          </div>
                          {feature.title}
                        </div>
                      </span>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default { component: FeaturesPage };
