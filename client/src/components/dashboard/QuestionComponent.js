import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const QuestionComponent = ( props ) => {
  // const auth = props.auth;
  return (
    <div className="question-cotainer px-1">
        {props.content}        
    </div>
  );
};

QuestionComponent.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(QuestionComponent);
