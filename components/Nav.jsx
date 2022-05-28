import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [activeLink, setLink] = useState("Home");
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
            title: "Comittees",
            href: "/comittees",
        },
        {
            title: "Resources",
            href: "/resources",
        },
    ];

    return (
        <nav className="nav flex items-center w-screen px-24 py-3 bg-zinc-900 text-white">
            <div className="w-1/2">
                <h1 className="text-2xl">Bifrost-MUN</h1>
            </div>
            <div className="nav-links w-1/2 flex justify-end items-center">
                {links.map((link) => (
                    <Link href={link.href} key={link.href}>
                        <a
                            className={`px-4 py-2 ml-1 rounded transition-all duration-150 ${
                                activeLink === link.title ? "text-gold" : ""
                            } hover:bg-zinc-800`}
                            onClick={() => setLink(link.title)}
                        >
                            {link.title}
                        </a>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
