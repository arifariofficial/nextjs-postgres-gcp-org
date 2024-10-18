import Container from "../container";

const Experience = () => {
  return (
    <Container>
      <section className="flex min-h-screen flex-col items-center bg-foreground/5 px-8 py-12">
        <h2 className="animate-fadeInUp mb-8 text-4xl font-bold text-foreground/80">
          Experiences
        </h2>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Experience 1 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
              Software Developer
            </h3>
            <p className="font-medium text-foreground">
              Freelance / Self-employed
            </p>
            <p className="text-sm text-muted-foreground">2023 - Present</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Developed full-stack web applications using React, Express.js, and
              Node.js. Worked on custom IoT solutions, automation systems, and
              delivered tailored cloud infrastructure solutions.
            </p>
          </div>

          {/* Experience 4 */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
              IoT Project Developer
            </h3>
            <p className="font-medium text-foreground">
              University & Personal Projects
            </p>
            <p className="text-sm text-muted-foreground">Ongoing</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Led the development of IoT projects including Smart Door Systems
              and Greenhouse Automation, focusing on sensor integration,
              Raspberry Pi, and cloud-based monitoring and control systems.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Experience;
