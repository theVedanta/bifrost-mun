import Container from "../components/Container";
import ContactBox from "../components/Contact/ContactBox";
import QueryBox from "../components/Contact/QueryBox";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Meta from "../components/Meta";

const contact = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Container className="pt-16 flex h-screen tab:h-auto tab:flex-col tab:pt-24 tab:items-center tab:justify-center">
            <Meta
                title="Bifrost MUN - Contact"
                description="Bifrost MUN contact us page for getting in touch with on of our executive members of a member of the executive board. In case of any query, write us a message!"
                keywords="bifrost, mun, model united nations, contact, query, send message, bifrost ed tech, bifrostedtech, united nations"
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

            <div className="contact w-1/2 flex justify-center items-center h-full tab:w-2/3 ph:w-full">
                <ContactBox />
            </div>

            <div className="query w-1/2 flex justify-center items-center h-full tab:w-2/3 ph:w-full">
                <QueryBox />
            </div>
        </Container>
    );
};

export default contact;
