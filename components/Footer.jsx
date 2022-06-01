import Container from "./Container";

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 w-screen py-3">
            <Container className="flex justify-between items-center ph:flex-col ph:items-start ph:justify-center">
                <h4 className="font-medium lap:text-sm tab:text-xs ph:w-full ph:my-2">
                    For queries contact: <br className="hidden ph:block" />
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

                <h4 className="font-medium opacity-75 lap:text-sm tab:text-xs ph:w-full ph:my-2">
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
