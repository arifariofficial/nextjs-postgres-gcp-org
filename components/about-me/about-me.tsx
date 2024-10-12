import Image from "next/image";
import Pic1 from "public/images/pic1.jpg";
import Container from "../container";

const AboutMe = () => {
  return (
    <Container >
    <section className="flex flex-col md:flex-row m-8 gap-8">
        <Image 
          src={Pic1}
          alt="Picture of Ariful Islam" 
          className="rounded-md shadow-xl"
          width={430}
          height={160}
          priority={true} // Ensures image loads fast
        />
      <div className="m-2  h-full">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Hello! I’m Ariful Islam, a passionate software developer with expertise in JavaScript, TypeScript, React.js, Express.js, and more. 
          I love building high-performance web applications and delivering clean, maintainable code. Currently, I’m working on AI-powered platforms and web development projects to push the boundaries of technology.
        </p>
      </div>
    </section>
    </Container>
  );
};

export default AboutMe;
