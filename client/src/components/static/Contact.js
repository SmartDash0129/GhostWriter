import React, { useState } from 'react';
// import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage } from '../../actions/contact';

const Contact = ({isAuthenticated, sendMessage }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { name, email, message } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        sendMessage(formData);
        setFormData({ ...formData, name: '', email: '', message: '' });
    };
    return (
        <div>
            <section className="container-small">
                <h1 className="large text-primary text-center">Any Questions?</h1>
                <p className="lead text-center b">
                    <i className="fas fa-user" /> Get in touch with me!
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
                    </div>
                    <div className="form-group">
                        <div className="lead text-primary b">Message :</div>
                        <textarea 
                            style={{height: "17rem"}}
                            name="message"
                            value={message}
                            onChange={onChange}
                            placeholder="Message ..."
                        />
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
    isAuthenticated: PropTypes.bool,
    sendMessage: PropTypes.func
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {sendMessage})(Contact);
