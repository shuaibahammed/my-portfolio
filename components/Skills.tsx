export function Skills() {
  const skills = {
    "Languages & Frameworks": ["Java", "Spring Boot", "Microservices", "REST API", "Hibernate", "XML"],
    "Databases & Cloud": ["PostgreSQL", "MySQL", "Oracle", "AWS Lambda", "EC2", "AWS S3"],
    "Tools & DevOps": ["Maven", "Gradle", "Jenkins", "Git", "Swagger", "Postman", "SonarQube", "Argo CD"],
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">{category}</h3>
            <div className="space-y-3">
              {items.map((skill) => (
                <div key={skill} className="group">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-default">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
