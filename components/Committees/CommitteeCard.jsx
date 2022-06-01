import Image from "next/image";
import MemberCard from "../Members/MemberCard";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CommitteeCard = ({ com }) => {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className="com-card flex flex-col w-full bg-gray-800 px-24 pt-16 pb-6 rounded-md shadow-md mb-14 lap:px-14 lap:pt-10 lap:pb-4 tab:px-10 tab:pt-8 tab:pb-2 ph:px-5 ph:pt-10">
            <div className="com-head flex w-full ph:flex-col">
                <div className="com-img w-2/12 flex justify-center items-center tab:w-3/12 tab:p-2 ph:w-full">
                    <Image
                        src={com.logo}
                        alt="alt"
                        width={180}
                        height={180}
                        objectFit="cover"
                        placeholder="blur"
                        className="rounded-md"
                    />
                </div>

                <div className="head-content flex w-10/12 flex-col justify-center pl-20 tab:w-9/12 tab:pl-10 ph:w-full ph:mt-10 ph:pl-0">
                    <h2 className="font-semibold text-3xl lap:text-2xl tab:text-xl ph:text-center">
                        {com.name}
                    </h2>
                    <p className="mt-5 text-xl font-light italic leading-relaxed w-2/3 lap:text-lg lap:w-11/12 tab:text-base tab:w-full ph:text-center">
                        {com.agenda}
                    </p>
                </div>
            </div>

            {cardOpen ? (
                <>
                    <h2 className="font-medium text-2xl mt-10 text-center mb-3">
                        Executive Board
                    </h2>
                    <div className="com-members flex flex-wrap justify-evenly items-center">
                        {com.members.map((member) => (
                            <MemberCard
                                member={member}
                                key={member.name}
                                className="mb-0 ph:mb-0 ph:pb-2"
                            />
                        ))}
                    </div>
                </>
            ) : (
                ""
            )}

            <div
                className="flex w-full justify-center py-3 cursor-pointer ph:mt-5"
                onClick={() => setCardOpen(!cardOpen)}
            >
                <FaChevronDown
                    className={`text-3xl ${
                        cardOpen ? "rotate-180" : ""
                    } lap:text-2xl`}
                />
            </div>
        </div>
    );
};

export default CommitteeCard;
