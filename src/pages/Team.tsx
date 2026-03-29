import React, { useEffect } from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Davood Wani',
    role: 'CEO & Founder',
    email: 'davood@acmo.in',
    phone: '+91-9906-880-222',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    theme: 'red',
    colorHex: '#e53935',
    size: 'large'
  },
  {
    name: 'Qazi Firdous',
    role: 'Managing Director',
    email: 'ibnshamas@acmo.in',
    phone: '+91-9419-977-533',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    theme: 'yellow',
    colorHex: '#ffc107',
    size: 'large'
  },
  {
    name: 'Tahir Dar',
    role: 'WordPress Manager',
    email: 'tahir.dar@acmo.in',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    theme: 'green',
    colorHex: '#4caf50',
    size: 'normal'
  },
  {
    name: 'Salman Qureshi',
    role: 'Senior Software Engineer',
    email: 'salman.qureshi@acmo.in',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    theme: 'yellow',
    colorHex: '#ffc107',
    size: 'normal'
  },
  {
    name: 'Arjumand Afrooz',
    role: 'OPC Manager',
    email: 'arjumand@acmo.in',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    theme: 'green',
    colorHex: '#4caf50',
    size: 'normal'
  }
];

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
    <Icon size={18} />
  </a>
);

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const largeCards = teamMembers.filter(m => m.size === 'large');
  const normalCards = teamMembers.filter(m => m.size === 'normal');

  return (
    <div className="pt-32 pb-20 bg-[#f8f9fa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Welcome to <span className="border-b-4 border-[#ffc107] pb-1">Shaheen Family</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Celebrated projects aren't built in isolation. They're shaped by teams where people are aligned by purpose, driven by trust, and committed to a shared goal. When collaboration is real, ideas grow stronger, execution gets sharper, and success becomes a collective win.
          </p>
        </div>

        {/* Large Cards Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
          {largeCards.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="shrink-0">
                <div 
                  className="w-48 h-48 rounded-full p-1.5"
                  style={{ border: `2px solid ${member.colorHex}` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left flex flex-col h-full justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="font-semibold mb-6" style={{ color: member.colorHex }}>{member.role}</p>
                
                <div className="space-y-3 mb-6 text-sm font-medium text-slate-700">
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <Mail size={16} className="text-slate-500" />
                    <a href={`mailto:${member.email}`} className="hover:text-slate-900 transition-colors">{member.email}</a>
                  </div>
                  {member.phone && (
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <Phone size={16} className="text-slate-500" />
                      <a href={`tel:${member.phone}`} className="hover:text-slate-900 transition-colors">{member.phone}</a>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 mb-6">
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Linkedin} />
                </div>

                <button 
                  className="px-6 py-2.5 rounded text-white font-medium text-sm transition-opacity hover:opacity-90 w-fit mx-auto sm:mx-0 flex items-center gap-2"
                  style={{ backgroundColor: member.colorHex }}
                >
                  <span className="text-lg leading-none">≡</span> View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Normal Cards Row */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {normalCards.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center">
              <div 
                className="w-40 h-40 rounded-full p-1.5 mb-6"
                style={{ border: `2px solid ${member.colorHex}` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="font-semibold mb-4 text-sm" style={{ color: member.colorHex }}>{member.role}</p>
              
              <div className="mb-6 text-sm font-medium text-slate-600">
                <a href={`mailto:${member.email}`} className="hover:text-slate-900 transition-colors">{member.email}</a>
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Linkedin} />
              </div>

              <button 
                className="px-6 py-2.5 rounded text-white font-medium text-sm transition-opacity hover:opacity-90 flex items-center gap-2 mt-auto"
                style={{ backgroundColor: member.colorHex }}
              >
                <span className="text-lg leading-none">≡</span> View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
