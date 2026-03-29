import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    badgeColor: 'bg-[#ef5350]',
    image: 'https://images.unsplash.com/photo-1512758684848-4f3d054941b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    blobShape: '50% 50% 40% 60% / 60% 40% 60% 40%',
  },
  {
    number: '02',
    title: 'Design',
    badgeColor: 'bg-[#ffca28]',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    blobShape: '40% 60% 50% 50% / 50% 50% 50% 50%',
  },
  {
    number: '03',
    title: 'Development',
    badgeColor: 'bg-[#66bb6a]',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    blobShape: '60% 40% 50% 50% / 40% 60% 40% 60%',
  },
  {
    number: '04',
    title: 'Delivery',
    badgeColor: 'bg-[#42a5f5]',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    blobShape: '50% 50% 60% 40% / 50% 40% 60% 50%',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-6">
            Work <span className="font-bold border-b-4 border-[#ffc107] pb-1">Process</span>
          </h2>
          <p className="text-lg text-slate-500">
            We follow <span className="font-bold text-slate-600">Agile Development Methodology</span> for Quality and Quick Turnaround
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-6">
                  {/* Blob Image */}
                  <div 
                    className="w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 duration-300"
                    style={{ borderRadius: step.blobShape }}
                  >
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Number Badge */}
                  <div 
                    className={`absolute -top-2 -right-2 md:top-0 md:-right-2 w-10 h-10 md:w-12 md:h-12 ${step.badgeColor} text-white flex items-center justify-center text-lg md:text-xl font-bold rounded-xl shadow-lg z-10`}
                    style={{ borderBottomLeftRadius: '4px' }}
                  >
                    {step.number}
                  </div>
                </div>
                
                <h4 className="text-lg md:text-xl font-bold text-slate-600">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
