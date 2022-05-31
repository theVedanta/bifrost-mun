import Header from "../components/Header/Header";
import Members from "../components/Members/Members";
import Meta from "../components/Meta";

const index = () => {
    return (
        <>
            <Meta
                title="Bifrost MUN"
                description="Bifrost's first MUN"
                keywords="Bifrost, MUN"
            />
            <Header />
            <Members />
        </>
    );
};

export default index;
