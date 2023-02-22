import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Contact = ({isAuthenticated}) => {
    const onChange = (e) => {

    }

    const onSubmit = async (e) => {
        e.preventDefault();
    };
    if (!isAuthenticated) {
        // return <Navigate to="/login" />;
    }
    return (
        <div>
            <section className="container">
                <h1 className="large text-primary text-center">Any Questions?</h1>
                <p className="lead text-center b">
                    <i className="fas fa-user" /> Get in touch
                </p>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={"admin"}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={"email"}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea style={{height: "20rem"}}></textarea>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-success" value="Submit" />
                    </div>
                </form>
            </section>
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
