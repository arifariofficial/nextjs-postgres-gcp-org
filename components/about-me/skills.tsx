const Skills = () => {
  return (
    <div>
      <section className="flex px-8 min-h-screen flex-col items-center py-12 bg-foreground/5">
        <h2 className="text-4xl font-bold text-foreground/80 mb-8 animate-fadeInUp">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Frontend Skills */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Frontend</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>HTML, CSS, Tailwind</li>
              <li>JavaScript, TypeScript</li>
              <li>React.js, Redux, Context API</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Backend</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>Express.js, Node.js</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Nest.js</li>
              <li>.NET, ASP.NET</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Frameworks</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>React.js, Next.js, React Native</li>
              <li>Node.js, Nest.js</li>
              <li>Spring Boot</li>
              <li>Django</li>
              <li>.NET</li>
              <li>Flutter</li>
            </ul>
          </div>

          {/* DevOps & Databases */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">DevOps & Databases</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>CI/CD, Docker, Kubernetes</li>
              <li>Google Cloud Platform, Azure</li>
              <li>PostgreSQL, MongoDB</li>
              <li>GitHub, GitHub Actions</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Programming Languages</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>JavaScript, TypeScript</li>
              <li>Python, Java</li>
              <li>C, C++</li>
              <li>C#</li>
            </ul>
          </div>

          {/* Systems & Networking */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Systems & Networking</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>Linux Server, Windows Server</li>
              <li>Bash, TCP/IP, DNS, DHCP</li>
              <li>VMware ESXi, Cloud & Virtualization</li>
              <li>KVM, LAN/WLAN/VLAN</li>
            </ul>
          </div>

          {/* Mobile Development */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Mobile Development</h3>
            <ul className="list-disc ml-4 text-foreground">
              <li>React Native</li>
              <li>Flutter</li>
              <li>Swift, iOS Development</li>
              <li>Kotlin, Android Development</li>
            </ul>
          </div>

          {/* Testing & Others */}
          <div className="bg-background shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold dark:text-foreground text-indigo-600 mb-4">Testing & Others</h3>
            <ul className="list-disc ml-4 text-foreground">
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
