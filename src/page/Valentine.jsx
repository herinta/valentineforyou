import React, { useState } from 'react';
import anime from 'animejs';
import Confetti from 'react-confetti';
import "./valentine.css"


const ValentineApp = () => {
    const [doConfetti, setDoConfetti] = useState(false);
    const [timer, setTimer] = useState(null);
    const interval = 2000;

    const moveButton = () => {
        const top = getRandomNumber(window.innerHeight - document.getElementById("no-btn").offsetHeight);
        const left = getRandomNumber(window.innerWidth - document.getElementById("no-btn").offsetWidth);
        animateMove(document.getElementById("no-button"), "left", left).play();
        animateMove(document.getElementById("no-button"), "top", top).play();
    };

    const animateMove = (element, prop, pixels) =>
        anime({
            targets: element,
            [prop]: `${pixels}px`,
            easing: "easeOutCirc"
        });

    const weParty = () => {
        setDoConfetti(true);
        document.getElementById("reset-container").classList.remove("hidden");
        document.getElementById("celebration").classList.remove("hidden");
        document.getElementById("question").classList.add("hidden");
        document.getElementById("answers").classList.add("hidden");

        if (timer !== null) return;

        setTimer(setInterval(function () {
            // Do nothing, Confetti component will handle the confetti animation
        }, interval));
    };

    const resetPage = () => {
        setDoConfetti(false);
        clearInterval(timer);
        setTimer(null);

        document.getElementById("no-button").style.left = '';
        document.getElementById("no-button").style.top = '';
        document.getElementById("reset-container").classList.add("hidden");
        document.getElementById("celebration").classList.add("hidden");
        document.getElementById("question").classList.remove("hidden");
        document.getElementById("answers").classList.remove("hidden");
    };

    const getRandomNumber = (num) => Math.floor(Math.random() * (num + 1));

    return (
        <div id="main valentine">
            <div id="question" className=''>
                <h1>Will you be my Valentine?</h1>
                <img id="cat-heart" src="/img/cat-with-heart.jpg" alt="Cat with heart" />
            </div>
            <div id="answers">
                <div id="yes-button" className='bg-green-400'>
                    <button className='btn-v' id="yes-btn" onClick={weParty}>Yes</button>
                </div>
                <div id="no-button">
                    <button id="no-btn" className='btn-v bg-red-400' onMouseOver={moveButton} onClick={moveButton}>No</button>
                </div>
            </div>
            {doConfetti && <Confetti />}
            <div id="celebration" className="hidden">
                <h1>Yeayyy here's a valentine gift for you </h1>
                <a href="/login"><button id="" className='mt-10 btn-v bg-pink-400 text-white'>Open</button></a>
            </div>
            <div id="reset-container" className="hidden"></div>
        </div>
    );
};

export default ValentineApp;
