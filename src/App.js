// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import QuestionsPage from './Pages/Questions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/questions" element={<QuestionsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
