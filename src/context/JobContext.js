import React, { createContext, useState, useEffect } from 'react';

// Sample job data
const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Bangalore',
    experience: '0-1 years',
    type: 'Full-time',
    level: 'Mid',
    description:
        "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovate Ltd',
    location: 'Bangalore',
    experience: '0-1 years',
    type: 'Remote',
    level: 'Junior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 3,
    title: 'FullStack Developer',
    company: 'D Solutions',
    location: 'Hyderabad',
    experience: '3-5 years',
    type: 'Full-time',
    level: 'Senior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 4,
    title: 'React Developer',
    company: 'AA solutions',
    location: 'Chennai',
    experience: '2-4 years',
    type: 'Full-time',
    level: 'Mid',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 5,
    title: 'PHP Developer',
    company: 'Inn Ltd',
    location: 'Bangalore',
    experience: 'Freshers',
    type: 'Part-time',
    level: 'Junior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 6,
    title: 'Python Developer',
    company: 'HD Ltd',
    location: 'chennai',
    experience: '0-1years',
    type: 'part-time',
    level: 'junior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },

  {
    id: 7,
    title: 'java Developer',
    company: 'TC Corp',
    location: 'Bangalore',
    experience: '0-1 years',
    type: 'Full-time',
    level: 'Mid',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 8,
    title: 'Backend Developer',
    company: 'Innovate Ltd',
    location: 'Bangalore',
    experience: '0-1 years',
    type: 'Part-time',
    level: 'Junior',
    description:
     "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 9,
    title: 'FullStack Developer',
    company: 'SS ltd',
    location: 'noida',
    experience: '3-5 years',
    type: 'Remote',
    level: 'Senior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },

  {
    id: 10,
    title: 'Human Resource',
    company: 'GROW TECH',
    location: 'Chennai',
    experience: '1-4 years',
    type: 'Full-time',
    level: 'Mid',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 11,
    title: 'software trainee',
    company: 'Happy Ltd',
    location: 'Bangalore',
    experience: 'Freshers',
    type: ' Intern',
    level: 'Junior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities.",
  },
  {
    id: 12,
    title: 'customer-support',
    company: 'Tech ltd',
    location: 'salem',
    experience: '3-4 years',
    type: 'Full-time',
    level: 'senior',
    description:
      "Join our dynamic team and take your career to the next level with exciting opportunities."
  }



];


export const JobContext = createContext(); // Create the JobContext

// Provider component to manage job state and filters
const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(jobData);
  const [filters, setFilters] = useState({
    role: '',
    experience: '',
    type: '',
    level: '',
  });

  const fetchJobs = async () => {
    try {
      // Simulate an API call with a timeout or replace with actual fetch code
      console.log('Jobs fetched successfully');
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  // Filtering jobs based on selected filters
  const filteredJobs = jobs.filter(
    ({ title, experience, type, level }) =>
      title.toLowerCase().includes(filters.role.toLowerCase()) &&
      experience.toLowerCase().includes(filters.experience.toLowerCase()) &&
      type.toLowerCase().includes(filters.type.toLowerCase()) &&
      level.toLowerCase().includes(filters.level.toLowerCase())
  );

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs: filteredJobs, setFilters }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;