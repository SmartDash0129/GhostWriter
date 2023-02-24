import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';

import { loadContact } from '../../actions/contact_mng';

const ContactAdmin = ( {auth, setAlert, loadContact} ) => {
  useEffect(() => {
    loadContact();
  },[]);
  return (
    <section className="container">
        <h1 className="large text-primary text-center">Contact Management</h1>
        <div className="contact-admin-container">
            <div className="contact-admin-left">
                <div className="text-center">
                    <div className="my-2 b lead text-primary">Contact List</div>
                </div>
            </div>
            <div className="contact-admin-right">
                2
            </div>
        </div>
    </section>
  );
};

ContactAdmin.propTypes = {
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
  loadContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, loadContact })(ContactAdmin);
