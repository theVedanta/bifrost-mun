import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                    <RingLoader loading={loading} color={"#f6f6f6"} />
                </div>
            ) : (
                <>
                    <Nav />
                    <Component {...pageProps} />
                    <Footer />
                </>
            )}
        </>
    );
}

export default MyApp;
