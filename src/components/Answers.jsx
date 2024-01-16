/* eslint-disable react/prop-types */
import React from "react";

export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    onSelect,
}) {
    const shuffledAnswers = React.useRef();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = "";
                if (answerState === "answered" && isSelected) {
                    cssClass = "selected";
                }
                if (["correct", "wrong"].includes(answerState) && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            className={cssClass}
                            onClick={() => onSelect(answer)}
                            disabled={answerState !== ""}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
