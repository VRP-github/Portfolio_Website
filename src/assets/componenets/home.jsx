import React, { useState } from 'react';
import ProfilePic from '../images/Photos.png';
import { FaPython, FaJava, FaCogs, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiOpencv, SiDjango, SiReact } from 'react-icons/si';

const Home = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResumeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = async (resumeType) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/home/download_resume/${resumeType}/`);
      const data = await response.json();

      if (response.ok) {
        const link = document.createElement('a');
        link.href = data.download_url;
        link.download = `${resumeType}_Resume.pdf`;
        link.click();
      } else {
        alert(data.error || 'An error occurred while downloading the resume.');
      }
    } catch (error) {
      alert('An error occurred while connecting to the server.');
    }

    setIsModalOpen(false);
  };

  return (
    <div
      className={`flex justify-start items-start min-h-screen ${
        theme === 'dark' ? 'bg-black' : 'bg-blue-50'
      } ${theme === 'dark' ? 'text-white' : 'text-black'}`}
    >
      <div className="flex flex-col md:flex-row items-center p-4">
        <div className="text-center md:text-left md:w-[800px]">
          <p
            className={`text-xl mt-[170px] ml-[100px] sm:ml-[80px] sm:text-2xl md:ml-[100px] md:text-4xl lg:ml-[120px] lg:text-6xl font-semibold`}
          >
            Hey! I'm{' '}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                theme === 'dark' ? 'from-purple-300 to-purple-700' : 'from-blue-300 to-blue-600'
              } font-playwright`}
            >
              Viraj Patel.
            </span>
          </p>
          <p className="text-[18px] lg:ml-[122px] mt-[7px] sm:text-[10px] sm:ml-[38px] md:text-[24px]">
            Full-stack developer | Machine Learning
          </p>
          <p className="text-[12px] lg:ml-[122px] mt-[30px] sm:text-[10px] sm:ml-[38px] md:text-[16px]">
            <span className={`${theme === 'dark' ? 'text-purple-300' : 'text-blue-500'}`}>Programming Languages: </span>
            Python{' '}
            <FaPython className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />, C++{' '}
            <SiCplusplus className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />, SQL{' '}
            <FaDatabase className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />, Java{' '}
            <FaJava className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />, C{' '}
            <FaCogs className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />.
          </p>
          <p className="text-[12px] lg:ml-[122px] mt-[7px] sm:text-[10px] sm:ml-[38px] md:text-[16px]">
            <span className={`${theme === 'dark' ? 'text-purple-300' : 'text-blue-500'}`}>Libraries/Frameworks: </span>
            Pandas, NumPy, Matplotlib, Flask, ReactJS{' '}
            <SiReact className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />, Tailwind CSS,
            Web Development Bootstrap, OpenCV{' '}
            <SiOpencv className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />, Deep
            Learning, Django{' '}
            <SiDjango className={`${theme === 'dark' ? 'text-purple-600' : 'text-blue-600'} mr-1 inline`} />,
            Microservices, REST API.
          </p>
          {/* <button
            type="button"
            onClick={handleResumeClick}
            className={`ml-[340px] mt-[50px] focus:outline-none text-white ${
              theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'
            } focus:ring-4 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
          >
            Resume
          </button> */}
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-start mt-8 md:mt-[120px] ml-[130px] space-x-1">
          {/* Profile Picture */}
          <img
            src={ProfilePic}
            alt="Viraj Patel"
            className="w-[350px] h-[350px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[350px] lg:h-[350px] rounded-full object-cover"
          />

          {/* Circles */}
          <div className="flex flex-col items-center space-y-4">
            <div
              className={`w-[120px] h-[120px] rounded-full ${
                theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal for Resume Download */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`relative ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} rounded-lg p-8 w-1/3 max-w-sm`}
          >
            <h3
              className={`text-2xl text-center font-semibold ${
                theme === 'dark' ? 'text-purple-600' : 'text-blue-600'
              }`}
            >
              Choose a Resume
            </h3>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => handleDownload('software')}
                className={`text-white ${
                  theme === 'dark' ? 'bg-purple-700 hover:bg-purple-800' : 'bg-blue-700 hover:bg-blue-800'
                } font-medium rounded-lg text-sm px-[12px] py-3`}
              >
                Software Engineering
              </button>
              <button
                onClick={() => handleDownload('dataScience')}
                className={`text-white ${
                  theme === 'dark' ? 'bg-purple-700 hover:bg-purple-800' : 'bg-blue-700 hover:bg-blue-800'
                } font-medium rounded-lg text-sm px-[38px] py-3`}
              >
                Data Science
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
