import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';

import About from './components/static/About';
import Contact from './components/static/Contact';
import ContactAdmin from './components/contact-admin/ContactAdmin';
import Pricing from './components/pricing/Pricing';
import Profile from './components/profile/Profile';
import FineTuning from './components/finetuning/FineTuning';
import Embedding from './components/embedding/Embedding';
import Model from './components/finetuning/Model';

import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="pricing"
            element={<PrivateRoute component={Pricing} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute component={Profile} />}
          />
          <Route
            path="embedding"
            element={<PrivateRoute component={Embedding} />}
          />
          <Route
            path="model"
            element={<PrivateRoute component={Model} />}
          />
          <Route
            path="contact_admin"
            element={<PrivateRoute component={ContactAdmin} />}
          />
          <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
