import * as React from 'react'
import './home.css'
import {
    BiCreditCard,
    BiGlobeAlt,
    BiMessageSquare,
    BiSearch,
    BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

const solutions = [
    {
        icon: <BiGlobeAlt />,
        title: 'Custom AI-Powered Website',
        description:
            'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        color: 'bg-blue-500',
    },
    {
        icon: <FaUserSecret />,
        title: 'Enhanced Patient Conversion',
        description:
            'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        color: 'bg-purple-500',
    },
    {
        icon: <BiMessageSquare />,
        title: 'Real-Time Query Handling',
        description:
            'Instant response system for patient inquiries with AI-powered chat support.',
        color: 'bg-green-500',
    },
    {
        icon: <FiFileText />,
        title: 'Medical Report Analysis',
        description:
            'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        color: 'bg-orange-500',
    },
    {
        icon: <BiTrendingUp />,
        title: 'Improved Lead Generation',
        description:
            'Data-driven lead generation strategies to attract and engage potential patients.',
        color: 'bg-pink-500',
    },
    {
        icon: <BsDatabase />,
        title: 'Comprehensive Healthcare Database',
        description:
            'Extensive medical information database for accurate patient guidance and support.',
        color: 'bg-indigo-500',
    },
    {
        icon: <LuLanguages />,
        title: 'Multilingual Support',
        description:
            'Breaking language barriers with comprehensive multilingual communication tools.',
        color: 'bg-red-500',
    },
    {
        icon: <BiCreditCard />,
        title: 'Seamless Payment Handling',
        description:
            'Secure and efficient payment processing for medical services globally.',
        color: 'bg-teal-500',
    },
    {
        icon: <BiSearch />,
        title: 'Marketing And SEO Support',
        description:
            'Optimized digital presence with advanced SEO and marketing strategies.',
        color: 'bg-cyan-500',
    },
]

const FeaturesGrid: React.FC = () => {
    return (
      <div className="py-20 bg-Blue3 px-4 border-b-2 border-white md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-Blue0 mb-5">
              Comprehensive Solutions
            </h2>
            <div className="h-1 w-20 bg-Blue0 mx-auto rounded-full opacity-80" />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-[] border-2 border-white rounded-xl p-6 transition-all duration-300 ease-in hover:bg-gray-50 relative"
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`${solution.color} w-max p-3 rounded-lg mb-5 transition-colors`}
                  >
                    <div className="text-2xl text-white">{solution.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                    {solution.description}
                  </p>
                  
                  <div className={`w-12 h-1 ${solution.color} transition-width duration-300 group-hover:w-24`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default FeaturesGrid
