import Input from "../Input";

const QueryBox = () => {
    return (
        <div className="query-box flex flex-col py-10 px-10 bg-gray-800 rounded-md w-2/3 lap:w-11/12 tab:mb-20 tab:w-full ph:mb-12 ph:px-8 ph:py-8">
            <h2 className="text-2xl font-semibold mb-8">Send us a message!</h2>

            <hr />

            <form className="mt-8">
                <Input
                    name="name"
                    placeholder="John Doe"
                    label="Full Name"
                    type="text"
                />
                <Input
                    name="mail"
                    placeholder="yourmom@myhouse.cum"
                    label="Email"
                    type="email"
                />
                <Input
                    type="area"
                    placeholder="Your query here..."
                    label="Message"
                    name="msg"
                />

                <button
                    type="submit"
                    className="font-medium w-full rounded-md bg-gold text-gray-900 py-3 mt-2 transition-all duration-150 cursor-pointer hover:scale-90 active:scale-75"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default QueryBox;
