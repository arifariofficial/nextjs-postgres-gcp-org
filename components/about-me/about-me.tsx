import Image from "next/image";
import Pic1 from "public/images/pic1.jpg";
import Container from "../container";

const AboutMe = () => {
  return (
    <Container className="bg-foreground/5">
      <section className="m-8 flex flex-col gap-8 md:flex-row">
        <Image
          src={Pic1}
          alt="Picture of Ariful Islam"
          className="rounded-md shadow-xl"
          width={430}
          priority={true} // Ensures image loads fast
        />
        <div className="m-2 h-full">
          <h2 className="mb-4 text-3xl font-bold text-foreground/80">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            Hello! I’m Ariful Islam, a passionate software developer with
            expertise in JavaScript, TypeScript, React.js, Express.js, and more.
            I love building high-performance web applications and delivering
            clean, maintainable code. Currently, I’m working on AI-powered
            platforms and web development projects to push the boundaries of
            technology.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            I&apos;m currently studying IT at Metropolia Ammattikorkeakoulu,
            having completed all my courses with only practical training left. I
            am now seeking a trainee position or a full-time role to fulfill the
            practical training requirements needed for my graduation.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default AboutMe;
