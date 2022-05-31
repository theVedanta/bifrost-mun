import Image from "next/image";
import MemberCard from "../Members/MemberCard";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CommitteeCard = ({ com }) => {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div
            // className={`com-card flex flex-col w-full bg-gray-800 px-24 ${
            //     cardOpen ? "pt-16 pb-6" : "py-16"
            // } rounded-md shadow-md mb-14`}

            className={`com-card flex flex-col w-full bg-gray-800 px-24 pt-16 pb-6 rounded-md shadow-md mb-14`}
        >
            <div className="com-head flex w-full">
                <div className="com-img w-2/12">
                    <Image
                        src={com.logo}
                        alt="alt"
                        width={200}
                        height={200}
                        objectFit="cover"
                        placeholder="blur"
                        className="rounded-md"
                    />
                </div>

                <div className="head-content flex w-10/12 flex-col justify-center pl-20">
                    <h2 className="font-semibold text-3xl">{com.name}</h2>
                    <p className="mt-5 text-xl font-light italic leading-relaxed w-2/3">
                        {com.agenda}
                    </p>
                </div>
            </div>

            {cardOpen ? (
                <>
                    <h2 className="font-medium text-2xl mt-10 text-center mb-3">
                        Members
                    </h2>
                    <div className="com-members flex justify-evenly items-center">
                        {com.members.map((member) => (
                            <MemberCard
                                member={member}
                                key={member.name}
                                className="mb-0"
                            />
                        ))}
                    </div>
                </>
            ) : (
                ""
            )}

            <div
                className="flex w-full justify-center py-3 cursor-pointer"
                onClick={() => setCardOpen(!cardOpen)}
            >
                <FaChevronDown
                    className={`text-3xl ${cardOpen ? "rotate-180" : ""}`}
                />
            </div>
        </div>
    );
};

export default CommitteeCard;
