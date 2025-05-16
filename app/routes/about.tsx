import AboutHeader from "~/components/custom/AboutHeader";

const about = () => {
    return (
        <div className="pb-10">
            <AboutHeader />
            <div className="min-h-screen h-[1024px]">
                <section id="about" className="h-[200px] border-2 my-2"></section>
                <section id="detailed_about" className="h-[200px] border-2 my-2"></section>
                <section id="Experience" className="h-[200px] border-2 my-2"></section>
                <section id="skill" className="h-[200px] border-2 my-2"></section>
                <section id="education" className="h-[200px] border-2 my-2"></section>
            </div>
        </div>
    );
};

export default about;
