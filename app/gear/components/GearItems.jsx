import { LuLaptop2 } from "react-icons/lu";

import { BsFillMouseFill } from "react-icons/bs";
import { TbDeviceAirpods } from "react-icons/tb";
import { FaKeyboard } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import {
  SiWindows,
  SiNotion,
  SiMiro,
  SiArc,
  SiOpenai,
  SiFramer,
  SiGooglechrome,
  SiVisualstudiocode,
  SiFirefoxbrowser,
  SiLaragon,
  SiAndroidstudio,
  SiIntellijidea,
  SiTrello,
  SiTodoist,
  SiValorant,
  SiSpotify,
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
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-4 mb-4 lg:-mb-5   animated-list">
      {items.map((item, index) => (
        <GearItem key={index} {...item} />
      ))}
    </ul>
  </section>
);

const GearItems = () => {
  const techGear = [
    { icon: <LuLaptop2 className="w-7 h-7" />, title: "Lenovo Loq Ryzen 5 7000 RTX 3050" },
    {
      icon: <BsFillMouseFill className="w-7 h-7" />,
      title: "Lenovo LOQ M100 RGB MOUSE",
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
    {
      icon: <SiGooglechrome className="w-7 h-7" />,
      title: "Google Chrome",
    },
    {
      icon: <SiFirefoxbrowser className="w-7 h-7" />,
      title: "FireFox Browser",
    },
    {
      icon: <SiOpenai className="w-7 h-7" />,
      title: "Chat GPT",
    },
    {
      icon: <SiLaragon className="w-7 h-7" />,
      title: "Laragon",
    },
    {
      icon: <SiAndroidstudio className="w-7 h-7" />,
      title: "Android Studio",
    },
    {
      icon: <SiIntellijidea className="w-7 h-7" />,
      title: "Intelij Idea",
    },
  ];

  const designTools = [
    {
      icon: <FaFigma className="w-7 h-7" />,
      title: "Figma",
    },
  ];

  const productivityApps = [
    { icon: <SiNotion className="w-7 h-7" />, title: "Notion" },
    { icon: <SiTrello className="w-7 h-7" />, title: "Trello" },
    { icon: <SiSpotify className="w-7 h-7" />, title: "Spotify" },

  ];

  const gameApps = [
    { icon: <SiValorant className="w-7 h-7" />, title: "Valorant" },
  ];

  return (
    <>
      <GearItemsSection title="Tech Gear" items={techGear} />
      <GearItemsSection title="Coding Tools" items={codingTools} />
      <GearItemsSection title="UI/UX Design" items={designTools} />
      <GearItemsSection title="Productivity Apps" items={productivityApps} />
      <GearItemsSection title="Gaming" items={gameApps} />
    </>
  );
};

export default GearItems;
