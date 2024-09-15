import React, { useState } from 'react';
import './FAQ.css';

interface FAQ {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    { question: "How does AGRIBS connect farmers with buyers?", answer: "AGRIBS connects farmers and buyers through a platform that enables direct communication and transaction facilitation." },
    { question: "Is there a fee to use AGRIBS?", answer: "AGRIBS is free to use for buyers. Sellers may have different subscription models." },
    { question: "How do I ensure the quality of the produce I buy?", answer: "AGRIBS allows reviews and ratings from previous buyers, and sellers are verified on the platform." },
    { question: "What delivery options are available?", answer: "AGRIBS provides various delivery options, including standard and express delivery." },
    { question: "How do I get started with AGRIBS?", answer: "Simply sign up on the AGRIBS website, create your profile, and start browsing products." },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h3 className="faq-title">FAQs</h3>
      <h2 className="faq-subtitle">Maybe Your Question Is One Of These</h2>
      <p className="faq-description">Find answers to common questions about how AGRIBS connects farmers with buyers</p>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;