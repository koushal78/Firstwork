import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Contract', 'Remote'],
    default: 'Full-time',
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  expireAt: {
    type: Date, 
  },

  // ✅ Additional fields from the new schema
  requirements: {
    type: [String],
    default: []
  },
  education: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    trim: true
  },
  skills: {
    type: [String],
    default: []
  },
  additionalRequirements: {
    type: String
  },
  companyDescription: {
    type: String
  },
  founded: {
    type: String
  },
  size: {
    type: String
  },
  headquarters: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  benefits: {
    type: [String],
    default: []
  }
});

const Job = mongoose.model("Job", JobSchema);
export default Job;
