import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Users, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[#f8f9fa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="border-b-4 border-[#ffc107] pb-1">Shaheen Developers</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            We are a passionate team of digital creators, strategists, and technologists dedicated to building exceptional digital experiences. Our mission is to help businesses thrive in the modern digital landscape through innovative solutions and cutting-edge technology.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-blue-100 text-[#2185ff] rounded-xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower businesses with transformative digital solutions that drive growth, enhance user engagement, and create lasting value in an ever-evolving technological world.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-green-100 text-[#4caf50] rounded-xl flex items-center justify-center mb-6">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the globally recognized leader in digital innovation, setting new standards for excellence in web development, mobile applications, and AI-driven solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-100 mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose <span className="text-[#2185ff]">Us?</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                With years of experience and a proven track record of successful project deliveries, we bring expertise, reliability, and innovation to every partnership.
              </p>
              
              <div className="space-y-4">
                {[
                  'Expert team of developers and designers',
                  'Agile development methodology',
                  'Focus on scalable and secure solutions',
                  'Transparent communication and reporting',
                  'Post-launch support and maintenance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#4caf50] shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/team" className="inline-flex items-center gap-2 bg-[#e53935] text-white px-8 py-3 rounded font-bold hover:bg-red-600 transition-colors shadow-md">
                  Meet Our Team <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">50+</div>
                    <div className="text-sm font-medium text-slate-500">Team Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
