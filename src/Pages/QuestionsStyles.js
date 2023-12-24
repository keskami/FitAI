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
  flex-direction:column;
  padding: 10px 8px;
  margin-top: 170px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 15px;
  width: 100%;
`;

export const Button = styled.button`
  display: block;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  font-size: 5px;
  width: 100%;
  padding: 3px 0;
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
  font-size:23px;
  width: 62%;
  height:30%;
  margin-top: 15px;
  border: none;
  background-color: #F2F7FE;
  text-align: right;
  direction: rtl;
  padding: 0 21px 0 0;
`;

export const Name = styled.p`
  font-size: 22px;
  font-family: 'Inter';
  font-weight: bold;
  margin: 40px 0 0 0;
`;

export const Subheader = styled.p`
  color: #706E6E;
  font-family: 'Inter';
  font-size: 15px;
  margin:0;
`;

export const QuestionNum = styled.p`
  font-size:10px;
  font-family: Inter;
  font-weight: bold;
  margin: 0 0 0 5px;
  padding:0;
`;

export const NumSpan = styled.span`
  font-size:7px;
  font-weight: 300;
  padding:0;
`;

export const Label = styled.p`
  font-size:6px;
  padding:0;
  margin: 3px 0 0 0;
  font-family: Inter;
  color: #706E6E;
  font-weight: 400;
`;

export const Question = styled.p`
  font-size:6px;
  font-family: Inter;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0 0;
`;
