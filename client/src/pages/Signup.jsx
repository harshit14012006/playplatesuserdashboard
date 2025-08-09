import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) 
      newErrors.email = 'Invalid email address';
    if (!formData.phone.match(/^\+?[\d\s-]{10,}$/)) 
      newErrors.phone = 'Invalid phone number';
    if (formData.password.length < 8) 
      newErrors.password = 'Password must be at least 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const response = await axios.post('https://playplatesuserdashboard.onrender.com/api/auth/signup', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/login');
    } catch (error) {
      setApiError(error.response?.data?.message || 'An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 pt-40 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 via-amber-50 to-rose-100">
      <div className="w-full max-w-md p-10 transition-all duration-500 transform bg-white shadow-xl rounded-2xl hover:shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full bg-rose-200 text-rose-800">
            PP
          </div>
        </div>
        <h2 className="mb-2 text-4xl font-extrabold text-center text-rose-900">Join PlayPlates</h2>
        <p className="mb-8 text-sm text-center text-rose-600">Create your account for delightful finds</p>
        {apiError && <p className="mb-4 text-sm text-center text-red-500">{apiError}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-rose-800">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={`mt-1 w-full px-4 py-3 bg-rose-50 border ${errors.fullName ? 'border-red-400' : 'border-rose-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-all duration-300 text-rose-900 placeholder-rose-400 text-base`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-rose-800">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 w-full px-4 py-3 bg-rose-50 border ${errors.email ? 'border-red-400' : 'border-rose-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-all duration-300 text-rose-900 placeholder-rose-400 text-base`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-rose-800">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`mt-1 w-full px-4 py-3 bg-rose-50 border ${errors.phone ? 'border-red-400' : 'border-rose-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-all duration-300 text-rose-900 placeholder-rose-400 text-base`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-rose-800">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`mt-1 w-full px-4 py-3 bg-rose-50 border ${errors.password ? 'border-red-400' : 'border-rose-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-all duration-300 text-rose-900 placeholder-rose-400 text-base`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-200 text-rose-700 hover:text-rose-900"
              >
                {showPassword ? <HiOutlineEyeOff className="w-5 h-5" /> : <HiOutlineEye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-rose-600 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:bg-rose-700 disabled:bg-rose-400 disabled:cursor-not-allowed flex items-center justify-center text-base font-semibold`}
          >
            {isLoading ? (
              <svg className="w-5 h-5 mr-2 text-white animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : null}
            {isLoading ? 'Signing Up...' : 'Create Account'}
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-rose-600">
          Already have an account? <a href="/login" className="font-medium transition-colors duration-200 text-rose-900 hover:underline">Log in</a>
        </p>
      </div>
    </section>
  );
}