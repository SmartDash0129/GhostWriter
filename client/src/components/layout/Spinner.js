import React, { Fragment } from 'react';
// import spinner from './spinner.gif';
import spinner2 from './spinner2.gif';

const Spinner = () => (
  <Fragment>
    <br /><br /><br />
    <div className="spinner-container">
      <img
        src={spinner2}
        style={{ width: '50px'}}
        alt="Loading..."
      />
    </div>
  </Fragment>
);

export default Spinner;
