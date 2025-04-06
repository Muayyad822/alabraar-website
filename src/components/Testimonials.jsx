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
            "Attending the Alabraar Arabiyyah class has truly been a beautiful
            journey, Alhamdulillah. The lessons are impactful, the teachers are
            dedicated and intentional, and you can genuinely feel the effort
            they put into making learning smooth and beneficial. One thing I
            deeply appreciate is the ease of catching up on missed classes, it
            makes consistency less stressful. May Allah reward the organizers
            and increase them in goodness."
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">
            - Haneefah A., Nigeria
          </h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 flex-shrink-0 w-80">
          <FaQuoteLeft className="text-blue-200 text-2xl mb-2 mx-auto" />
          <p className="text-gray-700">
            "Alhamdulillah Words won't do enough justice to how much impact
            these classes has done to my life. I look forward to every Arabiyyah
            classes because of how much Ustadh Taoheed and Ustadh Kelani
            simplify teaching. They really make learning Arabic easy for me. If
            I could describe Ustadh Abdulmuiz has perfect, I'd. He teaches us so
            well and correct us with lots of compassion. He's the kind of
            teacher who turns the classroom into a safe place and treats his
            students like friends."
          </p>
          <h4 className="mt-4 font-semibold text-blue-600">
            - Masturah H., Nigeria
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
