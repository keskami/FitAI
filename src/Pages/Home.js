// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { HomePageContainer, CircleInitials, StartButton } from './HomeStyles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <CircleInitials>MW</CircleInitials>
      <Link to="/questions"><StartButton>Start Workout</StartButton></Link>
    </HomePageContainer>
  );
};

export default HomePage;
