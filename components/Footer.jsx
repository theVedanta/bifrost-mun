import Container from "./Container";

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 w-screen py-3">
            <Container className="flex justify-between items-center">
                <h4 className="font-medium">
                    For queries contact:{" "}
                    <a className="text-gold" href="mailto:bifrostmun@gmail.com">
                        bifrostmun@gmail.com
                    </a>{" "}
                    |{" "}
                    <a
                        className="text-gold"
                        href="mailto:info.bifrostmun@gmail.com"
                    >
                        info.bifrostmun@gmail.com
                    </a>
                </h4>

                <h4 className="font-medium opacity-75">
                    Developed by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/theVedanta"
                        className="underline"
                    >
                        theVedanta
                    </a>{" "}
                    &copy; 2022
                </h4>
            </Container>
        </footer>
    );
};

export default Footer;
