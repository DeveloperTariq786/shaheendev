import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = ['Websites', 'Apps', 'AI Agents'];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-6">
            Our <span className="font-bold border-b-4 border-[#ffc107] pb-1">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-700 mb-12">
            A Glimpse of <span className="font-bold border-b-2 border-[#ffc107] pb-0.5">Work We've Done</span> for Forward-Thinking <span className="font-bold border-b-2 border-[#ffc107] pb-0.5">Brands</span> and <span className="font-bold border-b-2 border-[#ffc107] pb-0.5">Clients</span>
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20 last:mb-0">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 inline-block border-b-4 border-[#ffc107] pb-1">
                {category}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <Link 
                    key={index} 
                    to={`/project/${project.id}`}
                    className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="aspect-[4/3] bg-[#e9ecef] p-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between bg-white">
                      <h4 className="text-lg font-bold text-slate-800">{project.title}</h4>
                      <ChevronRight size={20} className="text-slate-600 group-hover:text-slate-900 transition-colors" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-12">
          <Link to="/projects" className="bg-[#e53935] text-white px-8 py-3 rounded flex items-center gap-2 font-bold w-fit hover:bg-red-600 transition-colors shadow-md">
            <span className="text-lg">≡</span> View All
          </Link>
        </div>
      </div>
    </section>
  );
}
