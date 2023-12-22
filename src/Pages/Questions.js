// src/components/QuestionsPage.js

import React, { useState } from 'react';
import {
    QuestionsPageContainer,
    QuestionBox,
    ButtonContainer,
    Button,
    Input
} from './QuestionsStyles';

const QuestionsPage = () => {
    const [currentQuestionTransform, setCurrentQuestionTransform] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const handleNextQuestion = (clickable) => {
        if (clickable) {
            setCurrentQuestionTransform((prevQuestion) => prevQuestion + 2);
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
    };

    const handlePrevQuestion = (clickable) => {
        if (clickable) {
            setCurrentQuestionTransform((prevQuestion) => prevQuestion - 2);
            setCurrentQuestion((prevQuestion) => prevQuestion - 1);
        }
    };

    const questionData = [
        { buttons: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] },
        { input: true }, // Replace buttons with input text field
        { buttons: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] },
        { buttons: ['Option 1', 'Option 2'] },
        { buttons: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'] },
    ];

    return (
        <QuestionsPageContainer>
            {[1, 2, 3, 4, 5].map((questionNumber, index) => (
                <QuestionBox
                    key={questionNumber}
                    style={{
                        transform: (
                            questionNumber === currentQuestion
                                ? `translateX(${(questionNumber - currentQuestionTransform) * 100}%) scale(2.8)`
                                : `translateX(${(questionNumber - currentQuestionTransform) * 100}%) scale(0.7,1.9)`
                        ),
                    }}
                    onClick={() => (
                        questionNumber === currentQuestion + 1
                            ? handleNextQuestion(currentQuestion !== questionNumber)
                            : handlePrevQuestion(currentQuestion !== questionNumber)
                    )}
                >
                    {questionData[index].input ? (
                        <><Input
                            type="text"
                            style={{ visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden') }} /><span style={{ position: 'absolute', top: '50%', transform: 'translateY(50%)', right: '12px', color: '#706E6E', fontSize: '10px' }}>Min</span></>
                    ) : (
                        <ButtonContainer>
                            {questionData[index].buttons.map((buttonContent, buttonIndex) => (
                                <Button
                                    key={buttonIndex}
                                    backgroundColor={'#F2F7FE'}
                                    hoverColor={`#4A7CBF`}
                                    onClick={(e) => e.stopPropagation()} // Prevent click propagation
                                    style={{ visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden') }}
                                >
                                    {buttonContent}
                                </Button>
                            ))}
                        </ButtonContainer>
                    )}
                </QuestionBox>
            ))}
        </QuestionsPageContainer>
    );
};

export default QuestionsPage;
