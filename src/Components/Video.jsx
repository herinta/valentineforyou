import React, { useRef, useEffect } from 'react';

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Menggunakan ref untuk mengakses elemen video
        const video = videoRef.current;

        // Memastikan video telah dimuat sebelum mencoba memainkannya
        if (video) {
            video.play()
                .then(() => {
                    console.log('Video started playing');
                })
                .catch((error) => {
                    console.log('Error playing the video:', error);
                });
        }
    }, []);

    return (
        <div className='bg-white'>
            {/* Video player dengan atribut autoplay */}
            <video ref={videoRef} width="300" height="" controls autoPlay>
                <source src="/sound/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
