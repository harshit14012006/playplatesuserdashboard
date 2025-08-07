import React, { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer animations
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

// Hero Section Component
const HeroSection = () => {
  const [ref, isInView] = useInView();
  
  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-pink-400 via-blue-500 to-green-500 flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <i className="fas fa-envelope text-white text-4xl absolute top-20 left-20 animate-bounce opacity-30"></i>
        <i className="fas fa-phone text-orange-300 text-3xl absolute top-32 right-24 animate-pulse opacity-25"></i>
        <i className="fas fa-comments text-pink-300 text-5xl absolute bottom-32 left-16 animate-bounce opacity-20"></i>
        <i className="fas fa-heart text-green-300 text-4xl absolute bottom-20 right-20 animate-pulse opacity-25"></i>
        <i className="fas fa-star text-yellow-300 text-3xl absolute top-1/2 left-12 animate-spin opacity-20"></i>
        <i className="fas fa-smile text-purple-300 text-4xl absolute top-1/3 right-16 animate-bounce opacity-30"></i>
      </div>
      
      <div className={`text-center px-4 max-w-5xl transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg mb-8 shadow-xl">
            <i className="fas fa-headset text-4xl text-white"></i>
          </div>
        </div>
        
        <h1 className="font-poppins text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          We're Here to <span className="text-yellow-300 animate-pulse">Help</span>
        </h1>
        <h2 className="font-poppins text-2xl md:text-4xl text-white/90 mb-8 font-light">
          Contact PlayPlates!
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Have questions about our amazing toys or beautiful crockery? Our friendly team is ready to assist you with anything you need!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-orange-400 to-pink-500 text-white font-poppins font-semibold px-10 py-5 rounded-full text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:from-orange-500 hover:to-pink-600">
            <i className="fas fa-paper-plane mr-3 group-hover:translate-x-1 transition-transform"></i>
            Get in Touch
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white font-poppins font-semibold px-10 py-5 rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
            <i className="fas fa-phone mr-3"></i>
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

// Contact Information Section
const ContactInfoSection = () => {
  const [ref, isInView] = useInView();
  
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      info: 'support@playplates.com',
      description: 'Get a response within 24 hours',
      gradient: 'from-pink-500 to-purple-600',
      bgGradient: 'from-pink-50 to-purple-50'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      info: '+1-800-PLAY-FUN',
      description: 'Mon-Fri, 9AM-6PM PST',
      gradient: 'from-green-500 to-blue-600',
      bgGradient: 'from-green-50 to-blue-50'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      info: '123 Fun Street',
      description: 'Playville, CA 90210, USA',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-instagram', color: 'text-pink-500', hoverColor: 'hover:text-pink-600' },
    { icon: 'fab fa-facebook', color: 'text-blue-500', hoverColor: 'hover:text-blue-600' },
    { icon: 'fab fa-twitter', color: 'text-blue-400', hoverColor: 'hover:text-blue-500' },
    { icon: 'fab fa-youtube', color: 'text-red-500', hoverColor: 'hover:text-red-600' }
  ];
  
  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Multiple Ways to Connect
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Choose your preferred method to get in touch with our amazing support team
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`p-6 bg-gradient-to-r ${method.bgGradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-white/50`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <i className={`${method.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-gray-800 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-900 font-semibold text-lg">
                      {method.info}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Social Media */}
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="font-poppins text-xl font-bold text-gray-800 mb-4 text-center">
                Follow Our Journey
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-12 h-12 ${social.color} ${social.hoverColor} flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-110 transform text-2xl`}
                    aria-label={`Follow us on ${social.icon.split('-')[1]}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Map/Image */}
          <div className={`transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-poppins text-xl font-bold text-gray-800 mb-4 text-center">
                Find Our Store
              </h3>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                  alt="PlayPlates store location"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">123 Fun Street</p>
                    <p className="text-sm opacity-90">Playville, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Form Section (Simulated)
const ContactFormSection = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you soon! 🎉');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              We Love Hearing From You!
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Drop us a message and let's start a conversation about how we can help make your experience amazing
          </p>
        </div>
        
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-poppins font-semibold mb-2">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 outline-none"
                  placeholder="What should we call you?"
                  aria-label="Enter your name"
                />
                <i className="fas fa-user absolute right-4 top-4 text-pink-400"></i>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-poppins font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                  placeholder="your@email.com"
                  aria-label="Enter your email address"
                />
                <i className="fas fa-envelope absolute right-4 top-4 text-blue-400"></i>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-gray-700 font-poppins font-semibold mb-2">
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                placeholder="What's this about?"
                aria-label="Enter message subject"
              />
              <i className="fas fa-tag absolute right-4 top-4 text-green-400"></i>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-gray-700 font-poppins font-semibold mb-2">
              Your Message
            </label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 outline-none resize-none"
                placeholder="Tell us how we can help you... ✨"
                aria-label="Enter your message"
              ></textarea>
              <i className="fas fa-comment-dots absolute right-4 top-4 text-orange-400"></i>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-poppins font-bold px-12 py-4 rounded-full text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:from-pink-600 hover:to-blue-600"
              aria-label="Send your message to PlayPlates"
            >
              <i className="fas fa-paper-plane mr-3 group-hover:translate-x-2 transition-transform"></i>
              Send Your Message!
              <i className="fas fa-heart ml-3 text-pink-200 group-hover:scale-125 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [ref, isInView] = useInView();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day hassle-free return policy! If you're not completely satisfied with your toys or crockery, simply contact us and we'll make it right. All items must be in original condition with packaging.",
      icon: "fas fa-undo"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Shipping costs vary by location and are calculated at checkout.",
      icon: "fas fa-globe"
    },
    {
      question: "Are your products safe for children?",
      answer: "Absolutely! All our toys meet or exceed international safety standards including CPSIA, EN71, and ASTM. Our crockery is made from food-safe, non-toxic materials that are perfect for little hands.",
      icon: "fas fa-shield-alt"
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically arrive within 3-5 business days with standard shipping, or 1-2 days with express shipping. We also offer same-day delivery in select metropolitan areas!",
      icon: "fas fa-shipping-fast"
    },
    {
      question: "Can I track my order?",
      answer: "Of course! Once your order ships, you'll receive a tracking number via email. You can also track your order anytime by logging into your account or contacting our support team.",
      icon: "fas fa-map-marked"
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer special pricing for bulk orders, schools, daycares, and retailers. Contact our sales team at wholesale@playplates.com for custom quotes and volume discounts.",
      icon: "fas fa-percentage"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Quick answers to common questions. Can't find what you're looking for? Just ask us!
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                aria-expanded={openFAQ === index}
                aria-label={`Toggle FAQ: ${faq.question}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    openFAQ === index 
                      ? 'bg-gradient-to-r from-pink-500 to-blue-500' 
                      : 'bg-gradient-to-r from-green-400 to-blue-400'
                  } transition-all duration-300`}>
                    <i className={`${faq.icon} text-white`}></i>
                  </div>
                  <h3 className="font-poppins text-lg md:text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <i className={`fas fa-chevron-down text-xl ${
                    openFAQ === index ? 'text-pink-500' : 'text-gray-400'
                  }`}></i>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-poppins font-semibold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
            <i className="fas fa-comments mr-2"></i>
            Ask Us Anything!
          </button>
        </div>
      </div>
    </section>
  );
};

// Customer Support Highlights Section
const SupportHighlightsSection = () => {
  const [ref, isInView] = useInView();
  
  const highlights = [
    {
      icon: 'fas fa-clock',
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need help',
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-400 to-rose-500',
      delay: '0ms'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Fast Response',
      description: 'Average response time under 2 hours',
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-400 to-orange-500',
      delay: '100ms'
    },
    {
      icon: 'fas fa-heart',
      title: 'Friendly Team',
      description: 'Passionate experts who truly care about you',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-400 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Award-Winning',
      description: 'Recognized for excellence in customer service',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-400 to-indigo-500',
      delay: '300ms'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              We're All About Making You Smile!
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Experience the PlayPlates difference with our commitment to exceptional customer care
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border border-gray-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: highlight.delay }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${highlight.bgGradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${highlight.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-poppins text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-poppins text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                Ready to Experience Amazing Support?
              </span>
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of happy customers who trust PlayPlates for quality products and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-poppins font-semibold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </button>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-poppins font-semibold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
                <i className="fas fa-comment mr-2"></i>
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Contact Us Component
const ContactUsPage = () => {
  return (
    <div className="font-lato overflow-x-hidden">
      {/* Custom Styles for Enhanced Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Lato:wght@300;400;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -10px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -5px, 0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-spin {
          animation: spin 3s linear infinite;
        }
      `}</style>
      
      <HeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <FAQSection />
      <SupportHighlightsSection />
    </div>
  );
};

export default ContactUsPage;
