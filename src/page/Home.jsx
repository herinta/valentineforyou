import React, { useState, useEffect } from 'react';
import HitungWaktu from '../Components/HitungWaktu';
import Envelope from '../Components/Envelop';
import Carousel from '../Components/Carousel';
import Valentine from './Valentine';
import Video from '../Components/Video';
import Kupon from '../Components/Kupon';
import Quiz from '../Components/Quiz';
import Chat from '../Components/Chat';

const Home = () => {
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [currentContent, setCurrentContent] = useState(1);

    const [clickSound] = useState(new Audio("/sound/click.mp3"));
    clickSound.currentTime = 0.60; // Mulai dari detik ke-2
    const playClickSound = () => {
        clickSound.volume = 1;
        clickSound.play();
    };

    useEffect(() => {
        const playAudio = () => {
            const audio = new Audio("/sound/twily.mp3");
            playAudio.volume = 0.5;
            audio.play();
            setAudioPlayed(true);
        };

        if (!audioPlayed) {
            playAudio();
        }

        return () => {
            const audio = new Audio("/sound/you.mp3");
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audioPlayed]);

    const handleNext = () => {
        setCurrentContent(currentContent === 6 ? 1 : currentContent + 1);
    };
    
    const handlePrevious = () => {
        setCurrentContent(currentContent === 1 ? 6 : currentContent - 1);
    };
    

    return (
        
        <div className="home min-h-screen flex flex-col justify-center items-center">
           <div className="main">
           {currentContent === 2 && (
                <div className="content-1 flex justify-center items-center">
                    <div className="py-8 px-10">
                        <HitungWaktu/>
                    </div>
                </div>
            )}
            {currentContent === 1 && (
                <div className="content-2 flex justify-center items-center">
                    <div className="py-8 px-10">
                        <Envelope/>
                    </div>
                </div>
            )}
            
            {currentContent === 3 && (
                <div className="content-2 flex justify-center items-center">
                    <div className="py-8 px-10">
                        <Quiz/>
                    </div>
                </div>
            )}
            {currentContent === 4 && (
                <div className="content-2 flex justify-center items-center">
                    <div className="py-8 px-10">
                        <Kupon/>
                    </div>
                </div>
            )}
            
            {currentContent === 5 && (
                <div className="content-2 flex justify-center items-center">
                    <div className="py-8 px-10">
                        <Video/>
                    </div>
                </div>
            )}
            {currentContent === 6 && (
                <div className="content-2 flex justify-center items-center">
                    <div className="py-8 px-10">
                        <Chat/>
                    </div>
                </div>
            )}
          
           <div className="mt-5 relative">
           <button className='bg-white py-4 px-6 rounded hover:bg-pink-300 hover:text-white' onClick={() => { handlePrevious(); playClickSound(); }}>Previous</button>
<button className='bg-white py-4 px-6 rounded hover:bg-pink-300 hover:text-white' onClick={() => { handleNext(); playClickSound(); }}>Next</button>

            </div>
           </div>

           
        </div>
    );
}

export default Home;
