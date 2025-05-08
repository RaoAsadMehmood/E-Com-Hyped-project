import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: 'What is Amazon FBA Automation?',
    content:
      'Amazon FBA Automation is a service where we manage your Amazon store for you, handling everything from product sourcing to inventory management, customer service, and sales optimization, so you can focus on growing your business.',
  },
  {
    title: 'How long does it take to see results?',
    content:
      'Results vary depending on your store setup and market conditions, but most clients start seeing significant improvements in sales and profitability within 3-6 months of implementing our automation solutions.',
  },
  {
    title: 'What makes EcomHyped different?',
    content:
      'At EcomHyped, we prioritize transparency, tailored solutions, and long-term partnerships. Our team uses cutting-edge technology and industry expertise to ensure your Amazon store reaches its maximum potential.',
  },
  {
    title: 'Can I customize the services I receive?',
    content:
      'Absolutely! We offer fully customizable FBA automation packages to meet your specific needs, whether you’re just starting out or looking to scale an existing store.',
  },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-[#334047]">
                  {item.title}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xl ${openIndex === index ? 'text-teal-600' : 'text-[#F7A51E]'}`}
                >
                  {openIndex === index ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </motion.span>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-[#334047] text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;