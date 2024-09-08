import React, { createContext, useState, useEffect } from 'react';

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
      'Develop and maintain web applications using for React.js, javascript and HTML/CSS style.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovate Ltd',
    location: 'Bangalore',
    experience: '0-1 years',
    type: 'Part-time',
    level: 'Junior',
    description:
      'Working on server-side logic, APIs and Database Management  using Node.js and MySQL.',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'D Solutions',
    location: 'Hyderabad',
    experience: '3-5 years',
    type: 'Full-time',
    level: 'Senior',
    description:
      'Create and manage for both client and server side software, working on front and back-end.',
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
      'Develop and maintain web applications using React.js for  frontend with styles.',
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
      'Work on server-side logic for backend, database management, and APIs using php.',
  },
  {
    id: 6,
    title: 'Python Developer',
    company: 'HD Ltd',
    location: 'chennai',
    experience: '0-1years',
    type: 'Full-time & part-time',
    level: 'junior',
    description:
      'Create and manage server software, work on front and back-end.',
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
      'Develop and maintain applications using java/oops concept for fullstack development role',
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
      'Work on server-side logic, database management, and APIs using Node.js and MySQL.',
  },
  {
    id: 9,
    title: 'Full Stack Developer',
    company: 'SS ltd',
    location: 'noida',
    experience: '3-5 years',
    type: 'Remote',
    level: 'Senior',
    description:
      'Create and manage both client and server-side software, work on full systems, full-Stack.',
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
      'Develop and maintain the Human Resource Role and also recuruitment the freshers.',
  },
  {
    id: 11,
    title: 'software trainee',
    company: 'Happy Ltd',
    location: 'Bangalore',
    experience: 'Freshers',
    type: 'Part-time & Intern',
    level: 'Junior',
    description:
      'Work on server-side logic role, and software design to develope the tarinee .',
  },
  {
    id: 12,
    title: 'customer-support',
    company: 'Tech ltd',
    location: 'salem',
    experience: '3-4 years',
    type: 'Full-time & part-time',
    level: 'senior',
    description:
      'customer support role ,attend and enquring calls and e-mail supporting.'
  },

  //  job data 
];

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(jobData);
  const [filters, setFilters] = useState({
    role: '',
    experience: '',
    type: '',
    level: '',
  });

    // Function to simulate fetching job data (can be modified to fetch from an API)
    const fetchJobs = async () => {
      // Simulating an API call with a timeout
      try {
        // For a real API call, replace this with actual fetch code:
        // const response = await fetch('/api/jobs');
        // const data = await response.json();
        // setJobs(data);
        console.log('Jobs fetched successfully'); // Log message for testing
      } catch (error) {
        console.error('Failed to fetch jobs:', error); // Error handling
      }
    };
  


  // Filtering jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.role.toLowerCase()) &&
      job.experience.toLowerCase().includes(filters.experience.toLowerCase()) &&
      job.type.toLowerCase().includes(filters.type.toLowerCase()) &&
      job.level.toLowerCase().includes(filters.level.toLowerCase())
    );
  });

    // Fetch jobs on component mount
    useEffect(() => {
      fetchJobs();
    }, [])   // Empty dependency array ensures this runs once on mount

  return (
    <JobContext.Provider value={{ jobs: filteredJobs, setFilters }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;