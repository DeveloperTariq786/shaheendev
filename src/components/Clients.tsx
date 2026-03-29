import React from 'react';
import { 
  Target, Link2, Monitor, BookOpen, Cpu, Leaf, 
  Briefcase, Building2, Newspaper, GraduationCap, Plane, Mountain,
  List
} from 'lucide-react';

const clients = [
  { 
    name: 'TýrAds', 
    icon: null, 
    content: <span className="font-serif text-3xl tracking-tight text-slate-800">TýrAds</span> 
  },
  { 
    name: 'KONECTED', 
    icon: null, 
    content: <span className="font-sans font-black tracking-[0.2em] text-slate-900 text-lg">KONECTED</span> 
  },
  { 
    name: 'CADesk', 
    icon: null, 
    content: (
      <div className="flex flex-col items-start">
        <span className="font-sans font-black text-2xl tracking-tighter text-slate-900">CADesk</span>
        <span className="text-[8px] text-slate-500 font-medium">Accurate, Accredited, Affordable</span>
      </div>
    )
  },
  { 
    name: 'FALAH-U-DARIAN', 
    icon: BookOpen, 
    content: (
      <div className="flex flex-col items-start leading-none">
        <span className="font-serif font-bold text-xs">FALAH-U-DARIAN</span>
        <span className="font-serif font-bold text-xs">BARAMULLA</span>
      </div>
    )
  },
  { 
    name: 'ielecssol', 
    icon: Cpu, 
    content: <span className="font-sans font-light tracking-wide text-xl text-slate-800">ielecssol</span> 
  },
  { 
    name: 'MAGREENS', 
    icon: Leaf, 
    content: <span className="font-sans font-bold tracking-widest text-slate-900">MAGREENS</span> 
  },
  { 
    name: 'ia MULTIVENTURES', 
    icon: null, 
    content: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-xs">ia</div>
        <div className="flex flex-col leading-none">
          <span className="font-sans font-bold text-xs">ia</span>
          <span className="font-sans font-bold text-[10px] tracking-wider">MULTIVENTURES</span>
        </div>
      </div>
    )
  },
  { 
    name: 'ESTATE REPUBLIK', 
    icon: Building2, 
    content: (
      <div className="flex flex-col leading-none">
        <span className="font-sans font-bold text-xs">ESTATE</span>
        <span className="font-sans font-bold text-xs">REPUBLIK</span>
      </div>
    )
  },
  { 
    name: 'KASHMIR Life', 
    icon: null, 
    content: <span className="font-serif text-xl text-slate-800"><span className="uppercase">Kashmir</span>Life</span> 
  },
  { 
    name: 'AARIFEEN', 
    icon: GraduationCap, 
    content: (
      <div className="flex flex-col leading-none">
        <span className="font-serif font-bold text-sm">AARIFEEN</span>
        <span className="font-sans text-[8px] tracking-widest">SCHOOL OF EXCELLENCE</span>
      </div>
    )
  },
  { 
    name: 'KashFlyer', 
    icon: Plane, 
    content: (
      <div className="flex flex-col leading-none">
        <span className="font-sans font-bold italic text-lg text-slate-900">KashFlyer</span>
        <span className="font-sans text-[6px] tracking-widest uppercase text-slate-500">One stop ecosystem for app marketing</span>
      </div>
    )
  },
  { 
    name: 'ICONPEAK', 
    icon: Mountain, 
    content: <span className="font-sans font-light tracking-widest text-slate-600">ICONPEAK</span> 
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-12">
          Our <span className="font-bold relative inline-block">
            Clients
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ffc107]"></span>
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-4 flex items-center justify-center gap-3 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-24"
              >
                {Icon && <Icon size={28} strokeWidth={1.5} className="text-slate-800 shrink-0" />}
                {client.content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
