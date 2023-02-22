import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <video autoPlay muted loop id="video_total">
        <source src="/assets/videos/back.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Ghost Writer</h1>
          <p className="lead">
             Create a lyric song like a famous artist using AI technology.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
