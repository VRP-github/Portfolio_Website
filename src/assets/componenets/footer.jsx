import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import Font Awesome icons

const Footer = ({ theme }) => {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-purple-300' : 'bg-blue-100 text-blue-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Contact Me Section */}
        <h3 className={`${theme === 'dark' ? 'text-purple-400' : 'text-blue-700'} text-2xl sm:text-3xl font-semibold mb-4`}>Contact Me</h3>
        <p className={`${theme === 'dark' ? 'text-purple-200' : 'text-blue-800'} mb-4`}>
          <span className="font-bold">I am Currently Seeking Internship opportunities in Software Engineering and AI/ML Field.</span>
        </p>
        <p className={`${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'} mb-2`}>
          Feel free to get in touch if you have any questions or opportunities you'd like to discuss.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Email Link with Font Awesome Icon */}
          <a
            href="mailto:virajpatel2399@gmail.com"
            className={`flex items-center mt-2 ${theme === 'dark' ? 'text-purple-300 hover:text-purple-400' : 'text-blue-700 hover:text-blue-500'}`}
          >
            <FaEnvelope className="h-6 w-6 inline-block mr-2" />
            virajpatel2399@gmail.com
          </a>

          {/* Phone Link with Font Awesome Icon */}
          <a
            href="tel:+13465809179"
            className={`flex items-center mt-2 ${theme === 'dark' ? 'text-purple-300 hover:text-purple-400' : 'text-blue-700 hover:text-blue-500'}`}
          >
            <FaPhoneAlt className="h-6 w-6 inline-block mr-2" />
            (346) 580 9179
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          {/* LinkedIn Link with Font Awesome Icon */}
          <a
            href="https://www.linkedin.com/in/viraj-rpatel"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${theme === 'dark' ? 'text-purple-300 hover:text-purple-400' : 'text-blue-700 hover:text-blue-500'}`}
          >
            <FaLinkedin className="h-6 w-6 inline-block mr-2" />
            www.linkedin.com/in/viraj-rpatel
          </a>

          {/* GitHub Link with Font Awesome Icon */}
          <a
            href="https://github.com/VRP-github"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${theme === 'dark' ? 'text-purple-300 hover:text-purple-400' : 'text-blue-700 hover:text-blue-500'}`}
          >
            <FaGithub className="h-6 w-6 inline-block mr-2" />
              https://github.com/VRP-github
          </a>
        </div>

        {/* Footer Bottom */}
        <div className={`${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} text-center mt-12 text-sm`}>
          <p>© 2024 Viraj Patel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
