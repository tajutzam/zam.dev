"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Owner / Fullstack Developer",
    company: "Tajoki (Software & Web Development Services)",
    type: "Owner",
    location: "Jember, Indonesia",
    period: "2024 – Present",
    description: [
      "Founded Tajoki, a software service brand offering web and mobile app development, bug fixing, and code refactoring services.",
      "Handled client projects such as company profiles, internal dashboards, POS systems, and API integrations.",
      "Provided maintenance, debugging, and optimization services for existing software built with Laravel, Node.js, Springboot",
      "Delivered tailored solutions for businesses needing app development, feature improvement, or system repair.",
    ],
  },
  {
    role: "Backend Developer",
    company: "ADS Digital Partner",
    type: "Contract",
    location: "Surabaya, Indonesia",
    period: "Jun 2025 – Present",
    description: [
      "Developed social media management system (Express + TypeScript).",
      "Automated data scraping with Apify and EnsembleData.",
      "Optimized backend APIs for scalability and database efficiency.",
      "Built workflow automation using n8n and integrated services with Express.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "ADS Digital Partner",
    type: "Internship",
    location: "Surabaya, Indonesia",
    period: "Sep 2024 – Jan 2025",
    description: ["Built proposal submission module in Laravel with Filament."],
  },
  {
    role: "Backend Developer",
    company: "JTI Innovation Center",
    type: "Internship",
    location: "Jember, Indonesia",
    period: "Sep 2023 – Jan 2024",
    description: [
      "Built REST API for career counseling (Laravel, JWT, email verification).",
      "Developed campus canteen payment system.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Puskesmas Projects",
    type: "Freelance",
    location: "East Java, Indonesia",
    period: "2023 – 2024",
    description: [
      "Developed health center data management and online payment systems.",
    ],
  },
  {
    role: "Android Developer",
    company: "PT. Sarongan Tourism IDN",
    type: "Freelance",
    location: "Banyuwangi, Indonesia",
    period: "Mar 2023 – Jun 2023",
    description: [
      "Developed tourism app with ticket booking and rental features.",
    ],
  },
];

// warna badge berdasarkan type
const getBadgeColor = (type) => {
  switch (type) {
    case "Contract":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
    case "Internship":
      return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
    case "Freelance":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function ExperiencePage() {
  return (
    <section className="flex flex-col gap-16 md:gap-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Experience
        </h1>
        <p className="text-secondary mt-2 text-base max-w-2xl">
          My journey as a software engineer — from backend and fullstack
          development to mobile and automation projects.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 dark:border-gray-700 pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="relative pb-12 group last:pb-0"
          >
            {/* Content */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {exp.company}
                  </h2>

                  {/* Badge */}
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getBadgeColor(
                      exp.type
                    )}`}
                  >
                    {exp.type}
                  </span>
                </div>

                <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {exp.role}
                </p>

                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-[15px] leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400 min-w-[190px] text-left md:text-right md:pt-1">
                <p>{exp.location}</p>
                <p>{exp.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
