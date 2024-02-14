import React, { useState, useEffect } from 'react';

const HitungWaktu = () => {
    // Tanggal 7 Juni 2023
    const startDate = new Date('2023-06-07');

    const [result, setResult] = useState(""); // State untuk hasil perhitungan waktu

    useEffect(() => {
        const hitungWaktu = () => {
            const currentTime = new Date();
            
            // Menghitung selisih waktu dalam detik
            const diffInSeconds = (currentTime - startDate) / 1000;

            // Menghitung jumlah hari
            const days = Math.floor(diffInSeconds / (24 * 60 * 60));

            // Menghitung sisa detik setelah dihitung dalam hari
            const remainingSeconds = Math.floor(diffInSeconds % (24 * 60 * 60));

            // Menghitung jam, menit, dan detik dari sisa detik
            const hours = Math.floor(remainingSeconds / (60 * 60));
            const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
            const seconds = Math.floor(remainingSeconds % 60);

            setResult(`
                     ${days} : ${hours}  : ${minutes} : ${seconds}`);
        };

        // Memanggil fungsi untuk pertama kali
        hitungWaktu();

        // Memperbarui setiap detik
        const interval = setInterval(hitungWaktu, 1000);

        // Membersihkan interval setelah komponen unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white py-12 px-10 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-10">
                <img className="w-16 rounded-full" src="/img/1.jpg" alt="" />
                <h1 className="text-2xl font-bold ml-6 text-pink-400 border solid border-pink-500 rounded-full py-2 px-3">How long we've been together?</h1>
            </div>
            <div id="result" className="mt-2 text-5xl" dangerouslySetInnerHTML={{ __html: result }}></div>
            <div className="flex justify-around justify-self-center w-full px-">
                <h1>Days</h1>
                <h1 className=''>Hour</h1>
                <h1 className='-mr-5'>Minute</h1>
                <h1 className='-mr-8'>Second</h1>
            </div>
        </div>
    );
}

export default HitungWaktu;