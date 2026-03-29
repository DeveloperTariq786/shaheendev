import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Uzair Nisar',
    role: 'CEO, TechCorp',
    text: 'Shaheen Developers designed a superior website for us. Their professionalism and attention to detail are unmatched. Highly recommended for any web development needs.',
    initials: 'UN',
    color: 'bg-blue-50 text-[#2185ff]',
    accent: 'bg-[#2185ff]'
  },
  {
    name: 'Aisha Khan',
    role: 'Marketing Director',
    text: 'Very satisfied with the quality of work. They delivered our mobile app on time and within budget. Great customer service throughout the entire process.',
    initials: 'AK',
    color: 'bg-green-50 text-[#4caf50]',
    accent: 'bg-[#4caf50]'
  },
  {
    name: 'David Smith',
    role: 'Founder, StartupX',
    text: 'Nice to work with the team. They understood our vision perfectly and created a professional logo and website that truly represents our brand.',
    initials: 'DS',
    color: 'bg-amber-50 text-[#ffc107]',
    accent: 'bg-[#ffc107]'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Client <span className="text-[#e53935]">Thoughts</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

          <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] w-max py-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 flex flex-col h-full overflow-hidden group w-[350px] md:w-[450px] shrink-0"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${testimonial.accent} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                
                {/* Quote Watermark */}
                <div className="absolute top-8 right-8 text-slate-50 opacity-60 group-hover:scale-110 transition-transform duration-500">
                  <Quote size={80} fill="currentColor" />
                </div>

                <div className="flex gap-1 text-[#ffc107] mb-8 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-10 leading-relaxed italic relative z-10 flex-grow text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-slate-100">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
