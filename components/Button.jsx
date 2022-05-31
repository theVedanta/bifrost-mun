import Link from "next/link";

const Button = ({ children, href, className }) => {
    return (
        <Link href={href}>
            <a
                className={`px-5 py-2 bg-gold font-medium text-gray-900 rounded-md transition-all duration-150 cursor-pointer hover:scale-90 active:scale-75 ${className}`}
            >
                {children}
            </a>
        </Link>
    );
};

export default Button;
