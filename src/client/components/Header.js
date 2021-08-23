import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../images/bnchmrk_white.png";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div className="navbar-fixed">
      <nav className="blue darken-3">
        <div className="container nav-wrapper">
          <Link to="/" className="brand-logo">
            <img src={logo} width="180" style={{ paddingTop: "15" }} />
          </Link>
          <ul className="right">
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/products-pricing">Products & Pricing</Link>
            </li>
            <li>
              <Link to="/graph">Graph</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/admins">Admins</Link>
            </li>
            <li>{authButton}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
