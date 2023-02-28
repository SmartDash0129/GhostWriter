import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';

import { testFunc } from '../../actions/model';

// import  { exec } from 'child_process';

const Model = ( {auth, setAlert, testFunc} ) => {
    const handleClick = () => {
        testFunc(); 
        // exec("dir", (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         return;
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        // });       
    }
    return (
    <section className="container">
        <h1 className="large text-primary text-center">Fine-Tuned Model</h1>
        <div className="text-center">
        <input type="button" className="btn btn-primary" value="click" onClick={handleClick} />
        </div>
    </section>
    );
};

Model.propTypes = {
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
  testFunc: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, testFunc })(Model);
