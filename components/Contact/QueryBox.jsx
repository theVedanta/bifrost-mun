import Input from "../Input";

const QueryBox = () => {
    return (
        <div className="query-box flex flex-col py-14 px-10 bg-gray-800 rounded-md w-2/3">
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
                    className="font-medium w-full text-lg rounded-md bg-gold text-gray-900 py-3 mt-10 transition-all duration-150 cursor-pointer hover:scale-90 active:scale-75"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default QueryBox;
