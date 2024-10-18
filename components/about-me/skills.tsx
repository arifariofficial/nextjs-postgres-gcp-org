const Skills = () => {
  return (
    <div>
      <section className="flex min-h-screen flex-col items-center bg-foreground/5 px-8 py-12">
        <h2 className="animate-fadeInUp mb-8 text-4xl font-bold text-foreground/80">
          My Skills
        </h2>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Frontend Skills */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Frontend
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>HTML, CSS, Tailwind</li>
              <li>JavaScript, TypeScript</li>
              <li>React.js, Redux, Context API</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Backend
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>Express.js, Node.js</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Nest.js</li>
              <li>.NET, ASP.NET</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Frameworks
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>React.js, Next.js, React Native</li>
              <li>Node.js, Nest.js</li>
              <li>Spring Boot</li>
              <li>Django</li>
              <li>.NET</li>
              <li>Flutter</li>
            </ul>
          </div>

          {/* DevOps & Databases */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              DevOps & Databases
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>CI/CD, Docker, Kubernetes</li>
              <li>Google Cloud Platform, Azure</li>
              <li>PostgreSQL, MongoDB</li>
              <li>GitHub, GitHub Actions</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Programming Languages
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>JavaScript, TypeScript</li>
              <li>Python, Java</li>
              <li>C, C++</li>
              <li>C#</li>
            </ul>
          </div>

          {/* Systems & Networking */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Systems & Networking
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>Linux Server, Windows Server</li>
              <li>Bash, TCP/IP, DNS, DHCP</li>
              <li>VMware ESXi, Cloud & Virtualization</li>
              <li>KVM, LAN/WLAN/VLAN</li>
            </ul>
          </div>

          {/* Mobile Development */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Mobile Development
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>React Native</li>
              <li>Flutter</li>
              <li>Swift, iOS Development</li>
              <li>Kotlin, Android Development</li>
            </ul>
          </div>

          {/* Testing & Others */}
          <div className="transform rounded-lg bg-background p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600 dark:text-foreground">
              Testing & Others
            </h3>
            <ul className="ml-4 list-disc text-foreground">
              <li>Jest, Cypress</li>
              <li>GraphQL, RESTful API</li>
              <li>Unit Testing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
