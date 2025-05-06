import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { Button } from "~/components/ui/button";

const Contact = () => {
    return (
        <div className="pb-10">
            <div className="w-full text-center bg-gray-700 py-8">
                <p>Header</p>
            </div>
            <div>
                <div className="w-full aspect-[1/0.43] bg-amber-200">
                    <img src="" alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-7xl font-bold">Contact.</h1>
                <div className="px-5 flex flex-col items-center my-16 mb-26 bg-gray-300/50">
                    <p>I’m always excited to connect with amazing people 💫 </p>
                    <p>
                        Whether it’s a project, volunteer work, or any fun opportunity — count me
                        in!
                    </p>
                    <p>
                        Feel free to reach out anytime 📬 I can’t wait to work together with you!
                        🚀💛
                    </p>
                </div>
                <div className="w-full px-10  mt-10 grid gap-5 md:grid-cols-2">
                    <Button className="w-full py-7 flex justify-center gap-5 cursor-pointer">
                        <span className="scale-200">
                            <FaGithub />
                        </span>
                        <p>GitHub</p>
                    </Button>
                    <Button className=" w-full py-7 flex justify-center gap-5 cursor-pointer">
                        <span className="scale-200">
                            <FaLinkedin />
                        </span>
                        <p>LinkedIn</p>
                    </Button>
                    <Button className=" w-full py-7 flex justify-center gap-5 cursor-pointer md:col-span-2">
                        <span className="scale-200">
                            <FaEnvelope />
                        </span>
                        <p>anthony.seunghwan.shin@gmail.com</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
