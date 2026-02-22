export function Projects() {
  const projects = [
    {
      title: "GoSafe - Telematics Platform",
      description: "Real-time vehicle behavior analytics platform tracking speed, braking, and acceleration patterns. Integrated with cloud storage and mobile applications on Play Store and App Store.",
      tech: ["Spring Boot", "Maven", "PostgreSQL", "AWS", "REST APIs"],
      link: "#",
    },
    {
      title: "User Management System",
      description: "Enterprise-grade user onboarding system for a leading insurance company with role-based access control and streamlined account administration.",
      tech: ["Spring Boot", "PostgreSQL", "Hibernate", "REST APIs", "Swagger"],
      link: "#",
    },
    {
      title: "Aircraft Maintenance Tools (Albatros & MIMOS)",
      description: "Data synchronization platform integrating operational and maintenance data from multiple third-party systems for aircraft maintenance efficiency.",
      tech: ["Java", "Microservices", "PostgreSQL", "REST APIs", "CI/CD"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
