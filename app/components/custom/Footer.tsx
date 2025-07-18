import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const footerIcons = [
  { name: "github", icon: FaGithub, path: "https://github.com/shinn92dev" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/anthony-shin/",
  },
  {
    name: "Email",
    icon: MdEmail,
    path: "mailto:anthony.seunghwan.shin@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-coral w-full py-5 px-10 fix bottom-0">
      <ul className="flex flex-col md:flex-row gap-5 md:justify-end items-end">
        {navItems.map((item) => (
          <li className="h-10" key={item.name}>
            <a href={item.path} className="w-full hover:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex justify-end gap-5">
        {footerIcons.map((item) => (
          <li key={item.name}>
            <a href={item.path} target="_blank" className="">
              {<item.icon size={20} />}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center mt-10">
        © 2025 Anthony Shin. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
