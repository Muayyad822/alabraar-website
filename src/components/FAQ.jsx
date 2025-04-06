import { useState } from "react";


const FAQ = () => {
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "What courses do you offer?",
            answer: "We offer courses in various fields including Quran Memorisation, Quran Recitation, Arabic Language and Islamic studies."
        },
        {
            question: "Is the school 100% online?",
            answer: "Yes, all our courses are conducted online, allowing students to learn from anywhere in the world."
        },
        {
            question: "What is the mode of instruction?",
            answer: "We offer live online classes, recorded sessions, and self-paced study materials."
        },
        {
            question: "Are the courses accredited?",
            answer: "Yes, our courses are recognized and accredited by relevant educational bodies."
        },
        {
            question: "How do I enroll?",
            answer: "Simply visit the Admission page, fill out the form, and our team will contact you with the next steps."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-16 bg-gray-100 px-6">
                <h2 className="text-4xl font-bold text-blue-600 text-center">Frequently Asked Questions</h2>
                <div className="mt-8 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border-b border-gray-300">
                            <button
                                className="w-full text-left p-4 bg-white text-gray-800 font-semibold focus:outline-none flex justify-between items-center rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{openIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === index && (
                                <p className="p-4 text-gray-600 bg-gray-50 rounded-b-lg">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
  )
}

export default FAQ