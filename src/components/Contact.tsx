import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              Get in touch with our team of experts to discuss your requirements and find out how we can help your business grow.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center text-[#e53935]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Location</h4>
                  <p className="text-slate-600">budgam srinager</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center text-[#e53935]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Number</h4>
                  <p className="text-slate-600">7889396003</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center text-[#e53935]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600">Hello@Shaheendevelopers.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-[#e53935] text-white font-medium rounded-md hover:bg-red-600 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
