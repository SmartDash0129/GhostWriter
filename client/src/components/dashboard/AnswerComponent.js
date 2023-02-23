import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AnswerComponent = ( props ) => {
    // const auth = props.auth;
    return (
        <div className="answer-container px-1">
            {props.content}
        </div>
    );
};

AnswerComponent.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AnswerComponent);
