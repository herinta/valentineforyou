import React from 'react';
import './style.css';

const Envelop = () => {
    const handleMouseEnter = () => {
        document.querySelector('.card').style.top = '-90px';
    };

    const handleMouseLeave = () => {
        document.querySelector('.card').style.top = '0';
    };

    return (
        <div className="envelop ">
          <div className="containerr" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="valentines">
                <div className="envelope"></div>
                <div className="front"></div>
                <div className="card">
                    <div className="text">Happy<br />Valentine's<br />Day!</div>
                    <div className="heart"></div>
                </div>
                <div className="hearts">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                </div>
            </div>
            <div className="shadow"></div>
        </div>
        </div>
    );
};

export default Envelop;
