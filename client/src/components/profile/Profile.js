import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { modifyProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Profile = ( {setAlert, modifyProfile, isAuthenticated, user} ) => {
    useEffect(() => {
        if(user)
            setFormData({...formData, name: user.name, email: user.email});
    }, [user]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        newConfirmPassword: ''
    });

    const { name, email, currentPassword, newPassword, newConfirmPassword } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!currentPassword) {
            setAlert("Please input the current password!", "danger");
        }
        else {
            if(!newPassword && !newConfirmPassword) {
                modifyProfile({name, email, currentPassword});
            }
            else {
                if(newPassword !== newConfirmPassword) {
                    setAlert("New password didn't match!", "danger");
                }
                else{
                    modifyProfile({name, email, currentPassword, newPassword});
                }
            }
        }
    };
  return (
    <section className="container-small">
      <h1 className="large text-primary text-center">Profile</h1>
      <p className="lead text-center">
        <i className="fas fa-user" /> You can modify your profile here.
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
                style={{backgroundColor: "#111", color: "#fff"}}
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                disabled
            />
        </div>
        <div className="form-group">
            <div className="lead text-primary b">Current Password :</div>
            <input
                type="password"
                placeholder="Current Password"
                name="currentPassword"
                value={currentPassword}
                onChange={onChange}
            />
        </div>
        <div className="form-group">
            <div className="lead text-primary b">New Password :</div>
            <input
                type="password"
                placeholder="New Password"
                name="newPassword"
                value={newPassword}
                onChange={onChange}
            />
        </div>
        <div className="form-group">
            <div className="lead text-primary b">New Confirm Password :</div>
            <input
                type="password"
                placeholder="Confirm Password"
                name="newConfirmPassword"
                value={newConfirmPassword}
                onChange={onChange}
            />
        </div>
        <div className="text-center">
            <input type="submit" className="btn btn-success" value="Modify" />
        </div>
      </form>
    </section>
  );
};

Profile.propTypes = {
    setAlert: PropTypes.func.isRequired,
    modifyProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { setAlert, modifyProfile })(Profile);
