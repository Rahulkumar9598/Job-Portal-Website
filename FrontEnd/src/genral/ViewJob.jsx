// import React from 'react'
// import './ViewJob.css';

// const VeiwJob = () => {
//   return (
//     <div className='job'>
//    <select defaultValue="Pick a text editor" className="select select-primary  my-6 ml-40">
//   <option>Qualification</option>
//   <option>VScode</option>
//   <option>VScode fork</option>
//   <option>Another VScode fork</option>
// </select>


//   <select defaultValue="Pick a text editor" className="select select-primary mx-10  my-6  ml-20">
//   <option >Skill</option>
//   <option>VScode</option>
//   <option>VScode fork</option>
//   <option>Another VScode fork</option>
// </select>

// <select defaultValue="Color scheme" className="select select-accent mx-10  my-6 ml-40">
//   <option >Country</option>
//   <option>Light mode</option>
//   <option>Dark mode</option>
//   <option>System</option>
// </select>


// <select defaultValue="Color scheme" className="select select-accent mx-10 my-6 ml-10">
//   <option >State</option>
//   <option>Light mode</option>
//   <option>Dark mode</option>
//   <option>System</option>
// </select>


// <select defaultValue="Color scheme" className="select select-accent mx-10 my-6  ml-40">
//   <option >CGPA</option>
//   <option>Light mode</option>
//   <option>Dark mode</option>
//   <option>System</option>
// </select>

// <select defaultValue="Color scheme" className="select select-accent mx-10">
//   <option disabled={true}>Upload Resume</option>
//   <option>Light mode</option>
//   <option>Dark mode</option>
//   <option>System</option>
// </select>

// <select defaultValue="Color scheme" className="select select-accent  mx-10 my-6  ml-40">
//   <option >Experinces</option>
//   <option>Light mode</option>
//   <option>Dark mode</option>
//   <option>System</option>
// </select>

// <select defaultValue="Color scheme" className="select select-accent  mx-10 my-6  ml-10">
//   <option >Select Post</option>
//   <option>Light mode</option>
//   <option>Dark mode</option>
//   <option>System</option>
// </select>
// </div>


//   )
// }

// export default VeiwJob

// import React from 'react';
// import './ViewJob.css'

import React from 'react';


const ViewJob = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'PixelCraft Tech',
      location: 'Remote',
      description: 'Build responsive UIs using React and Tailwind CSS.',
    },
    {
      title: 'Backend Developer',
      company: 'CodeWave Systems',
      location: 'Bangalore, India',
      description: 'Develop robust server-side logic with Node.js and Express.',
    },
    {
      title: 'AI / ML Job',
      company: 'NeuroNet Labs',
      location: 'Hyderabad, India',
      description: 'Work on machine learning models and real-world AI applications.',
    },
    {
      title: 'Assistant Manager',
      company: 'BusinessCore Pvt Ltd',
      location: 'Mumbai, India',
      description: 'Manage daily operations and assist in business planning.',
    },
    {
      title: 'DBA (Database Admin)',
      company: 'DataSecure Inc.',
      location: 'Delhi, India',
      description: 'Maintain database systems and ensure high performance.',
    },
    {
      title: 'React Developer',
      company: 'FrontendGenix',
      location: 'Remote',
      description: 'Create scalable components and manage app state using React.',
    },
  ];

  return (
    <div className="bg-gray-100 py-18 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center pb-9 text-blue-700 mb-10">
          Browse Job Listings
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                {job.company} • {job.location}
              </p>
              <p className="text-gray-700 text-sm mb-4">{job.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewJob;