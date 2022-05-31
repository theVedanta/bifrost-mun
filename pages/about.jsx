import Container from "../components/Container";
import Button from "../components/Button";
import Image from "next/image";
import img from "../public/sample.png";

const about = () => {
    return (
        <Container className="h-screen flex pt-16">
            <div className="para flex flex-col items-start justify-center h-full w-1/2">
                <h1 className="text-4xl font-semibold mb-6">Bifrost MUN</h1>
                <p className="text-xl pr-40 mb-5 leading-loose">
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
                <Button href="/">Brochure</Button>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <Image
                    src={img}
                    alt="alt"
                    width={600}
                    height={400}
                    placeholder="blur"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
        </Container>
    );
};

export default about;
