import React, { useState } from 'react';
import { ArrowRight, PenTool, Code, Smartphone, Monitor, Bot, Sparkles } from 'lucide-react';

const servicesData = [
  {
    id: 'Website',
    title: 'Website',
    subtitle: 'Development',
    description: 'Custom, responsive websites tailored to your brand. We build fast, secure, and scalable web solutions.',
    icon: <Monitor size={24} className="text-white" />,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: [
      { name: 'Corporate Websites', bg: 'bg-blue-50 text-blue-700 border-blue-100' },
      { name: 'E-Commerce', bg: 'bg-green-50 text-green-700 border-green-100' },
      { name: 'Landing Pages', bg: 'bg-amber-50 text-amber-700 border-amber-100' },
      { name: 'CMS Development', bg: 'bg-purple-50 text-purple-700 border-purple-100' },
    ],
    theme: {
      gradient: 'from-[#2185ff] to-blue-700',
      text: 'text-[#2185ff]',
      bg: 'bg-[#2185ff]',
      hoverBg: 'hover:bg-blue-50',
      statsColor: 'text-[#2185ff]'
    }
  },
  {
    id: 'Mobile App',
    title: 'Mobile App',
    subtitle: 'Development',
    description: 'High-performance native and cross-platform mobile applications for iOS and Android devices.',
    icon: <Smartphone size={24} className="text-white" />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: [
      { name: 'iOS Apps', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
      { name: 'Android Apps', bg: 'bg-green-50 text-green-700 border-green-100' },
      { name: 'React Native', bg: 'bg-blue-50 text-blue-700 border-blue-100' },
      { name: 'Flutter', bg: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
    ],
    theme: {
      gradient: 'from-[#e53935] to-red-700',
      text: 'text-[#e53935]',
      bg: 'bg-[#e53935]',
      hoverBg: 'hover:bg-red-50',
      statsColor: 'text-[#e53935]'
    }
  },
  {
    id: 'Software',
    title: 'Software',
    subtitle: 'Development',
    description: 'Robust custom software solutions designed to streamline your business operations and boost productivity.',
    icon: <Code size={24} className="text-white" />,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: [
      { name: 'Enterprise Software', bg: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
      { name: 'SaaS Products', bg: 'bg-teal-50 text-teal-700 border-teal-100' },
      { name: 'API Development', bg: 'bg-orange-50 text-orange-700 border-orange-100' },
      { name: 'Cloud Solutions', bg: 'bg-sky-50 text-sky-700 border-sky-100' },
    ],
    theme: {
      gradient: 'from-[#4caf50] to-green-700',
      text: 'text-[#4caf50]',
      bg: 'bg-[#4caf50]',
      hoverBg: 'hover:bg-green-50',
      statsColor: 'text-[#4caf50]'
    }
  },
  {
    id: 'Graphics',
    title: 'Graphic',
    subtitle: 'Designing',
    description: 'Creative designs that captivate audiences, enhance brand identity, and deliver a visually engaging experience.',
    icon: <PenTool size={24} className="text-white" />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: [
      { name: 'Logo Design', bg: 'bg-red-50 text-red-700 border-red-100' },
      { name: 'Brand Collaterals', bg: 'bg-amber-50 text-amber-700 border-amber-100' },
      { name: 'Brochures', bg: 'bg-green-50 text-green-700 border-green-100' },
      { name: 'UI/UX Design', bg: 'bg-blue-50 text-blue-700 border-blue-100' },
    ],
    theme: {
      gradient: 'from-[#ffc107] to-amber-600',
      text: 'text-[#ffc107]',
      bg: 'bg-[#ffc107]',
      hoverBg: 'hover:bg-amber-50',
      statsColor: 'text-[#ffc107]'
    }
  },
  {
    id: 'AIAgents',
    title: 'AI',
    subtitle: 'Agents',
    description: 'Intelligent AI agents and chatbots to automate your workflows, enhance customer support, and scale operations.',
    icon: <Sparkles size={24} className="text-white" />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: [
      { name: 'Custom Chatbots', bg: 'bg-blue-50 text-blue-700 border-blue-100' },
      { name: 'Workflow Automation', bg: 'bg-purple-50 text-purple-700 border-purple-100' },
      { name: 'LLM Integration', bg: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100' },
      { name: 'Voice Assistants', bg: 'bg-pink-50 text-pink-700 border-pink-100' },
    ],
    theme: {
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      text: 'text-purple-600',
      bg: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
      hoverBg: 'hover:bg-purple-50',
      statsColor: 'text-purple-600'
    }
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('Website');
  
  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-6">
            Our <span className="font-bold border-b-4 border-[#ffc107] pb-1">Services</span>
          </h2>
          <div className="inline-block bg-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium mb-6">
            We help brands find their purpose
          </div>
          <p className="text-lg text-slate-500">
            A great brand purpose becomes an inextricable part of people's lives. We help brands find, articulate, and activate their purpose in the world.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#e53935] text-white shadow-lg shadow-red-500/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-200'
              }`}
            >
              <div className="scale-75 origin-center">{tab.icon}</div>
              {tab.id === 'AIAgents' ? 'AI Agents' : tab.id}
            </button>
          ))}
        </div>

        {/* Active Service Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 flex flex-col lg:flex-row group">
          {/* Left Section - Title Area */}
          <div className={`bg-gradient-to-br ${activeService.theme.gradient} text-white p-8 lg:p-10 lg:w-1/3 flex flex-col justify-center relative overflow-hidden`}>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-inner">
                {activeService.icon}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">{activeService.title}</h3>
              <p className="text-lg lg:text-xl text-white/80 mb-8 font-light">{activeService.subtitle}</p>
              
              <button className={`inline-flex items-center gap-2 bg-white ${activeService.theme.text} px-5 py-2.5 rounded-lg font-bold ${activeService.theme.hoverBg} transition-colors shadow-md group-hover:translate-x-1 duration-300 w-fit text-sm`}>
                Explore Service <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Middle Section - Content Area */}
          <div className="p-8 lg:p-10 lg:w-5/12 flex flex-col justify-center bg-white relative">
            <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
              <span className={`w-6 h-1 ${activeService.theme.bg} rounded-full`}></span>
              {activeService.title} {activeService.subtitle}
            </h4>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {activeService.description}
            </p>

            <div className="mb-3 text-xs font-semibold text-slate-900 uppercase tracking-wider">What we offer:</div>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeService.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${tag.bg} transition-transform hover:-translate-y-0.5 cursor-default`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section - Image Area */}
          <div className="lg:w-1/4 relative min-h-[200px] lg:min-h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 lg:hidden"></div>
            <img
              src={activeService.image}
              alt={`${activeService.title} ${activeService.subtitle}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Floating Stats Badge */}
            <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/50">
              <div className={`text-2xl font-black ${activeService.theme.statsColor} leading-none mb-1`}>100+</div>
              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
