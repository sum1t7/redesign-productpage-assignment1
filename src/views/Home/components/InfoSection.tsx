import * as React from 'react';
import { ReactNode } from 'react';
import aboutUs from '@/assets/images/about_us.gif';
import mission from '@/assets/images/our_mission.gif';
import challenges from '@/assets/images/challenges_solve.gif';

interface SectionProps {
  img: any;
  icon1: ReactNode;
  icon2: ReactNode;
  title: string;
  content: string[];
  features: Array<{ title: string; description: string }>;
  align: 'left' | 'right';
}

const Section: React.FC<SectionProps> = ({ align, img, icon1, icon2, title, content, features }) => {
  return (
    <div className={`flex flex-col gap-12 lg:gap-16 lg:flex-row items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
       <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img}
          alt={title}
          className="rounded-xl object-cover w-full max-w-md hover:scale-[1.01] transition-transform"
        />
      </div>

       <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
          <div className="h-[2px] w-16 bg-primary/80 rounded-full" />
        </div>

        <div className="space-y-5">
          {content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="p-2 text-primary rounded-lg transition-colors">
                {index === 0 ? icon1 : icon2}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FullPageSections = () => {
  const sections = [
    {
      img: aboutUs,
      icon1: (
        <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
            />
        </svg>
    ),
    icon2: (
        <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>),
       
      title: 'About Us',
      content: [
        'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry through modern solutions that enhance operational efficiency and patient care.',
        'Our cutting-edge technology streamlines processes while maintaining a human-centric approach to healthcare experiences.'
      ],
      features: [
        { title: 'Modern Solutions', description: 'AI-powered healthcare technology' },
        { title: 'Patient-Centric', description: 'Personalized care experiences' }
      ],
      align: 'left' as const
    },
    {
      img: mission,
      icon1: (
        <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
    icon2: (
        <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
        </svg>
    ),
      title: 'Our Mission',
      content: [
        'Simplifying medical tourism through intelligent tools that optimize operations and create stress-free treatment journeys.',
        'Our platform drives digital transformation in healthcare tourism management.'
      ],
      features: [
        { title: 'AI Optimization', description: 'Smart operational management' },
        { title: 'Growth Focus', description: 'Revenue maximization strategies' }
      ],
      align: 'right' as const
    }
  ];

  return (
    <div className="bg-white border-b-2 border-Blue3 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
        
        {/* Challenges Section */}
        <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={challenges}
              alt="Challenges solved"
              className="rounded-xl object-cover w-full max-w-md"
            />
          </div>
 
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-gray-900">The Challenges We Solve</h2>
              <div className="h-[2px] w-16 bg-primary/80 rounded-full" />
            </div>
 
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed">
                Addressing disorganization in medical tourism through streamlined solutions 
                that enhance efficiency and patient support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform transforms outdated practices into modern, technology-driven processes.
              </p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 text-primary rounded-lg">
                  <svg className="w-6 h-6" /*...*/ />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Efficient Operations</h3>
                  <p className="text-gray-600 text-sm">Automated booking and management systems</p>
                </div>
              </div>
 
              <div className="flex items-start gap-4">
                <div className="p-2 text-primary rounded-lg">
                  <svg className="w-6 h-6" /*...*/ />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Enhanced Support</h3>
                  <p className="text-gray-600 text-sm">24/7 multilingual patient communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageSections;