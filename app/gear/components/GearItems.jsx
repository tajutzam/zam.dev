import { LuLaptop2 } from "react-icons/lu";
import { BsFillMouseFill } from "react-icons/bs";
import { FaKeyboard, FaFigma, FaNodeJs, FaJava } from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiExpress,
  SiLaravel,
  SiSpringboot,
  SiWindows,
  SiNotion,
  SiGooglechrome,
  SiVisualstudiocode,
  SiFirefoxbrowser,
  SiLaragon,
  SiAndroidstudio,
  SiIntellijidea,
  SiTrello,
  SiSpotify,
  SiOpenai,
} from "react-icons/si";

const GearItem = ({ icon, title }) => (
  <li className="flex items-center gap-6">
    {icon}
    <h1>{title}</h1>
  </li>
);

const GearItemsSection = ({ title, items }) => (
  <section className="flex flex-col gap-8 animate-in" style={{ "--index": 3 }}>
    <h2 className="text-secondary">{title}</h2>
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-4 mb-4 lg:-mb-5 animated-list">
      {items.map((item, index) => (
        <GearItem key={index} {...item} />
      ))}
    </ul>
  </section>
);

const GearItems = () => {
  const techGear = [
    {
      icon: <LuLaptop2 className="w-7 h-7" />,
      title: "Lenovo Loq Ryzen 5 7000 RTX 3050",
    },
    {
      icon: <BsFillMouseFill className="w-7 h-7" />,
      title: "Lenovo LOQ M100 RGB Mouse",
    },
    {
      icon: <FaKeyboard className="w-7 h-7" />,
      title: "NYK Nemesis HELENS MKN06",
    },
  ];

  const codingTools = [
    {
      icon: <SiWindows className="w-7 h-7" />,
      title: "Windows 11 Home Edition",
    },
    {
      icon: <SiVisualstudiocode className="w-7 h-7" />,
      title: "Visual Studio Code",
    },
    { icon: <SiGooglechrome className="w-7 h-7" />, title: "Google Chrome" },
    {
      icon: <SiFirefoxbrowser className="w-7 h-7" />,
      title: "Firefox Browser",
    },
    { icon: <SiOpenai className="w-7 h-7" />, title: "ChatGPT" },
    { icon: <SiLaragon className="w-7 h-7" />, title: "Laragon" },
    { icon: <SiAndroidstudio className="w-7 h-7" />, title: "Android Studio" },
    { icon: <SiIntellijidea className="w-7 h-7" />, title: "IntelliJ IDEA" },
  ];

  const designTools = [
    { icon: <FaFigma className="w-7 h-7" />, title: "Figma" },
  ];

  const productivityApps = [
    { icon: <SiNotion className="w-7 h-7" />, title: "Notion" },
    { icon: <SiTrello className="w-7 h-7" />, title: "Trello" },
    { icon: <SiSpotify className="w-7 h-7" />, title: "Spotify" },
  ];

  const languagesAndFrameworks = [
    {
      icon: <SiTypescript className="w-7 h-7 " />,
      title: "TypeScript — Backend with Node.js & Express.js",
    },
    {
      icon: <SiJavascript className="w-7 h-7 " />,
      title: "JavaScript — Fullstack development with Express.js & Next.js",
    },
    {
      icon: <FaJava className="w-7 h-7 " />,
      title: "Java — Backend development using Spring Boot",
    },
    {
      icon: <SiPhp className="w-7 h-7 " />,
      title: "PHP — Web backend using Laravel Framework",
    },
  ];

  return (
    <>
      <GearItemsSection title="Tech Gear" items={techGear} />
      <GearItemsSection title="Coding Tools" items={codingTools} />
      <GearItemsSection
        title="Programming Languages & Frameworks"
        items={languagesAndFrameworks}
      />
      <GearItemsSection title="UI/UX Design" items={designTools} />
      <GearItemsSection title="Productivity Apps" items={productivityApps} />
    </>
  );
};

export default GearItems;
