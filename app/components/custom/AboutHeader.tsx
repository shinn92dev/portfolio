import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skill", label: "Skills" },
  { id: "education", label: "Education" },
];

const AboutHeader = ({ pt }: { pt: number | null }) => {
  const [active, setActive] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const checkMobile = () => setIsMobile(window.innerWidth < 768);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setDropdownOpen(false);
      const mainHeader = document.querySelector("header");
      if (mainHeader) {
        const rect = mainHeader.getBoundingClientRect();
        setIsFixed(rect.bottom <= 0);
      }

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= (pt ?? 60) && rect.bottom > (pt ?? 60)) {
          setActive(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pt]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - (pt ?? 60);
      window.scrollTo({ top: y, behavior: "smooth" });
      setDropdownOpen(false);
    }
  };

  return (
    <nav
      className={`bg-beige z-40 mb-10 w-full max-w-[1028px] shadow-md transition-all ${
        isFixed ? "fixed top-0" : "relative"
      }`}
      style={isFixed ? {} : { marginTop: pt ?? 0 }}
    >
      <ul
        className="flex w-full flex-col items-center justify-end py-2 pr-6 md:flex-row md:gap-x-6"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        {isMobile ? (
          <>
            <li className="cursor-pointer text-lg font-bold">
              {sections.find((s) => s.id === active)?.label}
            </li>
            {isDropdownOpen &&
              sections
                .filter((s) => s.id !== active)
                .map(({ id, label }) => (
                  <li
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="cursor-pointer py-1 text-sm hover:underline"
                  >
                    {label}
                  </li>
                ))}
          </>
        ) : (
          sections.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer px-2 py-1 text-sm font-semibold transition ${
                active === id ? "text-coral underline" : "text-ink"
              }`}
            >
              {label}
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default AboutHeader;
