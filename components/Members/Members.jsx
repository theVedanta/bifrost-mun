import Container from "../Container";
import MemberCard from "./MemberCard";
import agj from "../../public/sec/agj.jpeg";
import avni from "../../public/sec/avni.jpeg";
import arman from "../../public/sec/arman.jpeg";
import krisha from "../../public/sec/krisha.jpeg";
import sing from "../../public/sec/sing.jpeg";
import nan from "../../public/sec/nan.jpeg";
import aag from "../../public/sec/aag.jpeg";

const Members = () => {
    const members = [
        {
            name: "Aagastya Jaipuria",
            post: "Secretary General",
            pfp: agj,
        },
        {
            name: "Avni Agarwal",
            post: "Director General",
            pfp: avni,
        },
        {
            name: "Armaan Sareen",
            post: "Deputy Secretary General",
            pfp: arman,
        },
        {
            name: "Krisha Gupta",
            post: "USG Delegate Affairs",
            pfp: krisha,
        },
        {
            name: "Angad Singh Kahlon",
            post: "USG Delegate Affairs",
            pfp: sing,
        },
        // {
        //     name: "Nandika Jain",
        //     post: "USG Marketing",
        //     pfp: nan,
        // },
        {
            name: "Aarav Gupta",
            post: "USG EB Affairs",
            pfp: aag,
        },
    ];

    return (
        <Container className="members">
            <h1 className="text-4xl pt-10 pb-14 font-semibold text-center">
                The Secretriat
            </h1>

            <div className="member-cards flex flex-wrap justify-evenly items-center px-12 tab:px-0">
                {members.map((member) => (
                    <MemberCard member={member} key={member.name} />
                ))}
            </div>
        </Container>
    );
};

export default Members;
