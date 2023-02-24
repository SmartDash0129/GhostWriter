import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';

const FineTuning = ( {auth, setAlert} ) => {
  return (
    <section className="container">
      <h1 className="large text-primary text-center">Training Data Management</h1>
      
    </section>
  );
};

FineTuning.propTypes = {
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert })(FineTuning);
