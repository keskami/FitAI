// src/components/QuestionsPageStyles.js

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@400;500&display=swap');

  body {
    font-family: 'Inter'; // Use the imported font as the default font
  }
`;

export const QuestionsPageContainer = styled.div`
  background-color: #F2F7FE;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const QuestionBox = styled.div`
  background-color: white;
  width: 100%; /* Adjust the width for a larger box */
  height: 16vh;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out;
  display:flex;
  padding: 10px 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 60px;
  width: 100%;
`;

export const Button = styled.button`
  display: block;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  font-size: 5px;
  width: 100%;
  padding: 2px 0;
  font-family: 'Inter';
  font-weight: bold;
  align-items: center;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

export const Input = styled.input`
  font-size:25px;
  width: 60%;
  height:30%;
  padding: 0;
  margin-top: 50px;
  border: none;
  background-color: #F2F7FE;
  text-align: right:
`;
