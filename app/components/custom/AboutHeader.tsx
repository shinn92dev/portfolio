const AboutHeader = () => {
    return (
        <nav>
            <ul className="flex flex-col items-center md:flex-row md:justify-end w-full gap-x-3 py-3 px-3 border-b-4">
                <li className={`p-2`}>About Anthony👤</li>
                <li className={`p-2 `}>Detailed Introduction</li>
                <li className={`p-2 `}>Experience</li>
                <li className={`p-2 `}>Education</li>
                <li className={`p-2 `}>Skills</li>
            </ul>
        </nav>
    );
};
export default AboutHeader;
