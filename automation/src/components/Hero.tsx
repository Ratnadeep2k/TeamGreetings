import  { useState } from 'react';
import { CalendarDays, Mail, Users, Briefcase, Sun, Moon } from 'lucide-react';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-800';

  return (
    <div className={`${themeClasses} min-h-screen flex flex-col justify-center transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Celebrate Your Team's Milestones
            </h1>
            <p className={`text-lg sm:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Automatically send personalized wishes on birthdays and work anniversaries. Keep your team connected and appreciated.
            </p>
            <div className="space-x-4">
              <button className={`${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-2 px-6 rounded-full transition duration-300`}>
                Sign Up Now
              </button>
              <button className={`border ${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-900' : 'border-blue-600 text-blue-600 hover:bg-blue-50'} font-semibold py-2 px-6 rounded-full transition duration-300`}>
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
            <FeatureCard 
              icon={<CalendarDays size={24} />}
              title="Birthday Wishes"
              description="Never miss a team member's birthday again."
              isDarkMode={isDarkMode}
            />
            <FeatureCard 
              icon={<Briefcase size={24} />}
              title="Work Anniversaries"
              description="Celebrate career milestones automatically."
              isDarkMode={isDarkMode}
            />
            <FeatureCard 
              icon={<Mail size={24} />}
              title="Personalized Emails"
              description="Send custom messages to each team member."
              isDarkMode={isDarkMode}
            />
            <FeatureCard 
              icon={<Users size={24} />}
              title="Team Management"
              description="Easily add and manage your entire team."
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, isDarkMode }:any) => {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} p-6 rounded-lg border shadow-sm hover:shadow-md transition duration-300`}>
      <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>{icon}</div>
      <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
};

export default Hero;