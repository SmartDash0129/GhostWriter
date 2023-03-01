import React from 'react';
// import { Link } from 'react-router-dom';
import PayCard from './PayCard';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Pricing = ( {auth: { user }} ) => {
  return (
    <section className="container">
      <h1 className="large text-primary text-center">Pricing</h1>
      <div className="card-container">
        <PayCard />
      </div>
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
