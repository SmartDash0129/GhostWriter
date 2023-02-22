import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Contact = ({isAuthenticated}) => {
    if (!isAuthenticated) {
        // return <Navigate to="/login" />;
    }
    return (
        <div>

        </div>
    );
};

Contact.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Contact);
