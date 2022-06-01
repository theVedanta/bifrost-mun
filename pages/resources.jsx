import Container from "../components/Container";
import ResourceCard from "../components/Resources/ResourceCard";
import brochure from "../public/res/brochure.svg";
import bg_guide from "../public/res/bg_guide.svg";
import matrix from "../public/res/matrix.svg";
import schedule from "../public/res/schedule.svg";
import Meta from "../components/Meta";

const resources = () => {
    const ress = [
        {
            name: "Conference Brochure",
            href: "/res/brochure.pdf",
            img: brochure,
        },
        {
            name: "Background Guides",
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
    return (
        <Container className="pt-16">
            <Meta
                title="Bifrost MUN - Resources"
                description="Bifrost MUN Resources for gathering knowledge about the Model United Nations and getting an idea about the agendas/committees."
                keywords="bifrost, mun, model united nations, resources, learning, agendas, bifrost ed tech, bifrostedtech, united nations"
            />

            <h1 className="text-center text-5xl font-semibold mt-24 mb-20 ph:mt-10 ph:mb-8">
                Resources
            </h1>

            <div className="resources flex w-full flex-wrap items-center justify-evenly">
                {ress.map((res) => (
                    <ResourceCard key={res.name} res={res} />
                ))}
            </div>
        </Container>
    );
};

export default resources;
