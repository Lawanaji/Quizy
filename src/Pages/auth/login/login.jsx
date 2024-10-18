import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../../Utilities/Request/index'
import loginImage from '../../../assets/design-design-thinking-01-3.svg';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit  = async (formData) => {
    setLoading(true);
    if (loading) return;
    const data = {
      email: formData.email,
      password: formData.password
    }
    const { email } = formData;
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (!email || !regex.test(email)) {
      return toast.error("Invalid email provided")
    }

    try {
      const response = await axiosInstance.post('/auth/login', data)
      console.log(response.data, 'from on submit ')
        toast.success("Login Successful", {autoClose: 4000, pauseOnHover:false})
        localStorage.setItem('accessToken', response.data.token)
        navigate("/dashboard");
        if(!response.data.token){
          toast.error(response.data.message)
          }
        
      } catch (error) {
        toast.error(error.message || "an error occur")
      }finally{
            setLoading(false)
      }
   
  };

  return (
    <div className='w-full h-screen flex'>
      <img src={loginImage} alt="" className='hidden w-[60%] md:block' />
      <div className='bg-primaryColor w-[40%] flex items-center justify-center md:rounded-l-lg'>
        <div className='text-white w-full flex flex-col justify-center items-center p-5'>
          <h1 className='font-semibold text-center md:text-start text-4xl mb-1'>Welcome to Quizzy</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[350px] min-h-[200px] rounded p-4 text-xs">
            <div className='grid mb-6'>
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

            <div className='grid mb-4'>
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
              className='p-3 w-full bg-white border border-[#D9D9D9] text-primaryColor rounded flex justify-center items-center gap-2 font-semibold'>
              {loading ? <span className='inline-block w-[20px] h-[20px] rounded-full border-2 border-b-transparent border-primaryColor animate-spin'></span> : null}
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
