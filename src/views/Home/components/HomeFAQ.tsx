import { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-4 flex justify-between items-center hover:bg-gray-50/50 transition-colors rounded-lg px-2"
    >
      <h3 className="text-base font-medium text-white pr-4 text-left">
        {question}
      </h3>
      <span className="text-Blue3 flex-shrink-0 ml-2">
        {isOpen ? <BiMinus size={20} /> : <BiPlus size={20} />}
      </span>
    </button>
    
    <div className={`overflow-hidden transition-all duration-200 ease-out ${
      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <p className="pb-4 px-2 text-Blue3 text-sm">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
        que: 'What is gogetwell.ai?',
        ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
    },
    {
        que: 'What is the AI Front Office for Healthcare Agents?',
        ans: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.',
    },
    {
        que: 'How does the AI Agent assist me in my healthcare business?',
        ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.',
    },
    {
        que: 'Can I customize the website for my healthcare services?',
        ans: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.',
    },
    {
        que: 'How does this platform support independent healthcare facilitators like me?',
        ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.',
    },
    {
        que: 'How does the platform help me manage patient leads?',
        ans: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.',
    },
    {
        que: 'Is it easy to integrate the platform with the hospitals I work with?',
        ans: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.',
    },
    {
        que: 'Is the platform secure and compliant with healthcare regulations?',
        ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.",
    },
    {
        que: 'How quickly can I get started with the platform?',
        ans: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.',
    },
    {
        que: 'What kind of customer support is available if I need help?',
        ans: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.',
    },
    {
        que: 'How does the platform help me attract more patients?',
        ans: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.',
    },
];

  return (
    <div className="bg-Blue0 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-white font-semibold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="h-px w-16 bg-gray-300 mx-auto" />
        </div>

        <div className="space-y-1  border border-gray-100 rounded-xl shadow-sm">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.que}
              answer={faq.ans}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;