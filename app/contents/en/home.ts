import { IoDocumentAttach } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HOME_CONTENT = {
  title: "Anthony Shin",
  titleMsg: "Hello There!👋",
  titleMsg2: "I am ",
  subTitle: "International and create full-stack developer✨",
  buttons: [
    {
      title: "LinkedIn",
      icon: FaLinkedin,
      type: "link",
      link: "https://www.linkedin.com/in/anthony-shin/",
    },
    {
      title: "GitHub",
      icon: FaGithub,
      type: "link",
      link: "https://github.com/shinn92dev",
    },
    {
      title: "Resume",
      icon: IoDocumentAttach,
      type: "file",
      link: "/Resume_Anthony-Shin_250718.pdf",
    },
    {
      title: "Email",
      icon: MdEmail,
      type: "email",
      link: "mailto:anthony.seunghwan.shin@gmail.com",
    },
  ],
  shortIntro:
    "a Result-Oriented Full-Stack Developer🛠️ with a global perspective🌍 and a passion for turning complexity into clarity.🧠",
  projectTitle: "SOME OF MY RECENT WORKS",
};

export default HOME_CONTENT;
