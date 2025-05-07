import { useState } from "react";
import { FaAlignJustify, FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const navigate = useNavigate();
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
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold md:block`}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold  md:block`}
                        onClick={() => {
                            navigate("/about");
                        }}
                    >
                        About
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold  md:block`}
                        onClick={() => {
                            navigate("/project");
                        }}
                    >
                        Project
                    </li>
                    <li
                        className={`${!isNavOpen && "hidden"} py-3 text-xl font-bold md:block`}
                        onClick={() => {
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
