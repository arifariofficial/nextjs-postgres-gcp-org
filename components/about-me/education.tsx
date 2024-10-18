import Container from "../container";

const Education = () => {
  return (
    <Container>
      <section className="flex min-h-screen flex-col items-center bg-foreground/5 px-8 py-12">
        <h2 className="animate-fadeInUp mb-8 text-4xl font-bold text-foreground/80">
          Education
        </h2>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* University 1 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Metropolia University of Applied Sciences
            </h3>
            <p className="mb-2 font-medium text-foreground">
              Bachelor of Engineering in Information Technology
            </p>
            <p className="text-sm text-muted-foreground">
              Specialization: Smart IoT Systems
            </p>
            <p className="text-sm text-muted-foreground">2018 - Present</p>
          </div>

          {/* University 2 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              University of Helsinki
            </h3>
            <p className="mb-2 font-medium text-foreground">
              Full Stack Web Development
            </p>
            <p className="text-sm text-muted-foreground">
              Certificates: React, GraphQL, TypeScript
            </p>
            <p className="text-sm text-muted-foreground">2023</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Education;
