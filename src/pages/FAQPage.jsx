import { useState } from 'react';

function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (question) => {
    setOpenQuestions({
      ...openQuestions,
      [question]: !openQuestions[question],
    });
  };

  const questions = [
    {
        question: 'Do I need to be home for the clean? Should I leave or should I stay?',
        answer: 'You don’t need to be home for the cleaning, but it’s ok if you are, it’s up to you, we adjust to your needs.',
    },
    {
        question: 'How long does it take to get my place finished?',
        answer: 'Every location is different, the average time is between 4 and 6 hours depending on the size of the house, the type of cleaning and the requests of every client.',
    },
    {
        question: 'What kind of products do you use? Are they chemical free?',
        answer: 'All our products are ecofriendly, they take all the dirt and germs without affecting your health with harmful chemicals.',
    },
    {
        question: 'Do you bring all the appliances, products and equipment for the job?',
        answer: 'Yes, we have all the special equipment needed to performance and excellent quality job.',
    },
    {
        question: 'I would like MAID ON CALL to use my appliances and my own products, is that an issue?',
        answer: 'No, you just let us know what appliances and products you like us to use.',
    },
    {
        question: 'How many people will be working in my place?',
        answer: 'Everyplace is different, usually we have 2 cleaners, but it depends on the size of the house, the type of cleaning and the requests of every client.',
    },
    {
        question: 'How do you estimate the quote for my home or my office?',
        answer: ['We need you to let us know some details of your home or office to receive your customized rate for your service, it depends on the size of the house, the type of cleaning and the requests of every client.', 
        <p key="p-1">Sometimes the actual cost might vary from the estimated price, in this case we will contact you before to discuss how to move forward.</p>,]
    },
    {
        question: 'What are the payment methods I can use?',
        answer: 'You could either place the payment though e-transfer, cash, check or paypal.',
    },
    {
        question: 'Can I request a specific time for my service?',
        answer: 'Yes, you just need to let us know your availability.',
    },
    {
        question: 'What information do your need to know about my home?',
        answer: 'Is important to us to meet your expectations, mostly we need to know the size and distribution of your place, the type of service you choose, and any special request you have.',
    },
    {
        question: 'Is there something that MAID ON CALL doesn’t do?',
        answer: 'We do everything inside your house or office, we don’t do any duty outside your property.',
    },
    {
        question: 'Do I have to sign a contract?',
        answer: 'No, you don’t.',
    },
    {
        question: 'Do you offer a guarantee with your service?',
        answer: 'We certainly do, we want you to be 100% satisfied, if you are not satisfy simply call us within 24 hours and we will come back and reclean it free of charge.',
    },
    {
        question: 'How do I book my service?',
        answer: 'You can contact us by phone at 613-618-0969, by e-mail at info@maidoncall.ca  or book your appointment online, we will happy to assist you.',
    },
  ];

  return (
    <>
      <section
        className="relative w-full h-80 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/about.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-1 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto bg-blue-50 rounded-lg shadow-xl p-6">
          {questions.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className="flex justify-between w-full p-4 text-left focus:outline-none border border-gray-300"
                onClick={() => toggleQuestion(item.question)}
              >
                <h2 className="text-xl font-semibold text-blue-600">
                  {item.question}
                </h2>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openQuestions[item.question] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestions[item.question] && (
                <div className="p-4 text-gray-600 border border-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQPage;