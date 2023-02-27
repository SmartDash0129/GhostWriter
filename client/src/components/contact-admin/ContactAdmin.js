import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';

import { loadContact, setActiveContact, delActiveContact, replyContactMessage, deleteContact } from '../../actions/contact_mng';

const ContactAdmin = ( {auth, contacts, activeContact, deleteContact, setAlert, loadContact, setActiveContact, delActiveContact, replyContactMessage} ) => {
  const [formData, setFormData] = useState({
    replyMessage: ''
  });

  const { replyMessage } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (replyMessage=='') {
      setAlert('Please input a replying message', 'danger');
    } else {
      let index = contacts.indexOf(activeContact);
      let updatedContact = activeContact;
      updatedContact.status = true;
      const data = {replyMessage, index, updatedContact, id: activeContact._id, email: activeContact.email};
      replyContactMessage(data);
      setFormData({replyMessage: ''});
    }
  };

  useEffect(() => {
    loadContact();
  },[]);
  const handleClick = (value) => {
    setActiveContact(value);
  }
  const delClick = (value) => {
    deleteContact(value);
  }
  return (
    <section className="container">
        <h1 className="large text-primary text-center">Contact Management</h1>
        <div className="contact-admin-container">
            <div className="contact-admin-left">
                <div className="text-center">
                    <div className="my-2 b lead text-primary">Contact Messages</div>
                </div>
                <div className="m-1">
                  <table className="contact">
                    <thead>
                      <th>no</th>
                      <th>name</th>
                      <th>email</th>
                      <th>status</th>
                      <th>delete</th>
                    </thead>
                    <tbody>
                      {
                        contacts.map((value, index) => {
                          return (
                            <tr>
                              <td>{index+1}</td>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td className="msg" onClick={() => handleClick(value)}>
                                {
                                  value.status ? <i className="fa fa-check" /> : <i className="fa fa-envelope" />
                                }
                              </td>
                              <td className='del' onClick={() => delClick(value)}>
                                <i className="fa fa-trash" />
                              </td>
                            </tr>
                          )
                        })
                      }
                
                    </tbody>
                  </table>
                </div>
            </div>
            <div className="contact-admin-right">
                <div className="text-center">
                    <div className="my-2 b lead text-primary">Replying</div>
                </div>
                <div className="text-center">
                  {
                    activeContact.name ?  <div className="my-2 b lead">{`${activeContact.name} , ${activeContact.email}`}</div> : ''
                  }
                </div>
                <form className="form m-1" onSubmit = {onSubmit}>
                  <div className="form group">
                    {
                      activeContact.name ?  <textarea className="msg" value={activeContact.message} disabled/> : ''
                    }
                    
                  </div><br />
                  <div className="form group">
                    {
                      activeContact.name ?  <textarea className="reply" onChange={onChange} name='replyMessage' value={replyMessage} /> : ''
                    }
                  </div> <br />
                  <div className="text-center">
                    {
                      activeContact.name ? <input type="submit" className="btn btn-success" value="Send" /> : ''
                    }
                  </div>
                </form>
            </div>
        </div>
    </section>
  );
};

ContactAdmin.propTypes = {
  auth: PropTypes.object.isRequired,
  activeContact: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
  loadContact: PropTypes.func.isRequired,
  setActiveContact: PropTypes.func.isRequired,
  delActiveContact: PropTypes.func.isRequired,
  replyContactMessage: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  contacts: state.contact.contacts,
  activeContact: state.contact.clickedContact
});

export default connect(mapStateToProps, { setAlert, deleteContact, loadContact, setActiveContact, delActiveContact, replyContactMessage })(ContactAdmin);
