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
    Question,
    Submit
} from './QuestionsStyles';
import { CircleInitials } from './HomeStyles';

const QuestionsPage = () => {
    const [currentQuestionTransform, setCurrentQuestionTransform] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [duration, setDuration] = useState('');
    const [workout, setWorkout] = useState('');
    const [intensity, setIntensity] = useState('');
    const [genre, setGenre] = useState('');
    const [atmosphere, setAtmosphere] = useState('');

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
        if (index === 1) {
            if (content === 'Cardiovascular') {
                setWorkout('Cardiovascular');
            } else if (content === 'Strength') {
                setWorkout('Strength');
            } else if (content === 'HIIT') {
                setWorkout('HIIT');
            } else if (content === 'Flexibility/Mobility') {
                setWorkout('Flexibility/Mobility');
            } else if (content === 'Functional') {
                setWorkout('Functional');
            }
        } else if (index === 3) {
            if (content === 'Easy') {
                setIntensity('Easy');
            } else if (content === 'Moderate') {
                setIntensity('Moderate');
            } else if (content === 'Vigorous') {
                setIntensity('Vigorous');
            } else if (content === 'High Intensity') {
                setIntensity('High Intensity');
            }
        } else if (index === 4) {
            if (content === 'Pop') {
                setGenre('Pop');
            } else if (content === 'Rock') {
                setGenre('Rock');
            } else if (content === 'Hip-Hop') {
                setGenre('Hip-Hop');
            } else if (content === 'Electronic') {
                setGenre('Electronic');
            } else if (content === 'Classical') {
                setGenre('Classical');
            }
        } else if (index === 5) {
            if (content === 'Energetic') {
                setAtmosphere('Energetic');
            } else if (content === 'Motivational') {
                setAtmosphere('Motivational');
            } else if (content === 'Calming') {
                setAtmosphere('Calming');
            } else if (content === 'Focused') {
                setAtmosphere('Focused');
            }
        }
    }

    const handleDuration = (e) => {
        setDuration(e.target.value);
        console.log(duration)
    }

    const submit = async () => {
        const apiUrl = 'http://localhost:3000/api/v1/monkseals/find';
        const jsonBody = {
            workout,
            duration,
            intensity,
            genre,
            atmosphere
        };
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              // Additional headers if needed
            },
            mode: 'cors',
            body: JSON.stringify(jsonBody),
          });
          
          // Assuming you want to work with the response JSON, you can do something like this:
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
          } else {
            console.error('Error:', response.status, response.statusText);
          }
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
                    <><QuestionBox
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
                        <div style={{ display: 'block', visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden') }}>
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
                                        onClick={(e) => buttonPress(questionNumber, buttonContent)} // Prevent click propagation
                                        style={{ visibility: (questionNumber === currentQuestion ? 'visible' : 'hidden') }}
                                    >
                                        {buttonContent}
                                    </Button>
                                ))}
                            </ButtonContainer>
                        )}
                    </QuestionBox>
                        <Submit style={{ visibility: (currentQuestion === 5 ? 'visible' : 'hidden') }} onClick={submit}>Submit</Submit>
                    </>
                ))}

            </QuestionsPageContainer>
        </div>
    );
};

export default QuestionsPage;
