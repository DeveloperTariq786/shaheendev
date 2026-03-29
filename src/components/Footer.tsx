import React from 'react';
import { Phone, FileText, Info, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#eef1f5] text-slate-600 pt-20 pb-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-100/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-1 mb-6">
              <span className="text-4xl font-black text-[#e53935] tracking-tighter">S</span>
              <span className="text-4xl font-black text-[#ffc107] tracking-tighter">H</span>
              <span className="text-4xl font-black text-[#4caf50] tracking-tighter">A</span>
              <span className="text-4xl font-black text-[#2185ff] tracking-tighter">H</span>
              <span className="text-4xl font-black text-[#e53935] tracking-tighter">E</span>
              <span className="text-4xl font-black text-[#ffc107] tracking-tighter">E</span>
              <span className="text-4xl font-black text-[#4caf50] tracking-tighter">N</span>
              <div className="w-3 h-3 rounded-full bg-[#2185ff] ml-1 mt-3"></div>
              <span className="text-2xl font-bold text-slate-900 ml-2 tracking-tight">Developers</span>
            </Link>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-sm">
              We help brands find, articulate, and activate their purpose in the world through innovative digital solutions and creative design.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> About Us</Link></li>
              <li><a href="#" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> Careers</a></li>
              <li><Link to="/team" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> Our Team</Link></li>
              <li><Link to="/projects" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#services" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> Web Development</a></li>
              <li><a href="/#services" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> Mobile Apps</a></li>
              <li><a href="/#services" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> UI/UX Design</a></li>
              <li><a href="/#services" className="hover:text-[#2185ff] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2185ff]" /> Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="mailto:Hello@Shaheendevelopers.in" className="flex items-start gap-3 hover:text-[#2185ff] transition-colors">
                  <Mail size={18} className="text-[#e53935] shrink-0 mt-0.5" /> 
                  <span className="break-all">Hello@Shaheendevelopers.in</span>
                </a>
              </li>
              <li>
                <a href="tel:7889396003" className="flex items-start gap-3 hover:text-[#2185ff] transition-colors">
                  <Phone size={18} className="text-[#2185ff] shrink-0 mt-0.5" /> 
                  <span>+91-7889396003</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#4caf50] shrink-0 mt-0.5" /> 
                  <span>123 Innovation Drive<br/>Tech City, TC 10010</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Shaheen Developers. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#2185ff] hover:text-white transition-all">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#2185ff] hover:text-white transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#2185ff] hover:text-white transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
