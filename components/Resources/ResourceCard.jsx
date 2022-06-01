import Link from "next/link";
import Image from "next/image";

const ResourceCard = ({ res }) => {
    return (
        <Link href={res.href} target="_blank" rel="noreferrer">
            <a
                target="_blank"
                rel="noreferrer"
                className={`bg-gray-800 w-3/12 mx-10 mb-20 flex flex-col items-center shadow-xl justify-center py-10 px-2 rounded-md transition-all hover:bg-gray-700 lap:w-1/3 lap:mx-1 tab:w-5/12 tab:mx-4 tab:mb-12 ph:mb-6 ph:w-full ph:mx-0`}
            >
                <Image
                    alt="alt"
                    src={res.img}
                    width={120}
                    height={120}
                    className="rounded-full"
                    objectFit="cover"
                />
                <h3 className="mt-8 font-semibold text-2xl text-center lap:text-xl ph:text-xl">
                    {res.name}
                </h3>
            </a>
        </Link>
    );
};

export default ResourceCard;
