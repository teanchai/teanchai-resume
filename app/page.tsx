"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { useState } from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaChartLine,
  FaCheck,
  FaCloud,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
  FaTools,
  FaUsers,
} from "react-icons/fa";

type IconComponent = ComponentType<{ className?: string }>;

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: IconComponent;
  external?: boolean;
};

type Experience = {
  company: string;
  role: string;
  mode: string;
  logo: string;
  logoAlt: string;
  period: string;
  points: string[];
};

type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: string[];
};

type ModalImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null;

const fixedExperienceMonths = 5 + 22 + 48;

function getExperienceYears() {
  const currentRoleStart = new Date(2023, 6, 1);
  const now = new Date();
  const currentRoleMonths =
    (now.getFullYear() - currentRoleStart.getFullYear()) * 12 +
    (now.getMonth() - currentRoleStart.getMonth());

  return Math.ceil((fixedExperienceMonths + currentRoleMonths) / 12);
}

const contacts: ContactItem[] = [
  {
    label: "Location",
    value: "Bangkok, Thailand",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Phone",
    value: "+66 88 176 3677",
    icon: FaPhone,
  },
  {
    label: "Email",
    value: "teanchai.skk@gmail.com",
    href: "mailto:teanchai.skk@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/teanchai-singkhamkoon",
    href: "https://www.linkedin.com/in/teanchai-singkhamkoon",
    icon: FaLinkedin,
    external: true,
  },
];

const highlights = [
  { label: "Experience", value: "Enterprise applications" },
  { label: "Specialty", value: "Business process automation" },
  { label: "Strength", value: "Full-stack delivery" },
];

