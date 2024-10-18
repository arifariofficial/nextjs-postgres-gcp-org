import Container from "../container";

const Certifications = () => {
  return (
    <Container>
      <section className="flex min-h-screen flex-col items-center bg-foreground/5 px-8 py-12">
        <h2 className="animate-fadeInUp mb-8 text-4xl font-bold text-foreground/80">
          Courses & Certifications
        </h2>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* University of Helsinki*/}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
              Full Stack Web Development
            </h3>
            <p className="mb-2 font-medium text-foreground">
              University of Helsinki
            </p>
            <p className="text-sm text-muted-foreground">
              Certificates: React, GraphQL, TypeScript
            </p>
            <p className="text-sm text-muted-foreground">2023</p>
          </div>

          {/* Course/Certification 2 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
              CCNA & CCNP
            </h3>
            <p className="mb-2 font-medium text-foreground">
              Cisco Networking Academy
            </p>
            <p className="text-sm text-muted-foreground">
              Core Networking, Switching & Routing
            </p>
            <p className="text-sm text-muted-foreground">2022</p>
          </div>

          {/* Course/Certification 3 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
              Generative AI Fundamentals
            </h3>
            <p className="mb-2 font-medium text-foreground">
              Google Cloud Platform
            </p>
            <p className="text-sm text-muted-foreground">
              Badge and Certification
            </p>
            <p className="text-sm text-muted-foreground">2023</p>
          </div>

          {/* Course/Certification 4 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
              Frontend Developer Track
            </h3>
            <p className="mb-2 font-medium text-foreground">
              JetBrains Academy
            </p>
            <p className="text-sm text-muted-foreground">
              Certifications in JavaScript, Git, Docker
            </p>
            <p className="text-sm text-muted-foreground">2023</p>
          </div>

          {/* Course/Certification 5 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
              Full Stack Open
            </h3>
            <p className="mb-2 font-medium text-foreground">
              University of Helsinki
            </p>
            <p className="text-sm text-muted-foreground">
              Full Stack Web Development
            </p>
            <p className="text-sm text-muted-foreground">2023</p>
          </div>

          {/* Course/Certification 6 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
              Container Technologies with Docker
            </h3>
            <p className="mb-2 font-medium text-foreground">
              JetBrains Academy
            </p>
            <p className="text-sm text-muted-foreground">
              Introduction to Docker
            </p>
            <p className="text-sm text-muted-foreground">2023</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Certifications;
