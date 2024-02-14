import React from 'react';

const handleDownload = () => {
    // Gantikan URL dengan URL file yang ingin didownload
    const fileUrl = '/img/01.jpg';
    // Buat elemen anchor untuk men-download file
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'cat-01.jpg'; // Nama file yang akan didownload
    anchor.click(); // Klik elemen anchor secara otomatis
  };

  const handleDownload2 = () => {
    // Gantikan URL dengan URL file yang ingin didownload
    const fileUrl = '/img/08.jpg';
    // Buat elemen anchor untuk men-download file
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'cat-02.jpg'; // Nama file yang akan didownload
    anchor.click(); // Klik elemen anchor secara otomatis
  };

  const handleDownload3 = () => {
    // Gantikan URL dengan URL file yang ingin didownload
    const fileUrl = '/img/06.jpg';
    // Buat elemen anchor untuk men-download file
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'cat-03.jpg'; // Nama file yang akan didownload
    anchor.click(); // Klik elemen anchor secara otomatis
  };

  const handleDownload4 = () => {
    // Gantikan URL dengan URL file yang ingin didownload
    const fileUrl = '/img/05.jpg';
    // Buat elemen anchor untuk men-download file
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'cat-04.jpg'; // Nama file yang akan didownload
    anchor.click(); // Klik elemen anchor secara otomatis
  };

  const handleDownload5 = () => {
    // Gantikan URL dengan URL file yang ingin didownload
    const fileUrl = '/img/03.jpg';
    // Buat elemen anchor untuk men-download file
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'cat-05.jpg'; // Nama file yang akan didownload
    anchor.click(); // Klik elemen anchor secara otomatis
  };

function Chat() {
  return (
<div className=' bg-white py-10 px-12'>
   <div className="flex items-start gap-2.5 mb-6">
      <img className="w-8 h-8 rounded-full" src="/img/1.jpg" alt="Jese" />
      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Tata Sayang</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p className="text-sm font-normal text-gray-900 dark:text-white text-left">Happy vals day! ini pap cantik buat kamu </p>
        </div>
        
      </div>
      <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
      </button>
    </div> 
    <div className="flex items-start gap-2.5 mb-5">
      <img className="w-8 h-8 rounded-full" src="/img/1.jpg" alt="Bonnie Green" />
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Tata Sayang</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-1">
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                <img src='/img/png.png' alt='png' width={20}/>    
                Download
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                1 photo
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                1 MB
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                PDF
              </span>
            </div>
            <div className="inline-flex self-center items-center">
            <button className="download inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button" onClick={handleDownload}>
                <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
            </button>
            </div>
          </div>

          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-1">
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
              <img src='/img/png.png' alt='png' width={20}/>    
                Download
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                1 photo
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                1 MB
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                PDF
              </span>
            </div>
            <div className="inline-flex self-center items-center">
            <button className="download inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button" onClick={handleDownload}>
                <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
            </button>
            </div>
          </div>

          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-1">
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
              <img src='/img/png.png' alt='png' width={20}/>    
                Download
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                1 photo
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                1 MB
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                PDF
              </span>
            </div>
            <div className="inline-flex self-center items-center">
            <button className="download inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button" onClick={handleDownload}>
                <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
            </button>
            </div>
          </div>

          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-1">
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
              <img src='/img/png.png' alt='png' width={20}/>    
                Download
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                1 photo
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                1 MB
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                PDF
              </span>
            </div>
            <div className="inline-flex self-center items-center">
            <button className="download inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button" onClick={handleDownload}>
                <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
            </button>
            </div>
          </div>

          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-1">
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
              <img src='/img/png.png' alt='png' width={20}/>    
                Download
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                1 photo
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                1 MB
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                PDF
              </span>
            </div>
            <div className="inline-flex self-center items-center">
            <button className="download inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button" onClick={handleDownload}>
                <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
            </button>
            </div>
          </div>

          
          
        </div>
      </div>
      <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
      </button>
    </div>
    
    </div>
  );
}

export default Chat;
