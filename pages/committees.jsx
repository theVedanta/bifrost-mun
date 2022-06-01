import Container from "../components/Container";
import img from "../public/sample.png";
import CommitteeCard from "../components/Committees/CommitteeCard";
import Meta from "../components/Meta";

const committees = () => {
    const coms = [
        {
            name: "United Nations Human Rights Council",
            agenda: "Agenda: Eliminating Discrimination Against Children and Parents Based on Sexual Orientation and/or Gender Identity.",
            logo: img,
            members: [
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Bhumika Nagpal",
                    post: "Vice Chairperson",
                    pfp: img,
                },
            ],
        },

        {
            name: "United Nations Environment Programme",
            agenda: "Agenda: Impact of Climate Crisis on Environment with Special emphasis on SDG13",
            logo: img,
            members: [
                {
                    name: "Domil Anthony Johnson",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Gourav Singh",
                    post: "Vice Chairperson",
                    pfp: img,
                },
                {
                    name: "Vinayak Kedia",
                    post: "Rapporteur",
                    pfp: img,
                },
            ],
        },

        {
            name: "United Nations Commission for the Status of Women",
            agenda: "Agenda: Women’s economic empowerment in the changing world of work with special emphasis on climate change and disaster risk reduction policies",
            logo: img,
            members: [
                {
                    name: "Shreya Purdhani",
                    post: "Head Chairperson",
                    pfp: img,
                },
                {
                    name: "Devansh Jaiswal",
                    post: "Vice Chairperson",
                    pfp: img,
                },
                {
                    name: "Linet Christiana Thomas",
                    post: "Rapporteur",
                    pfp: img,
                },
            ],
        },
    ];

    return (
        <Container className="pt-16">
            <Meta
                title="Bifrost MUN - Committees"
                description="Bifrost MUN's list of committees and their agendas. Find your suitable committee here and join the conference!"
                keywords="bifrost, mun, model united nations, committees, committee, agenda, agendas, interest, bifrost ed tech, bifrostedtech, united nations"
            />

            <h1 className="text-center text-5xl font-semibold mt-24 mb-20 ph:mt-6 ph:mb-10 ph:text-3xl">
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
