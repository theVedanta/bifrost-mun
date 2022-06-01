const ContactBox = () => {
    return (
        <div className="contact-box flex flex-col justify-center bg-gray-800 rounded-md px-12 py-10 lap:w-11/12 tab:mb-10 tab:w-full ph:mb-6 ph:px-8 ph:py-8">
            <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>

            <hr />

            <a href="tel:+91 9818103659" className="text-lg mt-5 ph:text-base">
                Augustya Jaipuria -&gt;{" "}
                <span className="text-gold">9818103659</span>
            </a>
            <a href="tel:+91 9818103659" className="text-lg ph:text-base">
                Augustya Jaipuria -&gt;{" "}
                <span className="text-gold">9818103659</span>
            </a>

            <h3 className="text-xl font-medium my-5 ph:text-base">OR</h3>

            <a
                href="mailto:bifrostmun@gmail.com"
                className="text-lg text-gold ph:text-base"
            >
                bifrostmun@gmail.com
            </a>
            <a
                href="mailto:bifrostmun@gmail.com"
                className="text-lg text-gold ph:text-base"
            >
                bifrostmun@gmail.com
            </a>
        </div>
    );
};

export default ContactBox;
