// src/components/LoginPage.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginPageContainer = styled.div`
  background-color: #F2F7FE;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%; /* Set the width to 80% of the container */
  max-width: 400px; /* Set a maximum width for larger screens */
  margin: 0 auto; /* Center the box horizontally */
`;

const Title = styled.h2`
  color: #333;
`;

const InputField = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;

const SignupLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    color: #555;
  }
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm>
        <Title>Login</Title>
        <form>
          <InputField type="text" placeholder="Username" />
          <InputField type="password" placeholder="Password" />
          <Link to="/home"><Button type="submit">Login</Button></Link>
        </form>
        <p>Don't have an account? <SignupLink href="/signup">Sign up</SignupLink></p>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
