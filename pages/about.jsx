import Container from "../components/Container";
import Button from "../components/Button";
import Image from "next/image";
import img from "../public/logo-gold.png";
import Meta from "../components/Meta";

const about = () => {
    return (
        <Container className="h-screen flex pt-16 tab:flex-col ph:flex-col-reverse ph:h-auto">
            <Meta
                title="Bifrost MUN - About"
                description="Bifrost MUN is the first MUN offered by Bifrost Edtech. We wish to encourage all our future diplomats to strive for excellence"
                keywords="bifrost, mun, model united nations, about, about us, about bifrost, bifrost ed tech, bifrostedtech, united nations"
            />

            <div className="para flex flex-col items-start justify-center h-full w-1/2 tab:w-full tab:px-0 tab:mt-10 tab:items-center ph:my-16 ph:h-auto">
                <h1 className="text-4xl font-semibold mb-6 tab:text-center">
                    Bifrost MUN
                </h1>
                <p className="text-xl pr-40 mb-5 leading-loose blap:text-lg blap:pr-28 blap:leading-loose lap:text-base lap:pr-16 tab:text-center tab:px-10 ph:px-2 ph:text-justify">
                    We, at{" "}
                    <span className="text-gold">
                        Bifrost Model United Nations
                    </span>{" "}
                    firmly believe in the quality of debate and diplomacy and
                    encourage all our future diplomats to strive for excellence.
                    Our vision is to create a holistic environment for learning
                    and training the future of the country. We provide avenues
                    to public speaking, research, deliberation, constructive
                    debate critical thinking.
                </p>
                <Button href="/brochure.pdf" target="_blank" rel="noreferrer">
                    Brochure
                </Button>
            </div>
            <div className="w-1/2 flex justify-center items-center blap:pl-20 tab:w-full tab:mb-20 tab:mt-10 tab:px-24 ph:my-0 ph:mt-14 ph:px-8">
                <Image
                    src={img}
                    alt="alt"
                    placeholder="blur"
                    className="rounded-md"
                />
            </div>
        </Container>
    );
};

export default about;
