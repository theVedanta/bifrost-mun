import Container from "../Container";
import Image from "next/image";
import img from "../../public/logo-gold.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Clock from "./Clock";

const Header = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Container className="flex flex-col items-center justify-center h-screen pt-16">
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

            <Image
                placeholder="blur"
                src={img}
                alt="img"
                width={350}
                height={300}
                objectFit="contain"
                className="rounded-md"
                priority
            />

            <h1 className="font-bold text-7xl mt-5 mb-3 text-center w-full tracking-tight lap:text-6xl mph:text-5xl mph:mt-0">
                BIFROST MUN
            </h1>
            <h2 className="font-medium text-2xl lap:text-xl mph:text-lg">
                &quot;Breakthrough to{" "}
                <span className="text-gold">Excellence</span>
                &quot;
            </h2>

            <Clock />

            <h3 className="font-medium mt-5 text-xl mph:text-lg mph:mt-3">
                Maiden Edition (18-19th June)
            </h3>
        </Container>
    );
};

export default Header;
