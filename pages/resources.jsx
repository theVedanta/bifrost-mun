import Container from "../components/Container";
import ResourceCard from "../components/Resources/ResourceCard";
import brochure from "../public/res/brochure.svg";

const resources = () => {
    const ress = [
        {
            name: "Conference Brochure",
            href: "/",
            img: brochure,
        },
        {
            name: "Conference Brochure",
            href: "/",
            img: brochure,
        },
        {
            name: "Conference Brochure",
            href: "/",
            img: brochure,
        },
    ];
    return (
        <Container className="pt-16">
            <h1 className="text-center text-5xl font-semibold mt-24 mb-20">
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
