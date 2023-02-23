import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ( {auth: { user }} ) => {
  return (
    <section className="container">
      <h1 className="large text-primary text-center">Dashboard</h1>
      <p className="small">Welcome to <span className="lead text-primary b">{user.name}</span>!</p>
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
