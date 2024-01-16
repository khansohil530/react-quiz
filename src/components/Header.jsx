import React from "react";
import logoImg from "../assets/quiz-logo.png";

export default function Header() {
    return (
        <header>
            <img
                src={logoImg}
                alt="An image of notebook with pen and checkboxes"
            />
            <h1>ReactQuiz</h1>
        </header>
    );
}
