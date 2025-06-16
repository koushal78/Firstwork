import axios from "axios";
import { useState } from "react";




type resumeType = {
  fullName: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    education: string;
    experience: string;
    skills: string;
    certifications: string;
    linkedin: string;
    github: string;
    portfolio:string;

  
}

export default function Build() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
    certifications: '',
    linkedin: '',
    github: '',
    portfolio: ''
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);

      try {
    // Step 1: Get LaTeX code from your backend
    const resume = await axios.post('http://localhost:8000/api/resume/create-resume', formData);
    const latexCode = resume.data.latex;

    // Step 2: Compile to PDF using latexonline.cc
    const pdfResponse = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://latexonline.cc/compile",
      { code: latexCode },
      { responseType: 'blob' }
    );

    // Step 3: Download the PDF
    const blob = new Blob([pdfResponse.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  }catch (error) {
      console.log("there is problem in the resume creation", error);
    }

    alert('Resume data submitted! Check console for details.');
  };

  return (
    <div className="min-h-screen bg-black text-purple-200 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8 text-center">
          AI Resume Builder
        </h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">Full Name</label>
              <input 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none" 
                placeholder="John Doe" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">Email</label>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none" 
                placeholder="john@example.com" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">Phone</label>
              <input 
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none" 
                placeholder="(123) 456-7890" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">Address</label>
              <input 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none" 
                placeholder="123 Main St, City, State" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">LinkedIn</label>
              <input 
                name="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none" 
                placeholder="https://linkedin.com/in/yourprofile" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">GitHub</label>
              <input 
                name="github"
                type="url"
                value={formData.github}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none" 
                placeholder="https://github.com/yourusername" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-purple-300 ml-1">Professional Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none"
              rows={4}
              placeholder="Experienced software developer with expertise in..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">Education</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none"
                rows={4}
                placeholder="University of Technology, BS Computer Science, 2018-2022"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-purple-300 ml-1">Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none"
                rows={4}
                placeholder="Software Engineer, Tech Corp, 2022-Present"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-purple-300 ml-1">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none"
              rows={3}
              placeholder="JavaScript, React, Node.js, CSS, TypeScript"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-purple-300 ml-1">Certifications / Achievements</label>
            <textarea
              name="certifications"
              value={formData.certifications}
              onChange={handleInputChange}
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 outline-none"
              rows={3}
              placeholder="AWS Certified Developer, 1st Place Hackathon 2023"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-lg font-medium shadow-lg hover:from-purple-600 hover:to-purple-800 transform hover:scale-[1.02] transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer"
          >
            Generate Resume
          </button>
        </div>
      </div>
    </div>
  );
}