
import { useState } from 'react';
import { MapPin, IndianRupee, Briefcase, Clock, Calendar, ArrowLeft, Building, GraduationCap, User, Users, Award, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const ApplyJob = () => {
  const [activeTab, setActiveTab] = useState('description');

  // Mock job data - in a real application, you would fetch this based on the job ID from your API
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "Nexo Private",
    location: "Bangalore, India",
    salary: "10 LPA",
    jobType: "Full Time",
    postedDate: "Apr 26, 2025",
    expiryDate: "May 26, 2025",
    daysLeft: 22,
    description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building the client-side of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.",
    requirements: [
      "3+ years of experience with React.js and modern JavaScript frameworks",
      "Proficiency in HTML5, CSS3, and responsive web design",
      "Experience with state management libraries (Redux, MobX, or Context API)",
      "Knowledge of RESTful APIs and GraphQL",
      "Strong understanding of UI/UX design principles",
      "Experience with testing frameworks like Jest, React Testing Library, or Cypress",
      "Familiarity with version control systems (Git)",
      "Excellent problem-solving and communication skills"
    ],
    eligibility: {
      education: "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      experience: "Minimum 3 years of relevant experience",
      skills: ["JavaScript", "React.js", "TypeScript", "HTML5", "CSS3", "Git", "Responsive Design"],
      additionalRequirements: "Portfolio of previous work demonstrating frontend development skills"
    },
    companyDetails: {
      name: "Nexo Private",
      description: "Nexo Private is a leading technology company specializing in fintech solutions. We develop cutting-edge applications that transform how businesses and individuals manage their finances. With a team of over 200 professionals worldwide, we're on a mission to make financial services more accessible and user-friendly.",
      founded: 2018,
      size: "201-500 employees",
      headquarters: "Bangalore, India",
      industry: "Financial Technology",
      website: "https://nexoprivate.com",
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Modern office space with recreational areas",
        "Regular team events and activities"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black  py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link to="/jobs" className="flex items-center text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Job Listings
        </Link>

        {/* Job Details Card (Expanded) */}
        <div className="bg-[#1F2937] rounded-md shadow-md overflow-hidden mb-6">
          <div className="flex justify-between p-6">
            <div className="text-white">
              <p className="text-3xl font-semibold leading-tight">{job.title}</p>
              <p className="text-[#2480f2] text-xl font-medium mt-2">{job.company}</p>
              <div className="flex items-center gap-2 text-gray-400 mt-3">
                <MapPin className="w-5 h-5 flex-shrink-0" /> 
                <span>{job.location}</span>
              </div>
            </div>
            <div className="bg-amber-800/20 text-amber-400 px-4 py-2 h-fit rounded-full text-sm font-medium flex items-center">
              {job.daysLeft} days left
            </div>
          </div>

          <hr className="border-gray-700 mx-6" />
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <IndianRupee className="w-5 h-5 mr-3 text-gray-400" /> 
                <span className="text-lg">{job.salary}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Briefcase className="w-5 h-5 mr-3 text-gray-400" /> 
                <span className="text-lg">{job.jobType}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-3 text-gray-400" /> 
                <span>Posted: {job.postedDate}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-3 text-gray-400" /> 
                <span>Expires: {job.expiryDate}</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700 mb-6">
              <button 
                className={`pb-3 px-4 font-medium ${activeTab === 'description' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`pb-3 px-4 font-medium ${activeTab === 'requirements' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('requirements')}
              >
                Requirements
              </button>
              <button 
                className={`pb-3 px-4 font-medium ${activeTab === 'eligibility' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('eligibility')}
              >
                Eligibility
              </button>
              <button 
                className={`pb-3 px-4 font-medium ${activeTab === 'company' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('company')}
              >
                Company
              </button>
            </div>

            {/* Tab Content */}
            <div className="mb-6">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div className="text-gray-300 space-y-4">
                  <p className="leading-relaxed">
                    {job.description}
                  </p>
                  <p className="leading-relaxed">
                    The ideal candidate will have a strong understanding of web technologies and a passion for creating intuitive, user-friendly interfaces. You'll work closely with our design and backend teams to implement new features and ensure high-quality user experiences across all our products.
                  </p>
                  <p className="leading-relaxed">
                    This is a full-time position with opportunities for growth and professional development. We offer competitive compensation and a collaborative work environment where your ideas and contributions will be valued.
                  </p>
                  <div className="pt-4">
                    <h3 className="font-medium text-white text-lg mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Develop new user-facing features using React.js and related technologies</li>
                      <li>Build reusable components and libraries for future use</li>
                      <li>Ensure the technical feasibility of UI/UX designs</li>
                      <li>Optimize applications for maximum speed and scalability</li>
                      <li>Collaborate with other team members and stakeholders</li>
                      <li>Maintain code quality and organization</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Requirements Tab */}
              {activeTab === 'requirements' && (
                <div className="text-gray-300 space-y-4">
                  <h3 className="font-medium text-white text-lg mb-3">Technical Requirements:</h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex">
                        <Check className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <h3 className="font-medium text-white text-lg mb-3">Technical Skills:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.eligibility.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium text-white text-lg mb-3">Other Qualifications:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Ability to work independently and as part of a team</li>
                      <li>Strong problem-solving skills and attention to detail</li>
                      <li>Excellent time management and organizational abilities</li>
                      <li>Familiarity with Agile development methodologies</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Eligibility Tab */}
              {activeTab === 'eligibility' && (
                <div className="text-gray-300 space-y-6">
                  <div className="flex items-start">
                    <GraduationCap className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-white text-lg mb-1">Education</h3>
                      <p>{job.eligibility.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-white text-lg mb-1">Experience</h3>
                      <p>{job.eligibility.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-white text-lg mb-1">Additional Requirements</h3>
                      <p>{job.eligibility.additionalRequirements}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 mt-6">
                    <p className="text-gray-400 italic">
                      Note: Selected candidates will need to complete a technical assessment as part of the hiring process.
                    </p>
                  </div>
                </div>
              )}

              {/* Company Tab */}
              {activeTab === 'company' && (
                <div className="text-gray-300 space-y-6">
                  <div className="flex items-start">
                    <Building className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-white text-lg mb-1">About {job.companyDetails.name}</h3>
                      <p className="leading-relaxed">{job.companyDetails.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Founded:</span>
                      <span>{job.companyDetails.founded}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Size:</span>
                      <span>{job.companyDetails.size}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Headquarters:</span>
                      <span>{job.companyDetails.headquarters}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Industry:</span>
                      <span>{job.companyDetails.industry}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium text-white text-lg mb-3">Benefits & Perks:</h3>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {job.companyDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Apply Button */}
            <div className="pt-4 mt-6 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <div className="text-gray-400">
                  <p>Application deadline: {job.expiryDate}</p>
                </div>
                <Link to="/apply" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center">
                  Apply Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;