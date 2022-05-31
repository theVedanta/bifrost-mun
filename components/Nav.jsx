import Link from "next/link";
import { useEffect } from "react";
import Button from "./Button";

const Nav = () => {
    // const [activeLink, setLink] = useState("Home");
    const links = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Committees",
            href: "/committees",
        },
        {
            title: "Resources",
            href: "/resources",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ];

    useEffect(() => {
        document.querySelector("nav").style.transform = "rotateX(0deg)";
    }, []);

    return (
        <nav
            className="nav flex items-center w-screen px-24 py-3 bg-gray-900 text-white fixed top-0 left-0 z-40 transition-all duration-1000"
            style={{ transform: "rotateX(90deg)", transformOrigin: "top" }}
        >
            <div className="w-1/3">
                <h1 className="text-2xl font-semibold">Bifrost MUN</h1>
            </div>
            <div className="nav-links w-2/3 flex justify-end items-center">
                {links.map((link) => (
                    <Link href={link.href} key={link.href}>
                        <a
                            className={`px-4 py-2 ml-1 font-medium rounded-md transition-all duration-150 hover:bg-gray-800`}
                        >
                            {link.title}
                        </a>
                    </Link>
                ))}
                <Button href="/" className="ml-1">
                    Register
                </Button>
            </div>
        </nav>
    );
};

export default Nav;
