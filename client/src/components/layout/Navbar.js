import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth, logout }) => {
  const authLinksUser = (
    <ul>
      <li>
        <Link to="/about">
          <i className="fa fa-image" />{' '}
          <span className="hide-sm">About</span>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <i className="fa fa-vcard" />{' '}
          <span className="hide-sm">Contact</span>
        </Link>
      </li>
      <li>
        <Link to="/pricing">
          <i className="fa fa-fax" />{' '}
          <span className="hide-sm">Pricing</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fa fa-dashboard" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="/login">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const authLinksAdmin = (
    <ul>
      <li>
        <Link to="/contact_admin">
          <i className="fa fa-vcard" />{' '}
          <span className="hide-sm">Contact</span>
        </Link>
      </li>
      <li>
        <Link to="/fine_tuning">
          <i className="fa fa-sticky-note" />{' '}
          <span className="hide-sm">Fine-Tuning Data</span>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="/login">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/login">Sign In</Link>
      </li>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Ghost Writer
        </Link>
      </h1>
      {/* <Fragment>{auth.isAuthenticated ? authLinksUser : guestLinks}</Fragment> */}
      <Fragment>{auth.user?.isAdmin ? authLinksAdmin : auth.isAuthenticated ? authLinksUser : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
