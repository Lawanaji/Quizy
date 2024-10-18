import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../../Utilities/Request/index';
import loginImage from '../../../assets/design-design-thinking-01-3.svg';
import google from '../../../assets/flat-color-icons_google.svg'
import facebook from '../../../assets/brandico_facebook.svg'
import logo from '../../../assets/quizzypurple.svg'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    if (loading) return;

    const data = {
      email: formData.email,
      password: formData.password
    };

    const { email } = formData;
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email || !regex.test(email)) {
      setLoading(false); 
      return toast.error("Invalid email provided");
    }

    try {
      const response = await axiosInstance.post('/auth/login', data);
      console.log(response.data, 'from on submit ');

      if (response.data.token) {
        toast.success("Login Successful", { autoClose: 4000, pauseOnHover: false });
        localStorage.setItem('accessToken', response.data.token);
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "An error occurred during login");
      }
      
    } catch (error) {
      toast.error(error.message || "An error occurred during login");
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
     
      <div className='bg-primaryColor w-full px-2  py-5 md:rounded-l-lg '>
      <Link to={'/'} className='text-primaryColor rounded py-1 bg-white px-5'>Back</Link>
        <div className='text-white w-full flex flex-col justify-center items-center p-5 mt-[10rem]'>
          <h1 className='font-semibold text-center md:text-start text-4xl mb-1'>Welcome to Quizzy</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[350px] min-h-[200px] rounded p-4 text-xs">
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
              {errors.password && <p className="text-secondary mt-1">Password must be at least 8 characters long</p>}
            </div>

            <button 
              type="submit" 
              className='p-3 w-full bg-white border border-[#D9D9D9] mt-6 text-primaryColor rounded flex justify-center items-center gap-2 font-semibold'>
              {loading ? <span className='inline-block w-[20px] h-[20px] rounded-full border-2 border-b-transparent border-primaryColor animate-spin'></span> : null}
              <span>Login</span>
            </button>
          </form>
          <div className='text-center mt-10 space-y-4'>
            <h1>OR</h1>
            <h2>Sign in With</h2>

            <span className='flex gap-5 justify-center'>
              <img src={google} alt="" />
              <img src={facebook} alt="" />
            </span>

              <span className='flex gap-5'>
                        <p>Don’t have an account? </p>
                      <Link to={'/auth/signup'}>Sign up</Link>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
