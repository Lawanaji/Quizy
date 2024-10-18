import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../../Utilities/Request/index'
import loginImage from '../../../assets/design-design-thinking-01-3.svg';
import { useNavigate,Link } from 'react-router-dom';
import {toast} from "react-toastify"
import google from '../../../assets/flat-color-icons_google.svg'
import facebook from '../../../assets/brandico_facebook.svg'
import logo from '../../../assets/quizzypurple.svg'
const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()
    const [loading, setLoading]  = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = async (formData) => {
        setLoading(true);
        if (loading) return;
    
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        };
    
        // const email = formData.email; // Correctly assign the email field
        // const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,}))$/i;
    
        // if (!email || !regex.test(email)) {
        //     setLoading(false);  // Stop the loading spinner
        //     return toast.error("Invalid email provided");
        // }
    
        try {
            const response = await axiosInstance.post('auth/register', data);
            console.log(response.data, 'from on submit');
            
            toast.success("Signup Successful", { autoClose: 4000, pauseOnHover: false });
            
            if (response.data.token) {
                navigate("/dashboard");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <div className='w-full h-screen flex'>
     <div className='w-full py-10 hidden  md:block '>
        <div className='container'>

        <img src={logo} alt=""  />
      <img src={loginImage} alt="" className='w-[70%] object-contain' />
      <h1>Take a Quiz and increase your knowledge</h1>
        </div>
      
      </div>
     
      <div className='bg-primaryColor w-full flex items-center justify-center md:rounded-l-lg'>
        <div className='text-white w-full flex flex-col justify-center items-center p-5'>
          <h1 className='font-semibold text-center md:text-start text-3xl mb-1'>Welcome to Quizzy</h1>
          <h1 className='font-semibold text-center md:text-start text-3xl mb-1'>Create an Account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[350px] min-h-[200px] rounded p-4 text-xs">
            <div className='grid mb-3'>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="full_Name" id="full_Name"  className='p-3 w-full border border-[#D9D9D9] rounded text-primaryColor focus:outline-primaryColor focus:border-primary transition-all' placeholder='Name'
                {...register("name", {required: true})}
                required
                />
            </div>
            <div className='grid mb-3'>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className='p-3 w-full border border-[#D9D9D9] rounded text-primaryColor focus:outline-primaryColor focus:border-primary transition-all'
                {...register("email", { required: true })}
                required
              />
              {errors.email && <p className="text-secondary mt-1">Email field is required</p>}
            </div>

            <div className='grid mb-3'>
              <label htmlFor="password">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                id="password" 
                className='p-3 w-full border border-[#D9D9D9] text-primaryColor rounded focus:outline-primaryColor focus:border-primary transition-all'
                {...register("password", { required: true, minLength: 8 })}
                required
              />
            </div>

            <button 
              type="submit" 
              className='p-3 w-full bg-white border border-[#D9D9D9] mt-6 text-primaryColor rounded flex justify-center items-center gap-2 font-semibold'>
              {loading ? <span className='inline-block w-[20px] h-[20px] rounded-full border-2 border-b-transparent border-primaryColor animate-spin'></span> : null}
              <span>Sign Up</span>
            </button>
          </form>
          <div className='text-center mt-10 space-y-2 '>
            <h1>OR</h1>
            <h2>Sign in With</h2>
              <p>Create an account with</p>
            <span className='flex gap-5 justify-center'>
              <img src={google} alt="" />
              <img src={facebook} alt="" />
            </span>

              <span className='flex gap-5'>
                        <p>Already have an account?  </p>
                      <Link to={'/auth/login'}>Login in</Link>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default Signup
