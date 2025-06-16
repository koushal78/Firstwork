import {  useState } from "react";
import {
  Briefcase, MapPin, IndianRupee, Calendar, Check, Plus, Building, 
  GraduationCap, Clock, Lightbulb, FileText, Globe, Users, Award
} from "lucide-react";
import axios from "axios";

type JobForm = {
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  postedDate: string;
  expiryDate: string;
  description: string;
  requirements: string[];
  education: string;
  experience: string;
  skills: string[];
  additionalRequirements: string;
  companyDescription: string;
  founded: string;
  size: string;
  headquarters: string;
  industry: string;
  website: string;
  benefits: string[];
};

const CreateJob = () => {
  const [form, setForm] = useState<JobForm>({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    postedDate: "",
    expiryDate: "",
    description: "",
    requirements: [""],
    education: "",
    experience: "",
    skills: [""],
    additionalRequirements: "",
    companyDescription: "",
    founded: "",
    size: "",
    headquarters: "",
    industry: "",
    website: "",
    benefits: [""],
  });

  const postJob = async (jobData: JobForm) => {
    try {
      const data = await axios.post('http://localhost:8000/api/job/create_job', jobData);
      console.log("Posted job:", data.data);
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  const [tab, setTab] = useState<"job" | "requirements" | "eligibility" | "company">("job");

  const handleChange = (field: keyof JobForm, value: string | string[], index?: number) => {
    if (Array.isArray(form[field])) {
      const arr = [...(form[field] as string[])];
      if (typeof index === "number") arr[index] = value as string;
      setForm({ ...form, [field]: arr });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const addField = (field: keyof JobForm) => {
    const arr = [...(form[field] as string[])];
    arr.push("");
    setForm({ ...form, [field]: arr });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    postJob(form);
    console.log("Submitted Job:", form);
    alert("Job Posted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <header className="bg-blue-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-center text-white">Create a New Job</h1>
          <p className="text-blue-100 text-center mt-2">Complete all sections to post your job listing</p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center p-4 bg-gray-900">
          {[
            { id: "job", icon: <Briefcase size={18} /> },
            { id: "requirements", icon: <FileText size={18} /> },
            { id: "eligibility", icon: <GraduationCap size={18} /> },
            { id: "company", icon: <Building size={18} /> }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`flex items-center px-5 py-3 rounded-lg text-sm font-medium mx-2 transition-all duration-200 ${
                tab === t.id 
                  ? "bg-blue-600 text-white shadow-lg transform scale-105" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">{t.icon}</span>
              {t.id[0].toUpperCase() + t.id.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* Job Info */}
          {tab === "job" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Job Title" icon={<Briefcase />} value={form.title} onChange={(v) => handleChange("title", v)} />
                <Input label="Company" icon={<Building />} value={form.company} onChange={(v) => handleChange("company", v)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Location" icon={<MapPin />} value={form.location} onChange={(v) => handleChange("location", v)} />
                <Input label="Salary" icon={<IndianRupee />} value={form.salary} onChange={(v) => handleChange("salary", v)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input label="Job Type" icon={<Clock />} value={form.jobType} onChange={(v) => handleChange("jobType", v)} />
                <Input label="Posted Date" type="date" icon={<Calendar />} value={form.postedDate} onChange={(v) => handleChange("postedDate", v)} />
                <Input label="Expiry Date" type="date" icon={<Calendar />} value={form.expiryDate} onChange={(v) => handleChange("expiryDate", v)} />
              </div>
              <TextArea label="Job Description" icon={<FileText />} value={form.description} onChange={(v) => handleChange("description", v)} />
            </div>
          )}

          {/* Requirements */}
          {tab === "requirements" && (
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 text-blue-300">Job Requirements</h3>
                <div className="space-y-4">
                  {form.requirements.map((req, i) => (
                    <Input
                      key={i}
                      label={`Requirement ${i + 1}`}
                      icon={<Check />}
                      value={req}
                      onChange={(v) => handleChange("requirements", v, i)}
                    />
                  ))}
                  <button 
                    onClick={() => addField("requirements")} 
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 bg-gray-800 py-2 px-4 rounded-lg transition-colors"
                  >
                    <Plus size={16} /> Add Requirement
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Eligibility */}
          {tab === "eligibility" && (
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 text-blue-300">Candidate Qualifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input label="Education" icon={<GraduationCap />} value={form.education} onChange={(v) => handleChange("education", v)} />
                  <Input label="Experience" icon={<Clock />} value={form.experience} onChange={(v) => handleChange("experience", v)} />
                </div>
                
                <h4 className="font-medium mb-4 text-blue-200">Required Skills</h4>
                <div className="space-y-4">
                  {form.skills.map((skill, i) => (
                    <Input 
                      key={i} 
                      label={`Skill ${i + 1}`} 
                      icon={<Lightbulb />} 
                      value={skill} 
                      onChange={(v) => handleChange("skills", v, i)} 
                    />
                  ))}
                  <button 
                    onClick={() => addField("skills")} 
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 bg-gray-800 py-2 px-4 rounded-lg transition-colors"
                  >
                    <Plus size={16} /> Add Skill
                  </button>
                </div>
                
                <div className="mt-6">
                  <TextArea 
                    label="Additional Requirements" 
                    icon={<FileText />} 
                    value={form.additionalRequirements} 
                    onChange={(v) => handleChange("additionalRequirements", v)} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* Company */}
          {tab === "company" && (
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 text-blue-300">Company Details</h3>
                
                <TextArea 
                  label="Company Description" 
                  icon={<Building />} 
                  value={form.companyDescription} 
                  onChange={(v) => handleChange("companyDescription", v)} 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Input label="Founded" type="number" icon={<Calendar />} value={form.founded} onChange={(v) => handleChange("founded", v)} />
                  <Input label="Size" icon={<Users />} value={form.size} onChange={(v) => handleChange("size", v)} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Input label="Headquarters" icon={<MapPin />} value={form.headquarters} onChange={(v) => handleChange("headquarters", v)} />
                  <Input label="Industry" icon={<Briefcase />} value={form.industry} onChange={(v) => handleChange("industry", v)} />
                </div>
                
                <Input label="Website" icon={<Globe />} value={form.website} onChange={(v) => handleChange("website", v)} className="mt-6" />
                
                <h4 className="font-medium mt-6 mb-4 text-blue-200">Employee Benefits</h4>
                <div className="space-y-4">
                  {form.benefits.map((b, i) => (
                    <Input 
                      key={i} 
                      label={`Benefit ${i + 1}`} 
                      icon={<Award />} 
                      value={b} 
                      onChange={(v) => handleChange("benefits", v, i)} 
                    />
                  ))}
                  <button 
                    onClick={() => addField("benefits")} 
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 bg-gray-800 py-2 px-4 rounded-lg transition-colors"
                  >
                    <Plus size={16} /> Add Benefit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-500 shadow-lg transition-all duration-200 flex items-center justify-center mx-auto"
            >
              <Check className="w-5 h-5 mr-2" /> Post Job
            </button>
          </div>
        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-6">
        © 2025 Your Job Portal
      </footer>
    </div>
  );
};

export default CreateJob;

// Reusable Input
const Input = ({
  label,
  value,
  onChange,
  icon,
  type = "text",
  className = ""
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ReactNode;
  type?: string;
  className?: string;
}) => (
  <div className={className}>
    <label className="block mb-2 font-medium text-sm text-gray-300">{label}</label>
    <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden border border-gray-600 focus-within:border-blue-500 transition-colors">
      {icon && <span className="pl-4 text-gray-400">{icon}</span>}
      <input
        type={type}
        className="w-full bg-transparent p-3 focus:outline-none text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);

// Reusable TextArea
const TextArea = ({
  label,
  value,
  onChange,
  icon
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ReactNode;
}) => (
  <div>
    <label className="block mb-2 font-medium text-sm text-gray-300">{label}</label>
    <div className="bg-gray-700 rounded-lg border border-gray-600 focus-within:border-blue-500 transition-colors overflow-hidden">
      {icon && <span className="pl-4 pt-3 text-gray-400 flex">{icon}</span>}
      <textarea
        className="w-full bg-transparent p-3 focus:outline-none text-white"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);