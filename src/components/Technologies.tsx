import React from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Server, 
  Layers, 
  Wind, 
  Cloud, 
  Box, 
  Cpu, 
  Zap, 
  Infinity 
} from 'lucide-react';

const technologies = [
  { name: 'React', icon: Globe, color: 'bg-blue-50 text-[#61DAFB]' },
  { name: 'Next.js', icon: Zap, color: 'bg-slate-50 text-black' },
  { name: 'Flutter', icon: Smartphone, color: 'bg-sky-50 text-[#02569B]' },
  { name: 'Node.js', icon: Server, color: 'bg-green-50 text-[#339933]' },
  { name: 'TypeScript', icon: Code2, color: 'bg-blue-50 text-[#3178C6]' },
  { name: 'Python', icon: Cpu, color: 'bg-yellow-50 text-[#3776AB]' },
  { name: 'Firebase', icon: Cloud, color: 'bg-orange-50 text-[#FFCA28]' },
  { name: 'MongoDB', icon: Database, color: 'bg-emerald-50 text-[#47A248]' },
  { name: 'PostgreSQL', icon: Database, color: 'bg-indigo-50 text-[#4169E1]' },
  { name: 'Tailwind CSS', icon: Wind, color: 'bg-cyan-50 text-[#06B6D4]' },
  { name: 'AWS', icon: Cloud, color: 'bg-orange-50 text-[#FF9900]' },
  { name: 'Docker', icon: Box, color: 'bg-blue-50 text-[#2496ED]' },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-6">
            Technologies <span className="font-bold border-b-4 border-[#ffc107] pb-1">We Use</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:border-slate-200 group"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm ${tech.color}`}>
                <tech.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-slate-700 font-bold text-base tracking-tight text-center group-hover:text-slate-900 transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
