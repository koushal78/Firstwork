import Footer from "@/components/Footer";
import { Briefcase, FileUser, SquareUser } from "lucide-react";

const Landing = () => {
  return (
    <>
      <div className="text-white h-[calc(100vh-100px)] flex justify-center items-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Fresh Talent Meets Fresh Opportunities
        </h1>
      </div>

     <div className="bg-black overflow-x-hidden pt-20 pb-10">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <h1 className="text-2xl sm:text-3xl text-white text-center font-bold mb-10">
            Features
          </h1>

          <div className="flex flex-col gap-10 items-center">
            {/* Feature 1 */}
            <div className="self-start flex flex-col items-center h-auto w-80 sm:w-96 bg-[#232429] rounded-lg p-6 shadow-lg shadow-[#2b2b6a]">
              <Briefcase className="text-blue-700 mb-4" size={48} />
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
                Find Best Job
              </h2>
              <p className="text-white text-base sm:text-lg text-left leading-relaxed">
                Discover a wide range of job opportunities tailored for freshers across various industries.
                Apply with confidence and kickstart your career journey with the right role.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="  flex flex-col items-center h-auto w-80 sm:w-96 bg-[#232429] rounded-lg p-6 shadow-lg shadow-[#2b2b6a] self-end">
              <FileUser className="text-blue-700 mb-4" size={48} />
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
                Make Your Resume
              </h2>
              <p className="text-white text-base sm:text-lg text-left leading-relaxed">
                Build your professional resume instantly with AI-tailored content.
                Get the best ATS (Applicant Tracking System) score insights and formatting tips.
                Check your resume's ATS compatibility and improve it for better job visibility.
              </p>
            </div>

            {/* Feature 3 */}
            <div className=" self-start flex flex-col items-center h-auto w-80 sm:w-96 bg-[#232429] rounded-lg p-6 shadow-lg shadow-[#2b2b6a]">
              <SquareUser className="text-blue-700 mb-4" size={48} />
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
                Interview Preparation
              </h2>
              <p className="text-white text-base sm:text-lg text-left leading-relaxed">
                Practice live interviews with AI and experience real interview scenarios.
                Get personalized feedback to improve your answers and boost your confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
