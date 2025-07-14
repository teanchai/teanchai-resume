"use client";

import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes, FaUser, FaFolderOpen } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'resume' | 'projects'>('resume');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div 
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/1679825638227.jpeg"
                  alt="Teanchai Singkhamkoon"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Teanchai Singkhamkoon</h1>
            <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Full Stack Developer with {(() => {
                // Calculate total experience from all roles
                const onelink = 5; // March 2017 - July 2017 (5 months)
                const mbSystem = 22; // August 2017 - May 2019 (1 year 10 months = 22 months)
                const celestica = 48; // July 2019 - June 2023 (4 years = 48 months)
                const scgc = (() => {
                  const start = new Date(2023, 6, 1); // July 2023
                  const now = new Date();
                  return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
                })();
                const totalMonths = onelink + mbSystem + celestica + scgc;
                const years = Math.ceil(totalMonths / 12);
                return years;
              })()} years of experience in .NET Framework, delivering innovative solutions for enterprise-level clients.
            </p>
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Bangkok, Bangkok City, Thailand</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                <span>+66 88 176 3677</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />
                <a href="mailto:teanchai.skk@gmail.com" className="hover:text-blue-600 transition-colors">
                  teanchai.skk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-blue-600" />
                <a 
                  href="https://www.linkedin.com/in/teanchai-singkhamkoon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/teanchai-singkhamkoon
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Bar */}
      <nav className="max-w-4xl mx-auto px-6 mt-2">
        <div className="flex border-b border-gray-200">
          <button
            className={`flex items-center gap-2 px-6 py-3 font-semibold text-base focus:outline-none transition-colors border-b-2 ${selectedTab === 'resume' ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
            onClick={() => setSelectedTab('resume')}
          >
            <FaUser className="w-5 h-5" /> My Journey
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 font-semibold text-base focus:outline-none transition-colors border-b-2 ${selectedTab === 'projects' ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
            onClick={() => setSelectedTab('projects')}
          >
            <FaFolderOpen className="w-5 h-5" /> Project Reference
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {selectedTab === 'resume' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Experienced Full Stack Developer with over {(() => {
                    // Calculate total experience from all roles
                    const onelink = 5; // March 2017 - July 2017 (5 months)
                    const mbSystem = 22; // August 2017 - May 2019 (1 year 10 months = 22 months)
                    const celestica = 48; // July 2019 - June 2023 (4 years = 48 months)
                    const scgc = (() => {
                      const start = new Date(2023, 6, 1); // July 2023
                      const now = new Date();
                      return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
                    })();
                    const totalMonths = onelink + mbSystem + celestica + scgc;
                    const years = Math.ceil(totalMonths / 12);
                    return years;
                  })()} years in React.js, .NET Core, and Node.js. 
                  Focused on building scalable applications and improving overall system quality. Strong background 
                  in Human Resource technology, manufacturing, and supply chain systems. Enjoys mentoring junior 
                  developers and working in collaborative environments.
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
                <div className="space-y-6">
                  {/* SCGC */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Full-stack Developer</h3>
                        <p className="text-blue-600 font-medium">SCGC-SCG Chemicals</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {(() => {
                          const start = new Date(2023, 6, 1); // July 2023 (month is 0-indexed)
                          const now = new Date();
                          const months =
                            (now.getFullYear() - start.getFullYear()) * 12 +
                            (now.getMonth() - start.getMonth());
                          const years = Math.floor(months / 12);
                          const remMonths = months % 12;
                          return `July 2023 - Present (${years} year${years !== 1 ? "s" : ""}${remMonths > 0 ? ` ${remMonths} month${remMonths !== 1 ? "s" : ""}` : ""})`;
                        })()}
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Enhanced and maintained the employee profile system for over 5000 SCGC employees, handling large datasets integrated from SAP, focusing on HR technology solutions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Developed and implemented a web application for annual KPI and leadership/functional competency assessments, including a dashboard for displaying results for both employees and managers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Designed and implemented cloud-based microservices architecture with .NET Core & Node.js.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Developed an internal dashboard system using React.js & Ant Design, enhancing data visualization for key stakeholders.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Optimized database queries, improving response time by 50% in high-traffic applications.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Celestica */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Full-stack Developer</h3>
                        <p className="text-blue-600 font-medium">Celestica</p>
                      </div>
                      <span className="text-sm text-gray-500">July 2019 - June 2023 (4 years)</span>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Led the development of enterprise manufacturing automation software, improving operational efficiency.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Supported development of supply chain management applications.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Helped migrate legacy systems to modern cloud-based infrastructure.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Participated in planning and code reviews across multiple project teams.</span>
                      </li>
                    </ul>
                  </div>

                  {/* M.B. System */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
                        <p className="text-blue-600 font-medium">M.B. System Automation Co., Ltd.</p>
                      </div>
                      <span className="text-sm text-gray-500">August 2017 - May 2019 (1 year 10 months)</span>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Modernized internal systems from ASP.NET VB6 to Angular and GraphQL.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Focused on UI/UX and frontend enhancements for business users.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Worked on API integrations with external systems.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Onelink */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
                        <p className="text-blue-600 font-medium">Onelink Technology</p>
                      </div>
                      <span className="text-sm text-gray-500">March 2017 - July 2017 (5 months)</span>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Built custom web applications for internal use.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Core Competencies */}
              <section className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'TypeScript', 'Angular', 'Next.js', 'Redux', 'Ant Design'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['.NET Core', 'Node.js', 'GraphQL', 'REST APIs'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Azure', 'AWS (basic)', 'Docker', 'CI/CD pipelines'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Database</h3>
                    <div className="flex flex-wrap gap-2">
                      {['SQL Server', 'PostgreSQL', 'MongoDB'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Other Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Agile/Scrum', 'Jira', 'Postman', 'System Design'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Mentoring', 'Code Review', 'Cross-functional Collaboration'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              {/* Education */}
              <section className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
                <div>
                  <h3 className="font-semibold text-gray-800">Bachelor&apos;s degree, Computer Engineering</h3>
                  <p className="text-blue-600">Suranaree University of Technology</p>
                  <p className="text-gray-600 text-sm">2013-2017</p>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-gray-500 text-lg">
            <span>Project Reference section coming soon...</span>
          </div>
        )}
      </main>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-2xl max-h-[90vh] bg-transparent rounded-lg overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200 z-10 bg-black bg-opacity-50 rounded-full p-2 shadow-lg transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src="/1679825638227.jpeg"
                alt="Teanchai Singkhamkoon"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
