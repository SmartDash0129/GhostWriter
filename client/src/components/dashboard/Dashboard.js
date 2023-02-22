import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ( {auth: { user }} ) => {
  return (
    <section className="container">
      <h1 className="large text-primary text-center">Dashboard</h1>
      
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
