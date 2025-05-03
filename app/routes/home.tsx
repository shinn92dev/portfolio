import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "~/components/ui/button";

const Home = () => {
    return (
        <div className="pb-10">
            <div className="w-full text-center bg-gray-700 py-8">
                <p>Header</p>
            </div>
            {/* Main Photo */}
            <div className="grid md:grid-cols-2">
                <div className="w-full aspect-[1/0.6] bg-amber-300 flex justify-center items-center max-w-">
                    <p>Photo</p>
                </div>
                <div className="w-full bg-gray-400 flex flex-col">
                    <div className="md:h-full ">
                        <p className="text-3xl text-center py-3">TEST</p>
                    </div>
                    <div className="w-full bg-amber-200 flex justify-center p-5 gap-5">
                        <Button>LinkedIn</Button>
                        <Button>GitHub</Button>
                        <Button>Resume</Button>
                        <Button>Email</Button>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <p className="text-xl px-3 py-5 bg-amber-100">
                        Voluptate non laborum ad deserunt fugiat incididunt irure qui.
                    </p>
                </div>
            </div>
            {/* Top Project Section */}
            <div>
                <div className="py-5">
                    <h2 className="text-xl text-center">Projects</h2>
                </div>
                <Carousel className="px-3">
                    <CarouselContent className="gap-5">
                        <CarouselItem className="md:basis-1/3">
                            <Card className="min-h-56 pt-0 rounded-sm ">
                                <div className="w-full bg-gray-200 h-40"></div>
                                <CardHeader>
                                    <div className="grid grid-cols-2 md:grid-cols-1">
                                        <CardTitle className="w-full">Project Name</CardTitle>
                                        <p className="w-full text-end">0000/00 ~ 0000/00</p>
                                    </div>
                                    <CardDescription>
                                        <div className="flex gap-x-5 flex-wrap">
                                            <p>Front-developer</p>
                                            <p>Project manager</p>
                                        </div>
                                        <div className="flex gap-x-5 flex-wrap">
                                            <p>React</p>
                                            <p>Python</p>
                                            <p>FastAPI</p>
                                            <p>TailwindCSS</p>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Ea nisi sit veniam irure sint non id consectetur amet sit
                                        aliqua. Enim adipisicing laborum id incididunt ex culpa
                                        tempor magna quis dolore sunt exercitation culpa. Id.
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Card className="min-h-56 pt-0 rounded-sm ">
                                <div className="w-full bg-gray-200 h-40"></div>
                                <CardHeader>
                                    <div className="grid grid-cols-2 md:grid-cols-1">
                                        <CardTitle className="w-full">Project Name</CardTitle>
                                        <p className="w-full text-end">0000/00 ~ 0000/00</p>
                                    </div>
                                    <CardDescription>
                                        <div className="flex gap-x-5 flex-wrap">
                                            <p>Front-developer</p>
                                            <p>Project manager</p>
                                        </div>
                                        <div className="flex gap-x-5 flex-wrap">
                                            <p>React</p>
                                            <p>Python</p>
                                            <p>FastAPI</p>
                                            <p>TailwindCSS</p>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Ea nisi sit veniam irure sint non id consectetur amet sit
                                        aliqua. Enim adipisicing laborum id incididunt ex culpa
                                        tempor magna quis dolore sunt exercitation culpa. Id.
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Card className="min-h-56 pt-0 rounded-sm ">
                                <div className="w-full bg-gray-200 h-40"></div>
                                <CardHeader>
                                    <div className="grid grid-cols-2 md:grid-cols-1">
                                        <CardTitle className="w-full">Project Name</CardTitle>
                                        <p className="w-full text-end">0000/00 ~ 0000/00</p>
                                    </div>
                                    <CardDescription>
                                        <div className="flex gap-x-5 flex-wrap">
                                            <p>Front-developer</p>
                                            <p>Project manager</p>
                                        </div>
                                        <div className="flex gap-x-5 flex-wrap">
                                            <p>React</p>
                                            <p>Python</p>
                                            <p>FastAPI</p>
                                            <p>TailwindCSS</p>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Ea nisi sit veniam irure sint non id consectetur amet sit
                                        aliqua. Enim adipisicing laborum id incididunt ex culpa
                                        tempor magna quis dolore sunt exercitation culpa. Id.
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
