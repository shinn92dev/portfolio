import { useEffect, useState } from "react";
import { FaAlignJustify, FaRegCircleXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const MainHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className="w-full text-center bg-indigo text-beige py-5">
            <nav>
                <ul className="flex flex-col items-end md:flex-row justify-end px-5 gap-x-5">
                    <li
                        className={`md:hidden`}
                        onClick={() => {
                            setIsNavOpen((prev) => !prev);
                        }}
                    >
                        {isNavOpen ? (
                            <FaRegCircleXmark size={20} className="cursor-pointer" />
                        ) : (
                            <FaAlignJustify size={20} className="cursor-pointer" />
                        )}
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold md:block ${
                            location.pathname == "/" && "border-b-2"
                        }`}
                        onClick={() => {
                            setIsNavOpen(false);
                            navigate("/");
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold  md:block ${
                            location.pathname == "/about" && "border-b-2"
                        }`}
                        onClick={() => {
                            setIsNavOpen(false);

                            navigate("/about");
                        }}
                    >
                        About
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold  md:block ${
                            location.pathname == "/project" && "border-b-2"
                        }`}
                        onClick={() => {
                            setIsNavOpen(false);

                            navigate("/project");
                        }}
                    >
                        Project
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold md:block ${
                            location.pathname == "/contact" && "border-b-2"
                        }`}
                        onClick={() => {
                            setIsNavOpen(false);
                            navigate("/contact");
                        }}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
