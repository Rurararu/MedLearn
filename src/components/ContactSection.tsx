  import React from 'react';
  import { Mail, Phone, Github } from 'lucide-react';

  export function ContactSection() {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? Our team is here to help you on your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">solomiia.drebot.oi.2022@lpnu.ua</p>
            </div>
            
            <div className="text-center p-6">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us (Dont call)</h3>
              <p className="text-gray-600">+380 1111 11 111</p>
            </div>
            
            <div className="text-center p-6">
              <Github className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Use our code</h3>
              <p className="text-gray-600"><a href="https://github.com/Rurararu/MedLearn" target="_blank" rel="noopener noreferrer">
              https://github.com/Rurararu/MedLearn
</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }