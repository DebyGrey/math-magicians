import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './routes/Home';
import Calculator from './routes/Calculator';
import Quotes from './routes/Quotes';
import Layout from './components/Layout';
import PageNotFound from './routes/PageNotFound';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/math-magicians" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
