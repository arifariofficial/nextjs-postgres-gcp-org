import Image from "next/image";
import Studio from "public/images/studio.jpg";
import Tomorrowland from "public/images/tomorrow_land.jpg";
import JurrasicRock from "public/images/jurrrsic_rock.jpg";

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 dark:bg-foreground/5">
      <h2 className="self-center text-3xl font-bold">Hobbies</h2>
      <section className="mx-auto mt-[50px] flex max-w-screen-lg flex-col-reverse justify-center gap-10 px-8 sm:flex-row lg:gap-20">
        <div className="mb-10 sm:w-[50%]">
          <div className="flex flex-col-reverse sm:flex-col">
            {/* Left Side - Image */}
            <figure className="mb-6 mt-2">
              <Image
                src={Studio}
                alt="Picture of Ariful Islam"
                width={400}
                className="rounded-md border shadow-xl"
                priority={true} // Ensures image loads fast
              />
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Picture of Ariful Islam
              </figcaption>
            </figure>
            <p className="mb-4 text-lg text-foreground dark:text-muted-foreground">
              In 2018, I went to Tomorrowland, and it sparked my inspiration to
              produce EDM music. Since then, I&apos;ve been learning the craft
              and thoroughly enjoy it alongside coding.
            </p>
          </div>

          <p className="text-lg text-foreground dark:text-muted-foreground">
            I have many favorite artists, but some of my top picks are Avicii,
            Calvin Harris, Fisher, and many more. 🎶
          </p>
          {/* Tomorrowland - Image */}
          <figure className="mb-6 mt-8">
            <Image
              src={Tomorrowland}
              alt="Picture of Ariful Islam"
              width={400}
              className="rounded-md border shadow-xl"
              priority={true} // Ensures image loads fast
            />
            <figcaption className="mt-2 text-center text-sm text-foreground/60">
              Tomorrowland 2018
            </figcaption>
          </figure>
          <p className="mt-4 text-lg text-foreground dark:text-muted-foreground">
            I also love spending weekends going out with friends and singing
            karaoke—it&apos;s always a great way to unwind and have fun!
          </p>
        </div>

        {/* Right Side - Text */}
        <div className="px-4 text-left sm:w-[50%]">
          <p className="mb-4 text-lg text-foreground dark:text-muted-foreground">
            When i was in high school, I tried to learn guitar to impress girls,
            but then I found a better way to do it 😉
          </p>
          <p className="mb-4 text-lg text-foreground dark:text-muted-foreground">
            Joking.. 😋 I love playing guitar and enjoy learning new covers
            whenever I have free time. My favorite song to play is &apos;Ayo
            Technology&apos; by Milow, and I&apos;m always looking for the next
            great track to master.
          </p>
          <p className="mb-4 text-lg text-foreground dark:text-muted-foreground">
            I enjoy playing guitar when hanging out with friends and family,
            creating good times and lasting memories.
          </p>

          <div className="">
            <figure className="mt-8 p-4">
              <video
                controls
                width="500"
                className="rounded-md border shadow-md"
              >
                <source src="/videos/ayo_technology.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Ayo Technology by Milow
              </figcaption>
            </figure>
          </div>
          <p className="text-lg text-foreground dark:text-muted-foreground">
            This was during the mid-summer festival, we visited Tahko, which was
            an amazing experience. I love attending festivals in the summertime,
            especially when I get to hang out with friends and enjoy the Finnish
            summer—it&apos;s one of my favorite ways to embrace the season!
          </p>
          {/* Jurrasic Rock- Image */}
          <figure className="mb-6 mt-8">
            <Image
              src={JurrasicRock}
              alt="Picture of Jurrasic Rock"
              width={400}
              className="rounded-md border shadow-xl"
              priority={true} // Ensures image loads fast
            />
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              Jurrasic Rock
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
