// src/components/QuestionsPage.js

import React, { useState } from 'react';
import {
    QuestionsPageContainer,
    QuestionBox,
    ButtonContainer,
    Button,
    Input,
    Name,
    Subheader,
    QuestionNum,
    NumSpan,
    Label,
    Question
} from './QuestionsStyles';
import { CircleInitials } from './HomeStyles';

const QuestionsPage = () => {
    const [currentQuestionTransform, setCurrentQuestionTransform] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [duration, setDuration] = useState('');
    var workout;
    var intensity;
    var genre;
    var atmosphere;

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

    const buttonPress = (index, content) => {
        if (index === 0) {
            if (content === 'Cardiovascular') {
                workout = 'Cardiovascular';
            } else if (content === 'Strength') {
                workout = 'Strength'
            } else if (content === 'HIIT') {
                workout = 'HIIT'
            } else if (content === 'Flexibility/Mobility') {
                workout = 'Flexibility/Mobility'
            } else if (content === 'Functional') {
                workout = 'Functional'
            }
            console.log(workout)
        } else if (index === 1) {
            if (content === 'Easy') {
                intensity = 'Easy';
            } else if (content === 'Moderate') {
                intensity = 'Moderate'
            } else if (content === 'Vigorous') {
                intensity = 'Vigorous'
            } else if (content === 'High Intensity') {
                intensity = 'High Intensity'
            }
            console.log(intensity)
        } else if (index === 2) {
            if (content === 'Pop') {
                genre = 'Pop';
            } else if (content === 'Rock') {
                genre = 'Rock'
            } else if (content === 'Hip-Hop') {
                genre = 'Hip-Hop'
            } else if (content === 'Electronic') {
                genre = 'Electronic'
            } else if (content === 'Classical') {
                genre = 'Classical'
            }
            console.log(genre)
        } else if (index === 3) {
            if (content === 'Energetic') {
                atmosphere = 'Energetic';
            } else if (content === 'Motivational') {
                atmosphere = 'Motivational'
            } else if (content === 'Calming') {
                atmosphere = 'Calming'
            } else if (content === 'Focused') {
                atmosphere = 'Focused'
            }
            console.log(atmosphere)
        }
    }

    const handleDuration = (e) => {
        setDuration(e.target.value);
        console.log(duration)
    }

    const questionData = [
        { buttons: ['Cardiovascular', 'Strength', 'HIIT', 'Flexibility/Mobility', 'Functional'], label: 'Workout', question: 'Pick your workout' },
        { input: true, label: 'Duration', question: "What’s the duration of your workout?" }, // Replace buttons with input text field
        { buttons: ['Easy', 'Moderate', 'Vigorous', 'High Intensity'], label: 'Intensity', question: 'Pick your intensity' },
        { buttons: ['Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Classical'], label: 'Genre', question: 'Pick a genre' },
        { buttons: ['Energetic', 'Motivational', 'Calming', 'Focused'], label: 'Atmosphere', question: 'Pick a mood' },
    ];

    return (

        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F2F7FE', height: '100vh' }}>
            <CircleInitials>MW</CircleInitials>
            <div style={{ margin: '100px 0 0 90px' }}>
                <Name>Hi Michael,</Name>
                <Subheader>Tell us about you.</Subheader>
            </div>
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
                        <div style = {{display: 'block', visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden')}}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <QuestionNum>{questionNumber}<NumSpan>/5</NumSpan></QuestionNum>
                                <Label>{questionData[index].label}</Label>
                            </div>
                            <Question>{questionData[index].question}</Question>
                        </div>
                        {questionData[index].input ? (
                            <><Input
                                type="text"
                                value={duration}
                                onChange={handleDuration}
                                style={{ visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden') }} /><span style={{ position: 'absolute', top: '47%', transform: 'translateY(50%)', right: '12px', color: '#706E6E', fontSize: '10px', visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden') }}>Min</span></>
                        ) : (
                            <ButtonContainer>
                                {questionData[index].buttons.map((buttonContent, buttonIndex) => (
                                    <Button
                                        key={buttonIndex}
                                        backgroundColor={'#F2F7FE'}
                                        hoverColor={`#4A7CBF`}
                                        onClick={(e) => buttonPress(index, buttonContent)} // Prevent click propagation
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
        </div>
    );
};

export default QuestionsPage;
