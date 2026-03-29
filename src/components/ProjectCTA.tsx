import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProjectCTA() {
  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 flex-1">
            {/* Left: Illustration */}
            <div className="shrink-0">
              <img 
                src="https://acmo.in/wp-content/uploads/elementor/thumbs/idea_img-puw1896y253lsp1hxjldvq7nyf88bhw27z7w4lmd5m.webp" 
                alt="Project Idea" 
                className="w-48 h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Middle: Text */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Have any project on mind?
              </h2>
              <p className="text-slate-500 text-lg">
                Convert your project idea into a profitable business
              </p>
            </div>
          </div>

          {/* Right: Button */}
          <div className="shrink-0">
            <button className="bg-[#e53935] hover:bg-red-600 text-white px-8 py-3.5 rounded font-bold transition-colors flex items-center gap-2 shadow-md whitespace-nowrap">
              <ChevronRight size={18} strokeWidth={3} /> Get a Free Quote
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
