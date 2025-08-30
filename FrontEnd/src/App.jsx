import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import Contact from './genral/Contact'
import Home from './genral/Home'
import Member from './genral/Member'
import OurServices from './genral/OurServices'
// import About from './genral/About'
// import Enquiry from './genral/Enquiry'
import Imagegallary from './genral/Imagegallary'
import NewUser from './genral/NewUser'
import Login from './genral/Login'
import ViewJob from './genral/ViewJob'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
        {/* <Home /> */}
         {/* <OurServices /> */}
            <Routes>
                
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/Home" element={<Home/>}></Route> */}
                  
                <Route path="/OurServices" element={<OurServices />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Imagegallary" element={<Imagegallary />}></Route>

                <Route path="/NewUser" element={<NewUser />}></Route>


                <Route path="/ViewJob" element={<ViewJob />}></Route>


                <Route path="/Login" element={<Login />}></Route>




            </Routes>


            {/* <About /> */}
            {/* <OurServices/> */}
            {/* <Contact /> */}
            {/* <Enquiry /> */}


            <Footer />
        <Toaster />
        </BrowserRouter>
    );
}

export default App