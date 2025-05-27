import AboutHeader from "@/components/custom/AboutHeader";
import { useHeaderHeight } from "@/components/custom/context/HeaderHeightContext";
import ABOUT_EDUCATION from "@/contents/en/about_education";
import ABOUT_EXPERIENCES from "@/contents/en/about_experiences";
import EducationCard from "@/components/custom/EducationCard";
import ExperienceCard from "@/components/custom/ExperienceCard";
import { Separator } from "@/components/ui/separator";
import ABOUT_SKILLS from "@/contents/en/about_skills";
import SkillCard from "~/components/custom/SkillCard";
const about = () => {
    const headerHeight = useHeaderHeight();
    return (
        <div className="mb-10">
            <AboutHeader pt={headerHeight} />
            <div className="grid gap-y-5">
                <section id="about" className="border-2 ">
                    About
                </section>
                <Separator className="my-5" />

                <section id="detailed_about" className="">
                    <h2 className="text-5xl font-bold mb-5">About..</h2>
                    <div className="md:px-5 px-3">
                        <div className="mb-5">
                            <h3 className="text-center text-3xl font-bold">I am Anthony</h3>
                            <h4 className="text-center text-xl font-bold">
                                A Result-Oriented{" "}
                                <span className="text-2xl">Full-Stack Developer</span> based in
                                Vancouver, Canada.
                            </h4>
                        </div>
                        <div className="flex flex-col gap-y-3 mb-5">
                            <p>
                                I was born in South Korea, built my early career in Japan’s
                                semiconductor industry, and now live in Vancouver, Canada. Speaking
                                three languages and working across cultures taught me how to adapt,
                                listen, and connect — skills I carry into my development work today.
                            </p>
                            <p>
                                During the pandemic, I found myself stuck indoors and stumbled upon
                                coding. What started as a way to pass the time became something I
                                truly love. There’s something magical about creating real impact
                                using just a laptop and an idea. I studied Computer Systems at BCIT
                                and later completed my Bachelor’s in Computer Science — and I
                                haven’t looked back since.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-5">Fun Fact About Me: </h4>
                            <ul className="px-5 grid gap-y-3">
                                <li className="flex gap-x-3">
                                    <span>🎨</span>
                                    <p>
                                        I believe the keyboard is a modern paintbrush — and coding
                                        is how I tell my story.
                                    </p>
                                </li>
                                <li className="flex gap-x-3">
                                    <span>🧪</span>
                                    <p>
                                        I used to sell semiconductor materials. Now I build software
                                        — but either way, I’ve always been passionate about making
                                        things work better.
                                    </p>
                                </li>
                                <li className="flex gap-x-3">
                                    <span>☕</span>
                                    <p>
                                        I can’t start my day without coffee or tea. It’s not just a
                                        drink — it’s my daily ritual that helps me slow down and
                                        focus on what matters.
                                    </p>
                                </li>
                                <li className="flex gap-x-3">
                                    <span>🐶</span>
                                    <p>
                                        I’m 100% a dog person. Every time I see one on the street, I
                                        forget everything else for a moment. Their joy is
                                        contagious!
                                    </p>
                                </li>
                                <li className="flex gap-x-3">
                                    <span>🏞️</span>
                                    <p>
                                        I love hiking through forests and mountains. Living in
                                        Vancouver means I’m never too far from nature — and that
                                        makes my heart feel at home. ❤
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Separator className="my-5" />

                <section id="experience" className="">
                    <h2 className="text-5xl font-bold mb-5">Experiences..</h2>
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
                <Separator className="my-5" />

                <section id="skill" className="">
                    <h2 className="text-5xl font-bold mb-5">Skills..</h2>
                    <div className="grid gap-y-3">
                        <h3 className="text-xl font-bold mb-2">Programming Language</h3>
                        <div className="grid gap-y-2 px-3">
                            <ul className="flex flex-wrap gap-x-7 gap-y-5 justify-center">
                                {ABOUT_SKILLS.programmingLanguage.map((item) => (
                                    <SkillCard key={item} skill={item} />
                                ))}
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Frontend</h3>
                        <div className="grid gap-y-2 px-3">
                            <ul className="flex flex-wrap gap-x-7 gap-y-5 justify-center">
                                {ABOUT_SKILLS.frontend.map((item) => (
                                    <SkillCard key={item} skill={item} />
                                ))}
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Backend</h3>
                        <div className="grid gap-y-2 px-3">
                            <ul className="flex flex-wrap gap-x-7 gap-y-5 justify-center">
                                {ABOUT_SKILLS.backend.map((item) => (
                                    <SkillCard key={item} skill={item} />
                                ))}
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Authentication / Security</h3>
                        <div className="grid gap-y-2 px-3">
                            <ul className="flex flex-wrap gap-x-7 gap-y-5 justify-center">
                                {ABOUT_SKILLS.authenticationSecurity.map((item) => (
                                    <SkillCard key={item} skill={item} />
                                ))}
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Database</h3>
                        <div className="grid gap-y-2 px-3">
                            <ul className="flex flex-wrap gap-x-7 gap-y-5 justify-center">
                                {ABOUT_SKILLS.database.map((item) => (
                                    <SkillCard key={item} skill={item} />
                                ))}
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold mb-2">DevIos / Infra</h3>
                        <div className="grid gap-y-2 md:px-5 px-3">
                            <ul className="flex flex-wrap gap-x-7 gap-y-5 justify-center">
                                {ABOUT_SKILLS.devOpsInfra.map((item) => (
                                    <SkillCard key={item} skill={item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <Separator className="my-5" />

                <section id="education" className="">
                    <h2 className="text-5xl font-bold mb-5">Education..</h2>
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
