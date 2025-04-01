import {FaFemale, FaMale } from "react-icons/fa";

const Teachers = () => {
     const teachers = [
            {
                name: "Ustadh Ahmed Abdullah",
                subject: "Quranic Studies",
                bio: "An expert in Tajweed and Quranic memorization with 10+ years of teaching experience.",
                gender: "male"
            },
            {
                name: "Ustadha Fatima Yusuf",
                subject: "Arabic Language",
                bio: "Fluent in Arabic with a degree in Islamic Linguistics, passionate about making Arabic easy to learn.",
                gender: "female"
            },
            {
                name: "Sheikh Muhammad Ali",
                subject: "Islamic Studies",
                bio: "Islamic scholar specializing in Fiqh and Seerah, dedicated to spreading authentic Islamic knowledge.",
                gender: "male"
            },
            {
                name: "Ustadh Ibrahim Khan",
                subject: "Quranic Recitation",
                bio: "Qari with ijazah in Hafs recitation and 15 years of teaching experience.",
                gender: "male"
            },
            {
                name: "Ustadha Amina Hassan",
                subject: "Tajweed",
                bio: "Certified Tajweed instructor with a passion for helping students perfect their Quranic recitation.",
                gender: "female"
            },
            {
                name: "Sheikh Abdullah Omar",
                subject: "Hadith Studies",
                bio: "Specialist in Hadith sciences with a focus on Sahih collections and their practical applications.",
                gender: "male"
            },
            {
                name: "Ustadha Maryam Ali",
                subject: "Islamic History",
                bio: "Historian with a deep understanding of Islamic civilization and its contributions to the world.",
                gender: "female"
            },
            {
                name: "Ustadh Yusuf Kareem",
                subject: "Fiqh",
                bio: "Fiqh expert with a focus on contemporary issues and their solutions based on Islamic jurisprudence.",
                gender: "male"
            },
            {
                name: "Ustadha Khadijah Suleiman",
                subject: "Arabic Grammar",
                bio: "Arabic linguist with a talent for simplifying complex grammatical concepts for students.",
                gender: "female"
            },
            {
                name: "Sheikh Bilal Ahmed",
                subject: "Tafseer",
                bio: "Renowned scholar in Quranic exegesis, providing deep insights into the meanings of the Quran.",
                gender: "male"
            }
        ];
  return (
    <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold text-blue-600">Meet Our Teachers</h2>
                <div
                    className="flex gap-8 mt-8 max-w-7xl mx-auto overflow-x-auto scroll-smooth"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "#3182ce #edf2f7" }}
                >
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center flex-shrink-0 w-80 transform transition duration-300"
                        >
                            {teacher.gender === "male" ? (
                                <FaMale className="w-32 h-32 mx-auto text-blue-500" />
                            ) : (
                                <FaFemale className="w-32 h-32 mx-auto text-pink-500" />
                            )}
                            <h3 className="text-xl font-semibold mt-4">{teacher.name}</h3>
                            <p className="text-blue-600 font-medium">{teacher.subject}</p>
                            <p className="text-gray-600 mt-2">{teacher.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
  )
}

export default Teachers