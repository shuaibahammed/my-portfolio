export function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Results-driven Software Engineer with 4+ years of experience in Java Spring Boot, REST API development and cloud-native microservices. 
            Proficient in building scalable backend systems using Maven, Gradle, and PostgreSQL.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I specialize in designing high-performance APIs, mentoring development teams, and delivering enterprise-grade software solutions. 
            My expertise spans microservices architecture. 
            I thrive in Agile environments and am passionate about code quality and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
