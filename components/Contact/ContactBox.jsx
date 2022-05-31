const ContactBox = () => {
    return (
        <div className="contact-box flex flex-col justify-center bg-gray-800 rounded-md px-12 py-10">
            <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>

            <hr />

            <a href="tel:+91 9818103659" className="text-lg mt-5">
                Augustya Jaipuria -&gt;{" "}
                <span className="text-gold">+91 9818103659</span>
            </a>
            <a href="tel:+91 9818103659" className="text-lg">
                Augustya Jaipuria -&gt;{" "}
                <span className="text-gold">+91 9818103659</span>
            </a>

            <h3 className="text-xl font-medium my-5">OR</h3>

            <a href="mailto:bifrostmun@gmail.com" className="text-lg">
                bifrostmun@gmail.com
            </a>
            <a href="mailto:bifrostmun@gmail.com" className="text-lg">
                bifrostmun@gmail.com
            </a>
        </div>
    );
};

export default ContactBox;
