import Container from "../components/Container";
import ResourceCard from "../components/Resources/ResourceCard";
import brochure from "../public/res/brochure.svg";
import bg_guide from "../public/res/bg_guide.svg";
import matrix from "../public/res/matrix.svg";
import schedule from "../public/res/schedule.svg";
import Meta from "../components/Meta";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const resources = () => {
    const ress = [
        {
            name: "Conference Brochure",
            href: "/res/brochure.pdf",
            img: brochure,
        },
        {
            name: "Background Guides (coming soon)",
            href: "/",
            img: bg_guide,
        },
        {
            name: "Committee Matrix",
            href: "/res/matrix.pdf",
            img: matrix,
        },
        {
            name: "Conference Schedule",
            href: "/res/schedule.pdf",
            img: schedule,
        },
    ];
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Container className="pt-16">
            <Meta
                title="Bifrost MUN - Resources"
                description="Bifrost MUN Resources for gathering knowledge about the Model United Nations and getting an idea about the agendas/committees."
                keywords="bifrost, mun, model united nations, resources, learning, agendas, bifrost ed tech, bifrostedtech, united nations"
            />

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f6f6f6",
                        },
                        links: {
                            color: "#f6f6f6",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
                className="-z-10"
            />

            <h1 className="text-center text-5xl font-semibold mt-24 mb-20 z-20 ph:mt-10 ph:mb-8">
                Resources
            </h1>

            <div className="resources flex w-full flex-wrap items-center justify-evenly z-20">
                {ress.map((res) => (
                    <ResourceCard key={res.name} res={res} />
                ))}
            </div>
        </Container>
    );
};

export default resources;
