import React from 'react';
import Youtube from '../images/Youtube sentiment analysis.avif';
import SignDetection from '../images/Sign_detection.png';
import NN from '../images/NN.gif';
import KNN from '../images/KNN.png';
import Dashboard from '../images/Dashboard.png';
import Finance from '../images/Finance.png';

const Projects = ({ theme }) => {
  return (
    <div className={`p-4 md:p-8 lg:p-12 mb-[50px] ${theme === 'dark' ? 'bg-black text-white' : 'bg-blue-50 text-black'}`}>
      <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-playwright text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <span className={`text-transparent bg-clip-text font-playwright ${theme === 'dark' ? 'bg-[#D6B1FD]' : 'bg-[#90C2FD]'}`}>
          My Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className={`p-4 rounded-xl shadow-2xl hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'} transition-all duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
          <img src={Youtube} alt="Project 1" className="w-full h-32 object-cover rounded-t-xl mb-4" />
          <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
            Youtube Comment Sentiment Analysis.
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Built a data pipeline for sentiment analysis of YouTube video comments using NLP techniques to generate insights and recommend educational content.
          </p>
          <a 
            href="https://github.com/VRP-github/Youtube_Comment_Sentiment_Analysis" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button" 
              className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-700 hover:bg-purple-800' : 'text-white bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
            >
              View Project
            </button>
          </a>
        </div>

        {/* Project 2 */}
        <div className={`p-4 rounded-xl shadow-lg hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'} transition-all duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
          <img src={SignDetection} alt="Project 2" className="w-full h-32 object-cover rounded-t-xl mb-4" />
          <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
            Hand Sign Detection.
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Developed a real-time hand sign detection system using computer vision and deep learning techniques for alphabet gesture classification.
          </p>
          <a 
            href="https://github.com/VRP-github/HandSign-Detection" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button" 
              className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-700 hover:bg-purple-800' : 'text-white bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
            >
              View Project
            </button>
          </a>
        </div>

        {/* Project 3 */}
        <div className={`p-4 rounded-xl shadow-lg hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'} transition-all duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
          <img src={NN} alt="Project 3" className="w-full h-32 object-cover rounded-t-xl mb-4" />
          <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
            Neural Networks from Scratch.
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A brief description of the project goes here. It can span multiple lines depending on content.
          </p>
          <a 
            href="https://github.com/VRP-github/Neural-Networks-from-Scratch---CIFAR-10-Classification" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button" 
              className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-700 hover:bg-purple-800' : 'text-white bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
            >
              View Project
            </button>
          </a>
        </div>

        {/* Project 4 */}
        <div className={`p-4 rounded-xl shadow-lg hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'} transition-all duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
          <img src={KNN} alt="Project 4" className="w-full h-32 object-cover rounded-t-xl mb-4" />
          <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
            KNN-Based NBA Player Position Prediction.
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Implemented a K-Nearest Neighbors (KNN) model to classify NBA players’ positions based on their performance statistics.
          </p>
          <a 
            href="https://github.com/VRP-github/KNN--Based-NBA-Player-Position-Prediction" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button" 
              className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-700 hover:bg-purple-800' : 'text-white bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
            >
              View Project
            </button>
          </a>
        </div>

        {/* Project 5 */}
        <div className={`p-4 rounded-xl shadow-lg hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'} transition-all duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
          <img src={Dashboard} alt="Project 5" className="w-full h-32 object-cover rounded-t-xl mb-4" />
          <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
            Trade Journaling Website.
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Developed a full-stack trade journaling website to help traders track, analyze, and help them optimize their trades.
          </p>
          <a 
            href="https://github.com/VRP-github/Tradinginsight-frontend" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button" 
              className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-700 hover:bg-purple-800' : 'text-white bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
            >
              View Project
            </button>
          </a>
        </div>

        {/* Project 6 */}
        <div className={`p-4 rounded-xl shadow-lg hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'} transition-all duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
          <img src={Finance} alt="Project 6" className="w-full h-32 object-cover rounded-t-xl mb-4" />
          <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
            Finance Website Landing Page.
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Built an infinite scrolling Landing Page of a Finance Website that showcases the services the website has to offer including the Newsletter sign-up and Subscription pricing Section.
          </p>
          <a 
            href="https://github.com/VRP-github/Finance_react" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              type="button" 
              className={`mt-[10px] focus:outline-none ${theme === 'dark' ? 'text-white bg-purple-700 hover:bg-purple-800' : 'text-white bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2`}
            >
              View Project
            </button>
          </a>
        </div>
      </div>
      <div className={`mt-8 text-center ${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'}`}>
        <p className="text-lg font-medium">
          To see more Projects, visit my{' '}
          <a
            href="https://github.com/VRP-github?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline font-bold ${theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-blue-600'}`}
          >
            Github.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
