import { useEffect, useState } from "react";
import { FaAlignJustify, FaRegCircleXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // ❗ SSR 중에는 아무것도 렌더링하지 않음

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Project", path: "/project" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full text-center bg-indigo text-beige py-5">
            <nav>
                <ul className="flex flex-col items-end md:flex-row justify-end px-5 gap-x-5">
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
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
