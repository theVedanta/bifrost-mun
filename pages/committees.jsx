import Container from "../components/Container";
import com1 from "../public/com/logos/1.png";
import com2 from "../public/com/logos/2.png";
import com3 from "../public/com/logos/3.png";
import adars from "../public/com/eb/adars.jpeg";
import bum from "../public/com/eb/bum.jpeg";
import dom from "../public/com/eb/dom.jpeg";
import goo from "../public/com/eb/goo.jpeg";
import ked from "../public/com/eb/ked.jpeg";
import line from "../public/com/eb/line.jpeg";
import shh from "../public/com/eb/shh.jpeg";
import dev from "../public/com/eb/dev.jpeg";
import CommitteeCard from "../components/Committees/CommitteeCard";
import Meta from "../components/Meta";

const committees = () => {
    const coms = [
        {
            name: "United Nations Human Rights Council",
            agenda: "Agenda: Eliminating Discrimination Against Children and Parents Based on Sexual Orientation and/or Gender Identity.",
            logo: com1,
            members: [
                {
                    name: "Adarsh Kumar Singh",
                    post: "Head Chairperson",
                    pfp: adars,
                },
                {
                    name: "Bhumika Nagpal",
                    post: "Vice Chairperson",
                    pfp: bum,
                },
            ],
        },

        {
            name: "United Nations Environment Programme",
            agenda: "Agenda: Impact of Climate Crisis on Environment with Special emphasis on SDG13",
            logo: com2,
            members: [
                {
                    name: "Domil Anthony Johnson",
                    post: "Head Chairperson",
                    pfp: dom,
                },
                {
                    name: "Gourav Singh",
                    post: "Vice Chairperson",
                    pfp: goo,
                },
                {
                    name: "Vinayak Kedia",
                    post: "Rapporteur",
                    pfp: ked,
                },
            ],
        },

        {
            name: "United Nations Commission for the Status of Women",
            agenda: "Agenda: Women’s economic empowerment in the changing world of work with special emphasis on climate change and disaster risk reduction policies",
            logo: com3,
            members: [
                {
                    name: "Shreya Purdhani",
                    post: "Head Chairperson",
                    pfp: shh,
                },
                {
                    name: "Devansh Jaiswal",
                    post: "Vice Chairperson",
                    pfp: dev,
                },
                {
                    name: "Linet Christiana Thomas",
                    post: "Rapporteur",
                    pfp: line,
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
