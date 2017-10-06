// Import Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, hashHistory } from "react-router-dom";

// Import React Components
import AppRoutes from './routes/AppRoutes.jsx';

// Require Style Component
require('./index.scss');

ReactDOM.render(
  <Router history={ hashHistory }>
    <AppRoutes />
  </Router>,
  document.getElementById('app')
);
