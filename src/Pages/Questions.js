// src/components/QuestionsPage.js

import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionsPageContainer = styled.div`
  background-color: #F2F7FE;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const QuestionBox = styled.div`
  background-color: white;
  width: 95%; /* Adjust the width for a larger box */
  max-width: 800px;
  padding: 30px; /* Increase padding for more space inside */
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

const QuestionsPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion % 5) + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion - 2 + 5) % 5 + 1);
  };

  return (
    <QuestionsPageContainer>
      {[1, 2, 3, 4, 5].map((questionNumber) => (
        <QuestionBox
          key={questionNumber}
          clickable={currentQuestion === questionNumber}
          style={{ transform: `translateX(${(questionNumber - currentQuestion) * 100}%)` }}
          onClick={handleNextQuestion}
        >
          <p>Question {questionNumber}</p>
          <p>Click to move to the next question</p>
          <ButtonContainer>
            {Array.from({ length: 4 }, (_, index) => (
              <Button
                key={index}
                backgroundColor={`#5C98EC`}
                hoverColor={`#4A7CBF`}
                onClick={(e) => e.stopPropagation()} // Prevent click propagation
              >
                Option {index + 1}
              </Button>
            ))}
          </ButtonContainer>
        </QuestionBox>
      ))}
    </QuestionsPageContainer>
  );
};

export default QuestionsPage;
