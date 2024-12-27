import React, { useState } from 'react';
import SE from '../images/IBM(SE).png';
import IBM from '../images/IBM.png';
import LDN from '../images/Linkedin.png';
import Agile from '../images/Agile.png';
import DS from '../images/DS.png';
import PY from '../images/Python_C.jpg';

const Certificates = ({ theme }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={`p-4 sm:p-6 md:p-8 lg:p-12 ${theme === 'dark' ? 'bg-black' : 'bg-blue-50'}`}>
      <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-playwright text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <span className={`text-transparent bg-clip-text font-playwright ${theme === 'dark' ? 'bg-[#D6B1FD]' : 'bg-[#90C2FD]'}`}>
          My Certificate
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Certificate 1 */}
        <div className={`flex flex-col sm:flex-row ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]`}>
          <div className="flex-shrink-0 sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={SE}
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Introduction to Software Engineering"
              onClick={() => handleImageClick(SE)}
            />
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-400'} mb-2`}>
              Introduction to Software Engineering
            </h3>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Issued Date:</span> Dec 2024
            </p>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Credential ID:</span> 1WX4INTUHKYK
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/4AJYEPQJEO63"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-purple-500 hover:text-purple-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <button type="button" className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-900' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}>
                View Credentials
              </button>
            </a>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className={`flex flex-col sm:flex-row ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]`}>
          <div className="flex-shrink-0 sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={IBM}
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Introduction to HTML, CSS, and JavaScript"
              onClick={() => handleImageClick(IBM)}
            />
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-400'} mb-2`}>
              Introduction to HTML, CSS, and JavaScript
            </h3>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Issued Date:</span> Dec 2024
            </p>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Credential ID:</span> 4AJYEPQJEO63
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/1WX4INTUHKYK"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-purple-500 hover:text-purple-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <button type="button" className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-900' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}>
                View Credentials
              </button>
            </a>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className={`flex flex-col sm:flex-row ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]`}>
          <div className="flex-shrink-0 sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={LDN}
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Artificial Intelligence Foundations: Machine Learning"
              onClick={() => handleImageClick(LDN)}
            />
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-400'} mb-2`}>
              Artificial Intelligence Foundations: Machine Learning
            </h3>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Issued Date:</span> May 2024
            </p>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Credential ID:</span> bc19a0c9b5ccb5109
              77b88dfb9cbc70c0b426c92652
              7e905f87fc7ac61717a8a
            </p>
            <a
              href="https://www.linkedin.com/learning/certificates/bc19a0c9b5ccb510977b88dfb9cbc70c0b426c926527e905f87fc7ac61717a8a"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-purple-500 hover:text-purple-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <button type="button" className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-900' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}>
                View Credentials
              </button>
            </a>
          </div>
        </div>

        {/* Certificate 4 */}
        <div className={`flex flex-col sm:flex-row ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]`}>
          <div className="flex-shrink-0 sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={Agile}
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Artificial Intelligence Foundations: Machine Learning"
              onClick={() => handleImageClick(Agile)}
            />
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-400'} mb-2`}>
              Agile Foundations 
            </h3>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Issued Date:</span> Jan 2023
            </p>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Credential ID:</span>dbVO4RjfUQU7yR7xz3
              sbQ-Py3_F
            </p>
            <a
              href="https://www.linkedin.com/learning/certificates/6b4df569f467d8300c3cc686bb7109f2b8f2424e2d3d37ffed5a31c8fd7e91b4"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-purple-500 hover:text-purple-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <button type="button" className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-900' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}>
                View Credentials
              </button>
            </a>
          </div>
        </div>
        
        {/* Certificate 5 */}
        <div className={`flex flex-col sm:flex-row ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]`}>
          <div className="flex-shrink-0 sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={DS}
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Artificial Intelligence Foundations: Machine Learning"
              onClick={() => handleImageClick(DS)}
            />
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-400'} mb-2`}>
              A Data Structures A-Z : Data Structures + Algorithms Bootcamp 
            </h3>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Issued Date:</span> Mar 2022
            </p>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Credential ID:</span>UC-63893d74-8d7c-484c-9e7a-
              08b717e4bc37
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-63893d74-8d7c-484c-9e7a-08b717e4bc37/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-purple-500 hover:text-purple-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <button type="button" className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-900' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}>
                View Credentials
              </button>
            </a>
          </div>
        </div>

        {/* Certificate 6 */}
        <div className={`flex flex-col sm:flex-row ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]`}>
          <div className="flex-shrink-0 sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={PY}
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Artificial Intelligence Foundations: Machine Learning"
              onClick={() => handleImageClick(PY)}
            />
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-400'} mb-2`}>
              Python for Beginners
            </h3>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Issued Date:</span> Jan 2022
            </p>
            <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} mb-4`}>
              <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-blue-500'}`}>Credential ID:</span>UC-c4228d25-255f-44fa-8e95-
              9e9b3ff80d42
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-c4228d25-255f-44fa-8e95-9e9b3ff80d42/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-purple-500 hover:text-purple-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <button type="button" className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-900' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}>
                View Credentials
              </button>
            </a>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-3xl mx-auto p-4 bg-white rounded-lg">
            <img
              src={selectedImage}
              alt="Certificate Image"
              className="w-full h-auto rounded-lg shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
        <div className={`mt-8 text-center ml-[20px] ${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'}`}>
          <p className="text-lg font-medium">
            To see more Certificates, visit my{' '}
            <a
              href="https://www.linkedin.com/in/viraj-rpatel/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline font-bold ${theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-blue-600'}`}
            >
              Linkedin.
            </a>
          </p>
        </div>
    </div>
  );
};

export default Certificates;
