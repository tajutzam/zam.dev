import Section from "@/components/Section";

export const metadata = {
  title: "Bugra Er | About",
  description:
    "I am a Frontend developer who basically just enjoys creating somethings.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <div>
        <h1
          className="animate-in text-3xl font-bold tracking-tight"
          style={{ "--index": 1 }}
        >
          About Me
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 2 }}>
          Just little about my life.
        </p>
      </div>
      <div className="flex flex-col gap-16 animate-in md:gap-24">
        <Section
          heading="About My Life"
          headingAlignment="right"
          style={{ "--index": 3 }}
        >
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 4 }}
          >
            <h1>Hello World, Im Mohammad Tajut Zamzami!</h1>
            <p>
              I am Mohammad Tajut ZamZami, 22 years old, living in Indonesia, East Java, Banyuwangi Regency and I like watching films, drinking coffee, watching the Indonesian national football team, and working as a freelance software engineer. I got this job through word of mouth, like helping informatics students complete their assignments
            </p>
          </div>
        </Section>
        <Section
          heading="Software"
          headingAlignment="right"
          style={{ "--index": 5 }}
        >
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 6 }}
          >
            <p>
              In general, I work with Laravel, Flutter, Bootstrap 5, Next.js, Spring Boot, and CodeIgniter. I always strive to learn these technologies even though I am not yet at the level I want to be. I believe that with continued learning, one day I&#39;ll reach the level I aspire to achieve.
            </p>

          </div>
        </Section>

        <Section
          heading="How I started software"
          headingAlignment="right"
          style={{ "--index": 7 }}
        >
          <div
            className="flex flex-col mb-4 lg:-mb-20 gap-6 animate-in"
            style={{ "--index": 8 }}
          >
            In the winter of 2021, I studied information technology at Jember State Polytechnic. then I started learning algorithms, data structures, then strengthened it by learning Java. I started to be interested in this because it requires strong logic, so I was very motivated to become a software engineer          </div>
        </Section>
      </div>
    </div>
  );
}
