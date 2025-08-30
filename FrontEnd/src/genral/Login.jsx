import React, { useEffect, useState } from 'react'
import './Login.css'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';




const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        password: "",
        email: ""
    });

    const handleInputchange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/user/login", data)
            console.log(res);
            toast.success(res?.data?.message)
            window.location.href = 'http://localhost:5174';
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (

        <form onSubmit={(e) => handleFormSubmit(e)} className="containers bg-gradient-to-r from-blue-500 to-indigo-500 ">
            <h1 className='Loginh'>Login </h1>
            <div className="inputs">
                <input type="email" name='email' value={data.email} onChange={(e) => handleInputchange(e)} placeholder="Email" />
                <input type="password" name='password' value={data.password} onChange={(e) => handleInputchange(e)} placeholder="Password" />
            </div>
            <button >Login</button>
        </form>
    )
}

export default Login

// import React, { useState } from 'react';

// const Login = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Login Successful!');
//     console.log(form);
//     setForm({ name: '', email: '', password: '' });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 px-4">
//       <div className="w-full max-w-md bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-5 ">
//           <div>
//             <label className="block text-white mb-1">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="John Doe"
//               className="w-full px-4 py-2 rounded-md bg-white border focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-white mb-1">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="example@mail.com"
//               className="w-full px-4 py-2 rounded-md bg-white border focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-white mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               placeholder="••••••••"
//               className="w-full px-4 py-2 rounded-md bg-white border focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;