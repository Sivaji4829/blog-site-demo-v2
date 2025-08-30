// src/components/Faq.jsx

import React from "react";

// NEW: Data for the FAQ section based on Garlapati Ravi Kiran's profile
const faqData = [
  {
    question: "What are Garlapati Ravi Kiran's qualifications?",
    answer:
      "Garlapati Ravi Kiran holds a Bachelor of Commerce (B.Com) and has completed the CA(Inter) level of the Chartered Accountancy course.",
  },
  {
    question: "What is Ravi Kiran's primary area of expertise?",
    answer:
      "He has extensive experience in tax consultancy and financial advisory. His main expertise lies in navigating complex tax laws to help businesses.",
  },
  {
    question: "How can Ravi Kiran help my business?",
    answer:
      "Ravi Kiran assists businesses in two key ways: achieving full compliance with all tax regulations and optimizing their financial strategies for better performance and growth.",
  },
  {
    question: "What is Ravi Kiran's role at the firm?",
    answer:
      "As a cornerstone of the firm, Ravi Kiran plays a fundamental and crucial role in its operations, particularly in guiding clients through their financial challenges.",
  },
  {
    question: "What is his working philosophy?",
    answer:
      'His guiding principle is that "Success is a journey, not a destination." He is committed to being a steadfast guide for his clients every step of the way.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-danger-custom fw-bold text-uppercase small-heading mb-1">
            FAQ's
          </p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="accordion" id="faqAccordion">
              {faqData.map((item, index) => (
                <div className="accordion-item mb-3" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;