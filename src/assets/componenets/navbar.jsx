import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = ({ homeRef, projectsRef, certificatesRef, aboutRef, footerRef, toggleTheme, theme }) => {
  // Scroll function
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`flex flex-wrap justify-center md:justify-start mt-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-300'} text-white p-4 rounded-xl w-[490px] md:w-[490px] shadow-lg gap-4`}>
        <div
          className={`font-semibold cursor-pointer mt-[6px] ${
            theme === 'dark' ? 'hover:text-purple-500 active:text-purple-600' : 'hover:text-blue-500 active:text-blue-600'
          }`}
          onClick={() => handleScroll(homeRef)}
        >
          Viraj Patel
        </div>
        <div
          className={`font-semibold cursor-pointer mt-[6px] ${
            theme === 'dark' ? 'hover:text-purple-500 active:text-purple-600' : 'hover:text-blue-500 active:text-blue-600'
          }`}
          onClick={() => handleScroll(projectsRef)}
        >
          Projects
        </div>
        <div
          className={`font-semibold cursor-pointer mt-[6px] ${
            theme === 'dark' ? 'hover:text-purple-500 active:text-purple-600' : 'hover:text-blue-500 active:text-blue-600'
          }`}
          onClick={() => handleScroll(certificatesRef)}
        >
          Certificates
        </div>
        <div
          className={`font-semibold cursor-pointer mt-[6px] ${
            theme === 'dark' ? 'hover:text-purple-500 active:text-purple-600' : 'hover:text-blue-500 active:text-blue-600'
          }`}
          onClick={() => handleScroll(aboutRef)}
        >
          Timeline
        </div>
        <div className="flex space-x-4 mt-2">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/viraj-rpatel" target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              className={`text-2xl ${
                theme === 'dark' ? 'text-purple-600 hover:text-purple-500' : 'text-blue-600 hover:text-blue-500'
              }`}
            />
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/VRP-github" target="_blank" rel="noopener noreferrer">
            <FaGithub
              className={`text-2xl ${
                theme === 'dark' ? 'text-purple-600 hover:text-purple-500' : 'text-black hover:text-blue-500'
              }`}
            />
          </a>
        </div>

        {/* Dark/Light Mode Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className="font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <span className="group inline-flex shrink-0 justify-center items-center size-9">
            {theme === 'dark' ? (
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
