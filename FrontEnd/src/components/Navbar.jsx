import React from 'react'
// import './NewUser'

const Navbar = () => {
  return (
<div className="navbar bg-base-200 shadow-sm  bg-gray border-1 border-info  rounded rounded-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href='/'>Home</a></li>
        {/* <li> */}
          {/* <a>Parent</a>
          <ul className="p-2"> */}
             <li><a href='/Ourservices'>Our Services</a></li>
             <li><a href='/Contact'>Enquiry/Contact</a></li>
          {/* </ul> */}
        {/* </li> */}
        <li><a href='/Imagegallary'>Image Gallery</a></li>
         <li><a href='/Newuser'>New user</a></li>
          <li><a href='/Viewjob'>view Job</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Jobify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/'>Home</a></li>
      <li><a href='/Ourservices'>Our Services</a></li>
      <li><a href='/Contact'>Enquiry/Contact</a></li>
        <li><a href='/Imagegallary'>Image Gallery</a></li>
          <li><a href='/Newuser'>New user</a></li>
            <li><a href='/Viewjob'>view Job</a></li>
              <li><a href='/Login'>Login</a></li>

    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn bg-primary h-10 w-20  text-white" href='/Login'>Login</a>

    
  </div> */}
</div>                          
  );
}

export default Navbar