import Link from "next/link";

const Button = ({ children, href, className, rel, target, onClick }) => {
    return (
        <Link target={target} rel={rel} href={href} onClick={onClick}>
            <a
                target={target}
                rel={rel}
                className={`px-5 py-2 bg-gold font-medium text-gray-900 rounded-md transition-all duration-150 cursor-pointer hover:scale-90 active:scale-75 ${className}`}
            >
                {children}
            </a>
        </Link>
    );
};

export default Button;
