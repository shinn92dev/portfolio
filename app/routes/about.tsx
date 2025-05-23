import AboutHeader from "@/components/custom/AboutHeader";
import { useHeaderHeight } from "@/components/custom/context/HeaderHeightContext";
import ABOUT_EDUCATION from "@/contents/en/about_education";
import EducationCard from "~/components/custom/EducationCard";
const about = () => {
    const headerHeight = useHeaderHeight();
    return (
        <div className="pb-10">
            <AboutHeader pt={headerHeight} />
            <div className="min-h-screen h-[1024px]">
                <section id="about" className="h-[1000px] border-2 my-2">
                    About
                </section>
                <section id="detailed_about" className="h-[1000px] border-2 my-2">
                    Detailed
                </section>
                <section id="experience" className="h-[1000px] border-2 my-2">
                    Experience
                </section>
                <section id="skill" className="my-5"></section>
                <section id="education" className="my-5">
                    <h2 className="text-2xl font-bold mb-5">Education</h2>
                    <div className="grid gap-y-2 md:px-5 px-3">
                        {ABOUT_EDUCATION.map((item) => {
                            return (
                                <EducationCard
                                    key={item.id}
                                    name={item.name}
                                    degree={item.degree}
                                    location={item.location}
                                    duration={item.duration}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default about;
