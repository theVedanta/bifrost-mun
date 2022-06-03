import Link from "next/link";
import { useEffect } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
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
    const [ham, setHam] = useState(false);

    useEffect(() => {
        document.querySelector("nav").style.transform = "rotateX(0deg)";
    }, []);

    return (
        <nav
            className="nav flex items-center w-screen px-24 py-3 bg-gray-900 text-white fixed top-0 left-0 z-40 transition-all duration-1000 lap:px-12 ph:px-6"
            style={{ transform: "rotateX(90deg)", transformOrigin: "top" }}
        >
            <div className="w-1/3 tab:w-1/2">
                <h1 className="text-2xl font-bold mph:text-xl">Bifrost MUN</h1>
            </div>

            <div
                className={`nav-links w-2/3 transition-all ease-in-out duration-500 flex justify-end items-center tab:fixed tab:top-0 tab:h-screen tab:w-1/2 tab:flex-col tab:bg-gray-800 tab:justify-center tab:z-30 ${
                    ham ? "tab:right-0" : "tab:-right-full"
                } ph:w-2/3`}
                style={
                    ham
                        ? { boxShadow: "0 0 50px rgba(246, 246, 246, 0.1)" }
                        : {}
                }
            >
                {links.map((link) => (
                    <Link href={link.href} key={link.href}>
                        <a
                            onClick={() => setHam(false)}
                            className={`px-4 py-2 ml-1 font-medium rounded-md transition-all duration-150 hover:bg-gray-800 lap:text-sm tab:py-4 tab:text-base`}
                        >
                            {link.title}
                        </a>
                    </Link>
                ))}
                <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfB9acEWoVU2vV7honSLqwUStFeVdZ7a6NAXlfH0j34skryKg/viewform"
                    className="ml-1 lap:text-sm tab:my-4 tab:text-base"
                    target="_blank"
                    rel="noreferrer"
                >
                    Register
                </Button>
            </div>

            <div className="ham-hold hidden w-1/2 justify-end items-center tab:flex tab:z-50">
                <div className="ham pl-10 py-2" onClick={() => setHam(!ham)}>
                    {ham ? (
                        <FaTimes className="text-xl" />
                    ) : (
                        <FaBars className="text-xl" />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
