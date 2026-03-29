import React from 'react';
import { UserPlus, Monitor, Users, UserCheck } from 'lucide-react';

const stats = [
  { 
    value: '70+', 
    label: 'Worldwide Clients',
    icon: <UserPlus size={24} className="text-[#e53935]" />,
    bg: 'bg-red-50'
  },
  { 
    value: '100+', 
    label: 'Successful Projects',
    icon: <Monitor size={24} className="text-[#4caf50]" />,
    bg: 'bg-green-50'
  },
  { 
    value: '15+', 
    label: 'Teams',
    icon: <Users size={24} className="text-[#ffc107]" />,
    bg: 'bg-amber-50'
  },
  { 
    value: '6+', 
    label: 'Years in Industry',
    icon: <UserCheck size={24} className="text-[#2185ff]" />,
    bg: 'bg-blue-50'
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-sm border border-slate-100 flex items-center gap-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${stat.bg}`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-700 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
