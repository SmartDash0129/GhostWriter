import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    if(user) {
      if(user.isAdmin) {
        return <Navigate to="/contact_admin" />;
      }
      else
        return <Navigate to="/dashboard" />;
    }
  }

  return (
    <section className="container-small">
      <h1 className="large text-primary text-center">Sign Up</h1>
      <p className="lead text-center">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <div className="lead text-primary b">Name :</div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <div className="lead text-primary b">Email :</div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <div className="lead text-primary b">Password :</div>          
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <div className="lead text-primary b">Confirm Password :</div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <input type="submit" className="btn btn-success" value="Register" />
        </div>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login" className="b">Sign In</Link>
      </p>
      <br />
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { setAlert, register })(Register);
