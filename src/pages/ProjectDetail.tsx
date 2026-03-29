import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Globe, Layout, User, Calendar, Share2, Heart } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCTA from '../components/ProjectCTA';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#e53935] font-bold hover:underline">Back to Home</Link>
      </div>
    );
  }

  const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs & Title Header */}
      <div className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-xl font-bold text-slate-800">{project.title}</h1>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-slate-800 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="hover:text-slate-800 transition-colors cursor-pointer">{project.category}</span>
              <ChevronRight size={14} />
              <span className="text-slate-800 font-medium">Dynamic</span>
              <ChevronRight size={14} />
              <span className="text-slate-400">{project.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-8">
                <img src={project.logo} alt={project.title} className="h-16 md:h-20 w-auto object-contain mb-8 mx-auto lg:mx-0" referrerPolicy="no-referrer" />
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">{project.title}</h2>
                <div className="inline-block bg-green-50 text-green-700 px-6 py-2 rounded-full text-sm font-bold mb-8 border border-green-100 shadow-sm">
                  {project.subtitle}
                </div>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="bg-[#e53935] text-white px-10 py-4 rounded flex items-center gap-2 font-bold w-full sm:w-fit hover:bg-red-600 transition-all hover:scale-105 active:scale-95 shadow-lg">
                    <ChevronRight size={20} strokeWidth={3} /> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* Right Mockup Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 animate-float">
                <img 
                  src={project.mainImage} 
                  alt={`${project.title} Mockup`} 
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-slate-100 to-slate-50 rounded-full -z-10 opacity-60 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metadata Cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-[#e53935] group-hover:scale-110 transition-transform shadow-sm">
                <Globe size={28} />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Country</div>
              <div className="text-xl font-bold text-slate-800">{project.metadata.country}</div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-[#ffc107] group-hover:scale-110 transition-transform shadow-sm">
                <Layout size={28} />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Project</div>
              <div className="text-xl font-bold text-slate-800">{project.metadata.projectType}</div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-[#4caf50] group-hover:scale-110 transition-transform shadow-sm">
                <User size={28} />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Client</div>
              <div className="text-xl font-bold text-slate-800">{project.metadata.client}</div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-[#2185ff] group-hover:scale-110 transition-transform shadow-sm">
                <Calendar size={28} />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Date Launched</div>
              <div className="text-xl font-bold text-slate-800">{project.metadata.dateLaunched}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              <span className="border-b-4 border-[#ffc107] pb-1">Technologies</span> Used
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-5 group">
                <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-5 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="text-sm font-black text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Creatives */}
      {project.creatives.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-slate-800 mb-4">
                Project <span className="font-bold border-b-4 border-[#ffc107] pb-1">Creatives</span>
              </h2>
              <p className="text-slate-500">Visual Impression of the Project</p>
            </div>
            <div className="space-y-12">
              {project.creatives.map((creative, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img src={creative} alt={`Creative ${index + 1}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <ProjectCTA />

      {/* Project Navigation */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Previous Project */}
            <Link 
              to={`/project/${prevProject.id}`}
              className="group flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:border-slate-300 transition-all">
                <ChevronLeft size={20} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Previous project</div>
                <div className="text-lg font-bold">{prevProject.title}</div>
              </div>
            </Link>

            {/* Next Project */}
            <Link 
              to={`/project/${nextProject.id}`}
              className="group flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Next project</div>
                <div className="text-lg font-bold">{nextProject.title}</div>
              </div>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:border-slate-300 transition-all">
                <ChevronRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
