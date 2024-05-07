"use client"
import React, { useState } from 'react';

interface FAQItem {
  
    title: string;
    content: string;
  }
  
  interface FAQsProps {
    faqs: FAQItem[];
  }

  const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setActiveAccordion((prevActiveAccordion) =>
        prevActiveAccordion === index ? null : index
      );
    };

  return (
    
    <div className="accordion">
    {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <button
            id={`accordion-button-${index}`}
            aria-expanded={activeAccordion === index}
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-title">{faq.title}</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div
            className={`accordion-content ${
              activeAccordion === index ? 'active' : ''
            }`}
          >
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;