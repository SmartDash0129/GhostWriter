import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AnswerComponent = ( props ) => {
    return (
        <div className="answer-container mx-1">
          <textarea value={props.content} className="answer-content p-1" readOnly/>
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
