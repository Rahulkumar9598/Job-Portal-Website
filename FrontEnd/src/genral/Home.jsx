// import React from 'react'

// const Home = () => {
//   return (
    
//    <>
//    <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content text-center">
//     <div className="max-w-md">
//       <h1 className="text-5xl font-bold">Search Your Job</h1>
//       <p className="py-6">
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//         quasi. In deleniti eaque aut repudiandae et a id nisi.
//       </p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
// </>
     

//   )
// }

// export default Home




// import 'bootstrap/dist/css/bootstrap.min.css';

// import React from 'react';

// const Home = () => {
//   const categories = [
//     'IT & Software',
//     'Marketing',
//     'Design',
//     'Finance',
//     'Healthcare',
//     'Education',
//   ];

//   const jobs = [
//     {
//       title: 'React Developer',
//       company: 'TechNova',
//       location: 'Remote',
//       salary: '₹12–16 LPA',
//     },
//     {
//       title: 'Product Designer',
//       company: 'Designify',
//       location: 'Bangalore',
//       salary: '₹8–10 LPA',
//     },
//     {
//       title: 'SEO Specialist',
//       company: 'GrowthEdge',
//       location: 'Delhi',
//       salary: '₹6–8 LPA',
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="mb-10 md:mb-0 md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job with <span className="text-yellow-300">Jobify</span></h1>
//             <p className="text-lg mb-6">Thousands of opportunities are waiting for you. Get hired today.</p>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="text"
//                 placeholder="Search job title..."
//                 className="px-4 py-2 rounded bg-white text-black focus:outline-none w-full sm:w-64"
//               />
//               <button className="bg-success text-black px-6 py-2 rounded  ">
//                 Search Jobs
//               </button>
//             </div>
//           </div>
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/job-seeking-5696616-4751035.png"
//             alt="Job search"
//             className="w-full md:w-1/2 max-w-md"
//           />
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-12 px-4 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {categories.map((cat, i) => (
//               <div
//                 key={i}
//                 className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-4 rounded shadow-sm cursor-pointer transition"
//               >
//                 {cat}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Jobs */}
//       <section className="py-12 bg-gray-50 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-10">Featured Jobs</h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {jobs.map((job, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
//                 <p className="text-sm text-gray-700 mt-1">{job.company} · {job.location}</p>
//                 <p className="text-green-600 text-sm font-medium mt-2">{job.salary}</p>
//                 <button className="mt-4 inline-block text-blue-600 hover:underline text-sm">
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
    
//     </div>
//   );
// };

// export default Home;
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';




const categories = [
  'Technology',
  'Marketing',
  'Finance',
  'Healthcare',
  'Engineering',
  'Design',
  'Sales',
  'Education',
];

const featuredJobs = [
  { title: 'Frontend Developer', company: 'TechCorp', location: 'New York, NY' },
  { title: 'Marketing Manager', company: 'Marketify', location: 'Remote' },
  { title: 'Data Scientist', company: 'DataGen', location: 'San Francisco, CA' },
  { title: 'UX/UI Designer', company: 'DesignHub', location: 'Chicago, IL' },
  { title: 'UX/UI Designer', company: 'DesignHub', location: 'Chicago, IL' },
  { title: 'UX/UI Designer', company: 'DesignHub', location: 'Chicago, IL' },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Find Your Dream Job with <span className="text-warning">Jobify</span></h1>
          <p className="lead">Search thousands of job listings from top companies</p>

          <form className="row g-3 justify-content-center mt-4">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Job title or keyword" />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Location" />
            </div>
            <div className="col-md-3 px-2 ">
              <button className="btn btn-warning w-100 ">Search</button>
            </div>
          </form>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Explore Job Categories</h2>
          <div className="row g-3 justify-content-center">
            {categories.map((category, index) => (
              <div className="col-6 col-sm-4 col-md-3" key={index}>
                <div className="card shadow-sm h-100 p-4 text-center">
                  <h5>{category}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Jobs</h2>
          <div className="row g-4">
            {featuredJobs.map((job, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{job.title}</h5>
                    <p className="card-text">{job.company}</p>
                    <small className="text-muted">{job.location}</small>
                    <a href="#" className="btn btn-primary mt-3 w-100">Apply Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">How Jobify Works</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="card p-4">
                <h5>1. Create an Account</h5>
                <p>Sign up to build your profile and start browsing job listings.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4">
                <h5>2. Search Jobs</h5>
                <p>Browse thousands of job listings across various industries.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4">
                <h5>3. Apply</h5>
                <p>Find your perfect job and apply directly through our platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold">Ready to start your job search?</h3>
          <p className="lead">Join Jobify today and take the next step in your career.</p>
          <button className="btn btn-warning btn-lg">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
