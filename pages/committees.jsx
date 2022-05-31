import Container from "../components/Container";
import img from "../public/sample.png";
import CommitteeCard from "../components/Committees/CommitteeCard";

const committees = () => {
    const coms = [
        {
            name: "United Nations Human Rights Council",
            agenda: "Agenda: Eliminating Discrimination Against Children and Parents Based on Sexual Orientation and/or Gender Identity",
            logo: img,
            members: [
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
            ],
        },

        {
            name: "United Nations Human Rights Council",
            agenda: "Agenda: Eliminating Discrimination Against Children and Parents Based on Sexual Orientation and/or Gender Identity",
            logo: img,
            members: [
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
            ],
        },

        {
            name: "United Nations Human Rights Council",
            agenda: "Agenda: Eliminating Discrimination Against Children and Parents Based on Sexual Orientation and/or Gender Identity",
            logo: img,
            members: [
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
            ],
        },
    ];

    return (
        <Container className="pt-16">
            <h1 className="text-center text-5xl font-semibold mt-24 mb-20">
                Our committees
            </h1>
            <div className="committees flex flex-col w-full">
                {coms.map((com) => (
                    <CommitteeCard key={com.name} com={com} />
                ))}
            </div>
        </Container>
    );
};

export default committees;
