import React from 'react';

const About = ({ theme }) => {
  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-blue-50'}`}>
      <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-playwright text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <span className={`text-transparent bg-clip-text font-playwright ${theme === 'dark' ? 'bg-[#D6B1FD]' : 'bg-[#90C2FD]'}`}>
          Timeline
        </span>
      </h2>

      {/* Timeline Container */}
      <div className={`relative border-l-4 ${theme === 'dark' ? 'border-purple-600' : 'border-blue-500'}`}>
        {/* Timeline Entry 1 */}
        <div className="mb-8 ml-6 flex items-start">
          <div className={`absolute left-[-10px] top-0 h-4 w-4 ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'} rounded-full border-4 border-white`}></div>
          <div className="flex-grow pl-8">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'}`}>MS in Computer Science</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>University of Texas at Arlington | 2024 - Present</p>
          </div>
        </div>

        {/* Timeline Entry 2 */}
        <div className="mb-8 ml-6 flex items-start">
          <div className={`absolute left-[-10px] top-0 h-4 w-4 ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'} rounded-full border-4 border-white`}></div>
          <div className="flex-grow pl-8">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'}`}>Full-Stack Developer Intern (Machine Vision)</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Apgama Technologies & Services, Pune, India | June 2023 - September 2023</p>
            <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
              Designed and developed a Smart Industrial Automation System to analyze object shapes and detect anomalies, ensuring defective products are automatically removed from the production line. Worked on development and integration of both the front-end interface and machine learning model for seamless functionality. Applied data preprocessing, feature extraction, and model training using Python, OpenCV, and advanced deep learning techniques to optimize accuracy. Collaborated with cross-functional teams to analyze client data and optimize models for real-time performance.
            </p>
          </div>
        </div>

        {/* Timeline Entry 3 */}
        <div className="mb-8 ml-6 flex items-start">
          <div className={`absolute left-[-10px] top-0 h-4 w-4 ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'} rounded-full border-4 border-white`}></div>
          <div className="flex-grow pl-8">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'}`}>BE in Computer Science and Engineering</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Sant Gadge Baba University, Amravati | 2018 - 2022</p>
          </div>
        </div>

        {/* Timeline Entry 4 */}
        <div className="mb-8 ml-6 flex items-start">
          <div className={`absolute left-[-10px] top-0 h-4 w-4 ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'} rounded-full border-4 border-white`}></div>
          <div className="flex-grow pl-8">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-blue-700'}`}>Education</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>University Name | 2001 - 2018</p>
            <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
              Including my Primary, Secondary, Higher Education, and 11th and 12th Grade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
