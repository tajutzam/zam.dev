import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactLinks = [
  {
    label: "Email",
    href: "mailto:mohammadtajutzamzami07@gmail.com",
    icon: <EnvelopeIcon className="w-5 h-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/tajutzam",
    icon: <FaGithub />,
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/zam.jv/",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-tajut-zam-zami/",
    icon: <FaLinkedin />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@synzftgranger_?_t=8mX6YX55l3I&_r=1",
    icon: <FaTiktok />,
  },
];

export default ContactLinks;
