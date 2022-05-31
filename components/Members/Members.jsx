import Container from "../Container";
import MemberCard from "./MemberCard";
import img from "../../public/sample.png";

const Members = () => {
    const members = [
        {
            name: "Aagastya Jaipuria",
            post: "Secretary General",
            pfp: img,
        },
        {
            name: "Avni Agarwal",
            post: "Director General",
            pfp: img,
        },
        {
            name: "Aagastya Jaipuria",
            post: "Secretary General",
            pfp: img,
        },
        {
            name: "Avni Agarwal",
            post: "Director General",
            pfp: img,
        },
        {
            name: "Aagastya Jaipuria",
            post: "Secretary General",
            pfp: img,
        },
        {
            name: "Avni Agarwal",
            post: "Director General",
            pfp: img,
        },
    ];

    return (
        <Container className="members">
            <h1 className="text-4xl pt-10 pb-14 font-semibold text-center">
                The Secretriat
            </h1>

            <div className="member-cards flex flex-wrap justify-evenly items-center px-12">
                {members.map((member) => (
                    <MemberCard member={member} key={member.name} />
                ))}
            </div>
        </Container>
    );
};

export default Members;
