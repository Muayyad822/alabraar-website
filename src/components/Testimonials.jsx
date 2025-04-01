import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-blue-600">
        What Our Students Say
      </h2>
      <div
        className="flex gap-8 mt-8 max-w-4xl mx-auto overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#3182ce #edf2f7" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 flex-shrink-0 w-80">
          <FaQuoteLeft className="text-blue-200 text-2xl mb-2 mx-auto" />
          <p className="text-gray-700">
            "AlAbraar Islamic Foundation has helped me improve my Quran
            recitation significantly. The teachers are very knowledgeable!"
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">- Aisha S., USA</h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 flex-shrink-0 w-80">
          <FaQuoteLeft className="text-blue-200 text-2xl mb-2 mx-auto" />
          <p className="text-gray-700">
            "I now understand Arabic grammar better and can converse fluently
            thanks to their amazing Arabic course!"
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">
            - Ahmed M., Canada
          </h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 flex-shrink-0 w-80">
          <FaQuoteLeft className="text-blue-200 text-2xl mb-2 mx-auto" />
          <p className="text-gray-700">
            "The Idaady program has deepened my understanding of Fiqh and
            Seerah. Highly recommended!"
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">
            - Fatima H., Nigeria
          </h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 flex-shrink-0 w-80">
          <FaQuoteLeft className="text-blue-200 text-2xl mb-2 mx-auto" />
          <p className="text-gray-700">
            "The online classes are very interactive and engaging. I feel more
            connected to my faith now."
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">- Yusuf K., UK</h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 flex-shrink-0 w-80">
          <FaQuoteLeft className="text-blue-200 text-2xl mb-2 mx-auto" />
          <p className="text-gray-700">
            "Their Tajweed course is exceptional. I can now recite the Quran
            with proper pronunciation."
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">
            - Zainab L., Australia
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
