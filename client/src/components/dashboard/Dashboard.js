import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import QuestionComponent from './QuestionComponent';
import AnswerComponent from './AnswerComponent';

import { getAnswer, cleanHistory } from '../../actions/dashboard';
import { setAlert } from '../../actions/alert';

const Dashboard = ( {auth, QA, getAnswer, cleanHistory, setAlert} ) => {
  const [formData, setFormData] = useState({
    question:''
  });

  const { question } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (question=='') {
      setAlert('Please write the prompt', 'danger');
    }
    else {
      setFormData({question: ''});
      getAnswer(question);
    }
  };
  const clearHistory = async () => {
    setFormData({question: ''});
    cleanHistory();
  }
  return (
    <section className="container">
      <h1 className="large text-primary text-center">Dashboard</h1>
      <div className="dashboard-container"> 
        <div className="dashboard-left">
          <div className="text-center">
            <div className="my-2 b lead text-primary">What do you want?</div>
            <form onSubmit={onSubmit}>
              <textarea className="prompt small" name="question" value={question} onChange={onChange} autoFocus></textarea>
              <input type="submit" className="btn btn-success my-1" value="Writing" />
            </form>
            <input type="button" className="btn btn-success my-1" value="Clean History" onClick={clearHistory} />
          </div>
        </div>
        <div className="dashboard-right">
          {
            QA.map((value, index, array) => {
              return (
                <div>
                  <QuestionComponent key={value[0]} content={value[0]} /> 
                  <AnswerComponent key={value[1]} content={value[1]} />
                </div>
              )
            })
          }
        </div>
      </div>


    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  QA: PropTypes.array.isRequired,
  getAnswer: PropTypes.func.isRequired,
  cleanHistory: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  QA: state.dashboard.QA
});

export default connect(mapStateToProps, {getAnswer, cleanHistory, setAlert})(Dashboard);
