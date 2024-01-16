import React from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = React.useState([]);
    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = React.useCallback((answer) => {
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    }, []);
    const handleSkipAnswer = React.useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
