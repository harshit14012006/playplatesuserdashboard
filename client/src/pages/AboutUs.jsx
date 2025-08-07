import React, { useState, useEffect, useRef } from 'react';

// Enhanced hook for intersection observer with stagger animations
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

// Enhanced Hero Section with Glass Morphism
const HeroSection = () => {
  const [ref, isInView] = useInView();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Modern Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 transform transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <svg className="w-12 h-12 text-indigo-400 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div 
          className="absolute top-40 right-32 transform transition-transform duration-1000"
          style={{ transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <svg className="w-10 h-10 text-emerald-400 opacity-25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>
        </div>
      </div>
      
      <div className={`text-center px-4 max-w-5xl transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Glass Morphism Card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="font-inter text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">PlayPlates</span>
          </h1>
          <h2 className="font-inter text-2xl md:text-3xl text-gray-200 font-light mb-8 tracking-wide">
            Where Innovation Meets Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting premium experiences through cutting-edge design and uncompromising quality that transforms everyday moments into extraordinary memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Explore Our Journey
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border border-white/30 rounded-full text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Story Section with Timeline
const OurStorySection = () => {
  const [ref, isInView] = useInView();
  
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'PlayPlates founded with a vision to revolutionize the industry',
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
    },
    {
      year: '2020',
      title: 'Product Launch',
      description: 'Introduced our premium crockery line with innovative designs',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Reached 50,000+ satisfied customers across 25 countries',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 6L10 14l-3-3 1.41-1.41L10 11.17l5.59-5.59L17 8z'
    }
  ];
  
  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-inter text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Evolution</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            A journey of innovation, dedication, and unwavering commitment to excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop" 
                alt="Modern product showcase"
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
            </div>
          </div>
          
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-indigo-100 last:border-l-0">
                <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-indigo-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d={milestone.icon}/>
                    </svg>
                    <span className="text-2xl font-bold text-indigo-600">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Ultra-Modern Mission & Values Section
const MissionValuesSection = () => {
  const [ref, isInView] = useInView();
  
  const values = [
    {
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      title: 'Excellence',
      description: 'Uncompromising quality in every product we create',
      gradient: 'from-blue-500 to-cyan-400',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Innovation',
      description: 'Pioneering solutions that shape the future',
      gradient: 'from-emerald-500 to-teal-400',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    {
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Integrity',
      description: 'Building trust through transparency and authenticity',
      gradient: 'from-purple-500 to-pink-400',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Community',
      description: 'Fostering connections and shared success',
      gradient: 'from-orange-500 to-red-400',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-inter text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            The principles that guide everything we do and every decision we make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-inter text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Professional Team Section
const TeamSection = () => {
  const [ref, isInView] = useInView();
  
  const team = [
    {
      name: 'Alexandra Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years experience in transforming industries through innovation.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Technology pioneer focused on creating scalable solutions that drive business growth.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sophia Williams',
      role: 'Head of Design',
      bio: 'Award-winning designer creating user experiences that seamlessly blend form and function.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Park',
      role: 'VP of Operations',
      bio: 'Operations expert ensuring excellence in every aspect of our customer journey.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-inter text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Meet Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Exceptional minds driving innovation and excellence across every facet of our organization
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <h3 className="font-inter text-xl font-bold text-slate-900 mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-semibold mb-4 text-center text-sm uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-slate-600 text-sm text-center leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href={member.twitter} className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Why Choose Us Section
const WhyChooseUsSection = () => {
  const [ref, isInView] = useInView();
  
  const benefits = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Premium Quality',
      description: 'Rigorous quality standards ensuring excellence in every product',
      metric: '99.9%',
      metricLabel: 'Quality Score'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Lightning Fast',
      description: 'Optimized processes delivering results at unprecedented speed',
      metric: '24/7',
      metricLabel: 'Support'
    },
    {
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4',
      title: 'Customizable',
      description: 'Tailored solutions that adapt perfectly to your unique requirements',
      metric: '100+',
      metricLabel: 'Configurations'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Expert Support',
      description: 'Dedicated specialists providing unparalleled guidance and assistance',
      metric: '4.9★',
      metricLabel: 'Rating'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Cost Effective',
      description: 'Maximum value with transparent pricing and no hidden costs',
      metric: '40%',
      metricLabel: 'Cost Savings'
    },
    {
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Trusted Partner',
      description: 'Building long-term relationships through reliability and commitment',
      metric: '50K+',
      metricLabel: 'Happy Clients'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-inter text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">PlayPlates</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the difference that true excellence makes in every interaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{benefit.metric}</div>
                    <div className="text-sm text-slate-400">{benefit.metricLabel}</div>
                  </div>
                </div>
                
                <h3 className="font-inter text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Testimonials Section
const TestimonialsSection = () => {
  const [ref, isInView] = useInView();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Jennifer Thompson',
      role: 'CEO, TechForward Inc.',
      company: 'Fortune 500',
      rating: 5,
      comment: 'PlayPlates exceeded our expectations in every aspect. Their attention to detail and commitment to excellence is unmatched in the industry.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Operations',
      company: 'Global Solutions Ltd.',
      rating: 5,
      comment: 'The level of professionalism and innovation delivered by PlayPlates transformed our entire operation. Truly exceptional service.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Sarah Martinez',
      role: 'Director of Innovation',
      company: 'NextGen Corp',
      rating: 5,
      comment: 'Working with PlayPlates was a game-changer. Their strategic approach and flawless execution delivered results beyond our wildest expectations.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-inter text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Client <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how industry leaders achieve extraordinary results with PlayPlates
          </p>
        </div>
        
        <div className="relative">
          {/* Main Testimonial */}
          <div className={`bg-white rounded-3xl p-12 shadow-xl border border-slate-100 transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-slate-700 font-light italic mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].comment}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 text-lg">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-indigo-600 font-medium">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Enhanced About Us Component
const AboutUsPage = () => {
  return (
    <div className="font-inter antialiased overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <HeroSection />
      <OurStorySection />
      <MissionValuesSection />
      <TeamSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
};

export default AboutUsPage;
