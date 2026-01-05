import ProjectSection from "@/components/ProjectSection";
import dikantin from "@/public/images/Dkantin.png";
import shri from "@/public/images/Shri.png";

export const metadata = {
  title: "ZAM.DEV | Work And Projects",
  description: "All projects i can create",
};

const projects = [
  {
    nameApps: "DKantin – Jember State Polytechnic",
    company: "Teaching Factory, Jember State Polytechnic",
    category: "Fullstack | Laravel",
    description:
      "I developed a backend RESTful API using the Laravel framework for the DKantin application, which is used by Jember State Polytechnic. The system implements bearer token authentication for secure access.",
    alt: "Dkantin Project Image",
    src: dikantin,
  },
  {
    nameApps:
      "Daily Inpatient Census Reporting System – Reda Bolo Regional Public Hospital",
    company: "Reda Bolo Regional Public Hospital",
    category: "Fullstack | Laravel",
    description:
      "I developed a medical records system to manage and track patient admissions, discharges, and inpatient data for hospital reporting purposes.",
    alt: "Reda Bolo Hospital Project Image",
    src: shri,
  },
  {
    nameApps: "Company Profile With CMS – Ray Souvenir Bandung",
    company: "Ray Souvenir",
    category: "Fullstack | Laravel",
    description:
      "I developed a website for the needs of souvenir shops in Bandung professionally",
    alt: "Ray Souvenir Image",
    src: shri,
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 1 }}>
          Here are some of the projects I have done and some are still in
          progress.
        </p>
      </div>

      <div
        className="flex flex-col gap-6 w-full animate-in"
        style={{ "--index": 3 }}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectSection
              alt={project.alt}
              category={project.category}
              company={project.company}
              description={project.description}
              nameApps={project.nameApps}
              src={project.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
