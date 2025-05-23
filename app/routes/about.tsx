import AboutHeader from "@/components/custom/AboutHeader";
import { useHeaderHeight } from "@/components/custom/context/HeaderHeightContext";
import ABOUT_EDUCATION from "@/contents/en/about_education";
import ABOUT_EXPERIENCES from "@/contents/en/about_experiences";
import EducationCard from "@/components/custom/EducationCard";
import ExperienceCard from "@/components/custom/ExperienceCard";

const about = () => {
    const headerHeight = useHeaderHeight();
    return (
        <div className="mb-10">
            <AboutHeader pt={headerHeight} />
            <div className="grid gap-y-5">
                <section id="about" className="border-2 ">
                    About
                </section>
                <section id="detailed_about" className="border-2 ">
                    Detailed
                </section>
                <section id="experience" className="">
                    <h2 className="text-2xl font-bold mb-5">Experiences</h2>
                    <div className="grid gap-y-2 md:px-5 px-3">
                        {ABOUT_EXPERIENCES.map((item) => {
                            return (
                                <ExperienceCard
                                    key={item.id}
                                    company={item.company}
                                    title={item.title}
                                    location={item.location}
                                    duration={item.duration}
                                    role={item.role}
                                />
                            );
                        })}
                    </div>
                </section>
                <section id="skill" className=""></section>
                <section id="education" className="">
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
