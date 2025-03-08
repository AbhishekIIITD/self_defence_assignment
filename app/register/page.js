// pages/register.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProgramsSection from '@/components/ProgramSection';
export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error('Registration failed');
  
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', program: '', agreeToTerms: false });
  
      // WhatsApp message redirect
      // const message = `Hello ${formData.name}, thank you for your interest in our ${formData.program} program! We'll send details shortly.`;
      // const encodedMessage = encodeURIComponent(message);
      // window.open(`https://wa.me/${formData.phone}?text=${encodedMessage}`, '_blank');
      
    } catch (err) {
      setError('Failed to register. Please try again later.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  
  const programs = [
    {
      id:'Kids-Self-Defense',
      name: 'Kids Self Defense',
      time: "10:00-11:00 AM",
      description: "Boosts confidence, awareness, and safety while teaching essential self-defense skills in a fun environment.",
      icon: "/KickSelfDefenceIcon.png"
    },
    {
      id:'Teen-Adult-Boxing',
      name: 'Teen & Adult Boxing',
      time: "5:00-6:00 AM",
      description: "Equips you with real-world self-defense techniques to stay safe, build confidence, and take control of any situation.",
      icon: "/TeenAdultBoxingIcon.png"
    },
    {
      id:'Traditional-Martial-Arts',
      name: 'Traditional Martial Arts',
      time: "6:00-7:00 PM",
      description: "Enhances discipline, strength, and mental focus while preserving the timeless art of traditional martial techniques.",
      icon: "/MartialArtsIcon.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Register - Guardian Self Defense Academy</title>
        <meta name="description" content="Register for self-defense classes and receive program details via WhatsApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative py-16 md:py-24 bg-slate-800 text-black text-center">
          <div 
            className="absolute inset-0 z-0 opacity-40" 
            style={{
              backgroundImage: "url('/api/placeholder/1200/600')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-white">
            <h1 className="text-4xl font-bold mb-4">Join Our Self Defense Community</h1>
            <p className="text-lg mb-8">Learn practical skills from expert instructors in a supportive environment</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto -mt-16 md:-mt-20 relative z-20 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Register for Program Information</h2>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <h3 className="text-green-700 text-xl font-semibold mb-4">Registration Successful!</h3>
                <p className="mb-6">Thank you for registering. We'll send you program details via WhatsApp shortly.</p>
                <button 
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded transition-colors"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Register Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div>
                  <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
                    WhatsApp Number (with country code)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1234567890"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    We'll send program details to this number via WhatsApp
                  </p>
                </div>

                <div>
                  <label htmlFor="program" className="block font-medium text-gray-700 mb-1">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  >
                    <option value="">Select a program</option>
                    {programs.map(program => (
                      <option key={program.id} value={program.id}>
                        {program.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="h-5 w-5 text-red-700 focus:ring-red-600 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 block text-gray-700">
                    I agree to receive information via WhatsApp
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded transition-colors disabled:bg-red-300 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Register Now'}
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ProgramsSection />
          </div>
        </section>
      </main>

    
    </div>
  );
}