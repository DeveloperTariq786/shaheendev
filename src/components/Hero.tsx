import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-slate-50 min-h-[calc(100vh-80px)] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#ffc107] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#e53935] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              <span className="text-[#2185ff]">Website & Mobile</span><br />
              App Development
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We deliver comprehensive IT solutions including Website & Mobile App Development, Custom Software, and Digital Marketing to help your business thrive in the digital age.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-3.5 bg-[#e53935] text-white font-bold rounded shadow-md hover:bg-red-600 transition-colors flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="px-8 py-3.5 bg-white text-slate-700 font-bold rounded shadow-md border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2">
                View Our Work
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffc107]/20 to-[#e53935]/20 rounded-3xl transform rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Web Development" 
              className="relative rounded-3xl shadow-2xl object-cover h-[400px] lg:h-[450px] xl:h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center text-white font-bold text-xl">
                10+
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Years of</p>
                <p className="font-bold text-slate-900">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
