import Header from "../components/Header/Header";
import Members from "../components/Members/Members";
import Meta from "../components/Meta";

const index = () => {
    return (
        <>
            <h1 className="null-tags hidden">Bifrost</h1>
            <h1 className="null-tags hidden">MUN</h1>
            <h1 className="null-tags hidden">Model United Nations</h1>
            <h1 className="null-tags hidden">Bifrost MUN</h1>
            <Meta
                title="Bifrost MUN"
                description="We, at Bifrost Model United Nations firmly believe in the quality of debate and diplomacy and
                    encourage all our future diplomats to strive for excellence.
                    Our vision is to create a holistic environment for learning
                    and training the future of the country. We provide avenues
                    to public speaking, research, deliberation, constructive
                    debate critical thinking."
                keywords="bifrost, mun, model, united, nations, bifrostmun, bifrost competition, mun, model united nation, bifrost ed tech, bifrostedtech, united nations, bifrost home"
            />
            <Header />
            <Members />
        </>
    );
};

export default index;
