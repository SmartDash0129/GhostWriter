import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Pricing = ( {auth: { user }} ) => {
  return (
    <section className="container">
      <h1 className="large text-primary text-center">Pricing</h1>
      
    </section>
  );
};

Pricing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Pricing);
