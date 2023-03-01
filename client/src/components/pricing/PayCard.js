import React, {useState, useEffect} from 'react';

// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import api from '../../utils/api';
import CardInput from './CardInput';

const PayCard = ( {auth: { user }} ) => {
    const [formData, setFormData] = useState({
        cardNumber:'',
        expMonth: '',
        expYear: '',
        cvc: ''
    });
    const [editable, setEditable] = useState(false);

    const { cardNumber, expMonth, expYear, cvc } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    useEffect(() => {
        
    }, []);
    const handleCancel = () => {
        
    }
    const handleStart = async (data) => {
        setEditable(!editable);
    }
    return (
        <div className="card">
            <div className="my-2 text-center x-large b">
                $11 / <span className="large text-primary">month</span>
            </div>
            <div className="text-center my-4">
                {
                    user.priceEnabled ? 
                        <input type="button" className="btn btn-primary b" value="Cancle" onClick={handleCancel} /> 
                        : editable ? <input type="button" className="btn btn-success b" value="Cancle" onClick={handleStart}/> 
                        : <input type="button" className="btn btn-success b" value="Get Started" onClick={handleStart}/> 
                }
            </div>
            {
                editable ? <CardInput /> : '' 
            }
            
        </div>
    );
};

PayCard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PayCard);
