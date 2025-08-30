import React from 'react'
import './NewUser.css';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const NewUser = () => {

    const [data,setData] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        setData(prev => ({...prev , [name]:value}))
    }


    useEffect(() => {
        console.log(data)
    },[data])


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
           const res =  await axios.post("http://localhost:8080/api/user/register" , data)
           console.log(res , "this is register response")
           toast.success(res?.data?.message)
        } catch (error) {
            console.log(error , "This is error")
            toast.error(error?.response?.data?.message)
        }
    }

  return (
   <>
     
   <section className="NewUser">
    <form onSubmit={(e) => handleFormSubmit(e)} className='bg-gradient-to-r from-blue-500 to-indigo-500'>
        <h2>Registration </h2>
        <div className="input-box">
            <label>First Name</label>
            <input type="text" value={data.username} onChange={(e) => handleInputChange(e)} className="field" placeholder="Enter your Name" name="username" required />
        </div>
         {/* <div className="input-box">
            <label>Last Name</label>
            <input type="text" className="field" placeholder="Enter your Name" name="name" required />
        </div> */}
        {/* <div className="input-box">
            <label>Father Name</label>
            <input type="text" className="field" placeholder="Enter your Father Name" name=" Father name" required />
        </div> */}
         {/* <div className="input-box">
            <label>DOB</label>
            <input type="date" className="field" placeholder="Enter your DOB" name="dob" required />
        </div> */}
        {/* <div className="input-box">
            <label>Qalification</label>
            <input type="text" className="field" placeholder="Enter your Qualification" name="qalification" required />
        </div> */}
        {/* <div className="input-box">
            <label>Address</label>
            <input type="text" className="field" placeholder="Enter your Address" name="address" required />
        </div> */}
        {/* <div className="input-box">
            <label>Mobile No </label>
            <input type="number" className="field" placeholder="Enter  your Number" name="number" required />
        </div> */}
          <div className="input-box">
            <label>Email id</label>
            <input type="email" value={data.email}  onChange={(e) => handleInputChange(e)} className="field" placeholder="Enter  your Email" name="email" required />
        </div>
        <div className="input-box">
            <label>Password</label>
            <input type="password" value={data.password}  onChange={(e) => handleInputChange(e)} className="field" placeholder="Enter  your Password" name="password" required />
        </div>


        {/* <div className="input-box">
            <label>Confirm Password</label>
            <input type="password" className="field" placeholder="Conferm password" name="email" required /> 
            </div> */}

            <button type="submit" >Send Message</button>
    </form>


   </section>
   </>
  )
}

export default NewUser