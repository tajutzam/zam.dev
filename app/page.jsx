import Link from "next/link";
import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import me from "@/public/images/saya.jpeg";
import { EnvelopeIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Mohammad Tajut Zamzami
          </h1>
          <p className="animate-in text-secondary" style={{ "--index": 1 }}>
            I write code and i loved so welcome my spaces.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 }}
        >
          <Image
            src={me}
            width={200}
            height={200}
            alt="avatar"
            style={{
              borderRadius: "20px",
            }}
            className="bg-secondary"
          />
          <QuickLinks />
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 }}
        >
          Hi, I&apos;m Zam, I&apos;m 21 years old and I&apos;ve been learning
          coding since Janurary 2021 and now I&apos;m actively working on Php,
          Laravel, Flutter, Express Js, Java. Now I am actively learning
          Springboot & Python.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 }}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:mohammadtajutzamzami07@gmail.com"
              className="flex items-center gap-2 no-underline"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>Email me</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/contact"
              className="flex items-center gap-2 no-underline"
            >
              <UserGroupIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="animate-in" style={{ "--index": 2 }}>
        <TechIcon />
      </div>
    </div>
  );
}
