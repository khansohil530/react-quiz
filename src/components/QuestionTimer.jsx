/* eslint-disable react/prop-types */
import React from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = React.useState(timeout);

    React.useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <progress
            id="question-time"
            max={timeout}
            value={remainingTime}
            className={mode}
        />
    );
}
