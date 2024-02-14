import React, { useState } from 'react';


function Login() {
    const [showModal, setShowModal] = useState(false); // State untuk menampilkan/menyembunyikan modal
    const [errorMessage, setErrorMessage] = useState(""); // State untuk pesan kesalahan

    const handleSubmit = (event) => {
        event.preventDefault();
        const password = event.target.elements.password.value;
        if (password === "0706") {
            // Jika password benar, redirect ke halaman home
            window.location.assign("/home");
        } else {
            // Jika password salah, set pesan kesalahan dan tampilkan modal
            setErrorMessage("Password salah");
            setShowModal(true);
        }
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="login min-h-screen flex justify-center items-center">
            <div className="form-box bg-opacity-75 backdrop-blur-lg p-8 rounded-lg shadow-md">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold text-white mb-6">Pretty things inside!</h2>
                        <div className="inputbox relative mb-4">
                            <ion-icon name="lock-closed-outline" className="absolute right-2 top-8 text-white"></ion-icon>
                            <input type="password" id="password" required className="w-full h-12 bg-transparent border-b-2 border-white text-white outline-none focus:border-gray-300" />
                            <label htmlFor="password" className="absolute left-2 transition-all text-white">Password</label>
                        </div>
                        <p className="text-red-500 text-xs mb-2">*tanggal jadian (dd/mm)</p>
                        <input type="submit" value="Open" className="submit w-full h-10 bg-white rounded-full text-black font-semibold text-lg cursor-pointer" />
                        <div className="register"></div>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-red-500 text-lg mb-4">Error!</h2>
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                        <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">Close</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Login;