const experiences: Experience[] = [
  {
    company: "SCGC-SCG Chemicals",
    role: "Full-stack Developer",
    mode: "Hybrid",
    logo: "/scgchemicals_logo.jpeg",
    logoAlt: "SCGC Logo",
    period: "Jul 2023 - Present",
    points: [
      "Enhanced and maintained the employee profile system for over 5000 SCGC employees, handling large datasets integrated from SAP, focusing on HR technology solutions.",
      "Developed and implemented a web application for annual KPI and leadership/functional competency assessments, including a dashboard for displaying results for both employees and managers.",
      "Designed and implemented cloud-based microservices architecture with .NET Core & Node.js.",
      "Developed an internal dashboard system using React.js & Ant Design, enhancing data visualization for key stakeholders.",
      "Optimized database queries, improving response time by 50% in high-traffic applications.",
    ],
  },
  {
    company: "Celestica",
    role: "Full-stack Developer",
    mode: "Hybrid",
    logo: "/celestica_logo.jpeg",
    logoAlt: "Celestica Logo",
    period: "Jul 2019 - Jun 2023",
    points: [
      "Led the development of enterprise manufacturing automation software, improving operational efficiency.",
      "Supported development of supply chain management applications.",
      "Helped migrate legacy systems to modern cloud-based infrastructure.",
      "Participated in planning and code reviews across multiple project teams.",
    ],
  },
  {
    company: "M.B. System Automation Co., Ltd.",
    role: "Software Developer",
    mode: "Full-time",
    logo: "/m_b_system_automation_logo.jpeg",
    logoAlt: "M.B. System Logo",
    period: "Aug 2017 - May 2019",
    points: [
      "Modernized internal systems from ASP.NET VB6 to Angular and GraphQL.",
      "Focused on UI/UX and frontend enhancements for business users.",
      "Worked on API integrations with external systems.",
    ],
  },
  {
    company: "Onelink Technology",
    role: "Software Developer",
    mode: "Full-time",
    logo: "/onelink.jpeg",
    logoAlt: "Onelink Logo",
    period: "Mar 2017 - Jul 2017",
    points: ["Built custom web applications for internal use."],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: ["React.js", "TypeScript", "Angular", "Next.js", "Redux", "Ant Design"],
  },
  {
    title: "Backend",
    icon: FaDatabase,
    skills: [".NET Core", "Node.js", "GraphQL", "REST APIs"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    skills: ["Azure", "AWS (basic)", "Docker", "CI/CD pipelines"],
  },
  {
    title: "Database",
    icon: FaChartLine,
    skills: ["SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Delivery",
    icon: FaTools,
    skills: ["Git", "Agile/Scrum", "Jira", "Postman", "System Design"],
  },
  {
    title: "Collaboration",
    icon: FaUsers,
    skills: ["Mentoring", "Code Review", "Cross-functional Collaboration"],
  },
];

export default function Home() {
  const [modalImage, setModalImage] = useState<ModalImage>(null);
  const experienceYears = getExperienceYears();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f5] text-zinc-900">
      <section className="border-b border-zinc-200/80 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_340px] lg:items-center lg:py-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
              <FaBriefcase className="h-3.5 w-3.5" />
              Full Stack Developer
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
              Teanchai Singkhamkoon
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
              Full Stack Developer with {experienceYears} years of experience in
              .NET Framework, delivering innovative solutions for enterprise-level
              clients.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-teal-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        {item.label}
                      </span>
                      <span className="mt-0.5 flex items-center gap-1.5 break-words text-sm font-medium text-zinc-800">
                        {item.value}
                        {item.external && <FaExternalLinkAlt className="h-3 w-3" />}
                      </span>
                    </span>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-teal-300 hover:shadow-md"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="rounded-lg border border-zinc-200 bg-[#fbfbf8] p-5 shadow-sm">
            <button
              type="button"
              onClick={() =>
                setModalImage({
                  src: "/1679825638227.jpeg",
                  alt: "Teanchai Singkhamkoon",
                  width: 800,
                  height: 800,
                })
              }
              className="group relative mx-auto block h-48 w-48 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-4"
              aria-label="Open profile photo"
            >
              <Image
                src="/1679825638227.jpeg"
                alt="Teanchai Singkhamkoon"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
            </button>

            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-zinc-200 bg-white px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-950">{item.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:py-14">
        <div className="space-y-8">
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Summary
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-950">
              Enterprise software delivery across web, data, and cloud systems
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              Passionate and detail-oriented Full Stack Developer with over{" "}
              {experienceYears} years of experience building modern, responsive,
              and scalable web applications. Proficient in both frontend and
              backend technologies with a strong focus on performance optimization,
              cloud infrastructure, and team collaboration. Adept at transforming
              complex requirements into user-friendly digital solutions.
            </p>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Experience
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-950">
                  Professional Journey
                </h2>
              </div>
              <p className="text-sm font-medium text-zinc-500">
                {experienceYears} years total experience
              </p>
            </div>

            <div className="relative space-y-7 before:absolute before:left-5 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-200 sm:before:block">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.period}`}
                  className="relative grid gap-4 sm:grid-cols-[48px_minmax(0,1fr)]"
                >
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                    <Image
                      src={experience.logo}
                      alt={experience.logoAlt}
                      width={32}
                      height={32}
                      className="rounded-md object-contain"
                    />
                  </div>

                  <div className="rounded-lg border border-zinc-200 bg-[#fbfbf8] p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-950">
                          {experience.role}
                        </h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-teal-800">
                          <span>{experience.company}</span>
                          <span className="text-zinc-300">/</span>
                          <span className="flex items-center gap-1 text-zinc-600">
                            <FaBriefcase className="h-3.5 w-3.5" />
                            {experience.mode}
                          </span>
                        </p>
                      </div>
                      <span className="w-fit rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-600">
                        {experience.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
                      {experience.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <FaCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-teal-700" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Capabilities
            </p>
            <h2 className="mt-3 text-xl font-semibold text-zinc-950">
              Core Competencies
            </h2>

            <div className="mt-6 space-y-5">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title}>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="font-semibold text-zinc-900">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <FaGraduationCap className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Education
                </p>
                <h2 className="mt-1 text-xl font-semibold text-zinc-950">
                  Suranaree University of Technology
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-zinc-200 bg-[#fbfbf8] p-4">
              <h3 className="font-semibold text-zinc-900">
                Bachelor&apos;s degree, Computer Engineering
              </h3>
              <p className="mt-1 text-sm font-medium text-teal-800">2013-2017</p>
            </div>

            <button
              type="button"
              onClick={() =>
                setModalImage({
                  src: "/graduated_cert.png",
                  alt: "Graduation Certificate",
                  width: 1200,
                  height: 900,
                })
              }
              className="mt-4 flex w-full items-center gap-4 rounded-lg border border-zinc-200 bg-white p-3 text-left shadow-sm transition hover:border-teal-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-4"
            >
              <Image
                src="/graduated_cert.png"
                alt="Graduation Certificate"
                width={88}
                height={66}
                className="h-16 w-20 rounded-md border border-zinc-200 object-cover"
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-semibold text-zinc-950">
                  <FaCertificate className="h-4 w-4 text-teal-700" />
                  Graduation Certificate
                </span>
                <span className="mt-1 block text-sm text-zinc-600">
                  View credential preview
                </span>
              </span>
            </button>
          </section>
        </aside>
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={modalImage.alt}
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Close image preview"
            >
              <FaTimes className="h-4 w-4" />
            </button>
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              width={modalImage.width}
              height={modalImage.height}
              className="mx-auto max-h-[90vh] w-auto rounded-lg bg-white object-contain shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
