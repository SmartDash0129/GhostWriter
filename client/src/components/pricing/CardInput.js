import { useState, useEffece } from 'react';
import {useDispatch} from 'react-redux';

import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OPENAI_WAITING } from '../../actions/types';

import api from '../../utils/api';

const CardInput = ({setAlert}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        cardNumber: '4242 4242 4242 4242',
        expMonth: '',
        expYear: '',
        cvc: ''
    });
    const {email, cardNumber, expMonth, expYear, cvc} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        dispatch({type: OPENAI_WAITING, payload: true});
        const res = await api.post("/pricing/pay", formData);
        dispatch({type: OPENAI_WAITING, payload: false});
        if(res.data == "success") {
            setAlert("$11 was Charged Successfully!", "success");
        }
        else {
            setAlert("Charge failed", "danger");
        }
    }
    return (
        <div className="card-input-container px-4">
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" placeholder='Email' name='email' value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Card Number' name="cardNumber" value={cardNumber} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Exp Month' name="expMonth" value={expMonth} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Exp Year' name="expYear" value={expYear} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='cvc' name="cvc" value={cvc} onChange={onChange} required />
                </div>
                <div className="text-center">
                    <input type="submit" className="btn btn-primary" value=" SEND " />
                </div>
            </form>
        </div>
    )
}
CardInput.propTypes = {
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    
  });

export default connect(mapStateToProps, { setAlert })(CardInput);
