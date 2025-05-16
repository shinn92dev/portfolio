import { useEffect, useState } from "react";
import { FaAlignJustify, FaRegCircleXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MainHeader = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Project", path: "/project" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full text-center bg-indigo text-beige py-5">
            <nav>
                <ul className="flex flex-col items-end md:flex-row md:items-center md:justify-end px-5 gap-x-5">
                    <li className="md:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                        {isNavOpen ? (
                            <FaRegCircleXmark size={20} className="cursor-pointer" />
                        ) : (
                            <FaAlignJustify size={20} className="cursor-pointer" />
                        )}
                    </li>
                    {navItems.map(({ name, path }) => (
                        <li
                            key={path}
                            className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold md:block`}
                            onClick={() => setIsNavOpen(false)}
                        >
                            <NavLink
                                to={path}
                                className={({ isActive }) => (isActive ? "border-b-2" : undefined)}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                    <li className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold md:block`}>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="en" aria-label="en" defaultChecked>
                                <span>EN</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="kr" aria-label="kr">
                                <span>KR</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="jp" aria-label="jp">
                                <span>JP</span>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
