import type { Route } from "./+types/home";

export const meta = ({}: Route.MetaArgs) => {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
};

const Home = () => {
    return <div className="w-32 h-32 bg-coral">Home</div>;
};

export default Home;
