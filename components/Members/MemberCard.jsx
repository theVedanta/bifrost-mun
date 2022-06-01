import Image from "next/image";

const MemberCard = ({ member, className }) => {
    return (
        <div
            className={`bg-gray-800 w-3/12 mx-10 mb-20 flex flex-col items-center justify-center py-10 px-2 rounded-md lap:w-1/3 tab:w-5/12 tab:mx-4 tab:mb-12 ph:w-11/12 ${className}`}
        >
            <Image
                alt="alt"
                src={member.pfp}
                width={120}
                height={120}
                placeholder="blur"
                className="rounded-full"
                objectFit="cover"
            />
            <h3 className="mt-8 font-semibold text-2xl text-center lap:text-xl ph:text-2xl">
                {member.name}
            </h3>
            <h4 className="mt-3 font-medium">{member.post}</h4>
        </div>
    );
};

export default MemberCard;
