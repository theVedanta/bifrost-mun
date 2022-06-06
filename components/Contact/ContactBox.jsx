const ContactBox = () => {
    return (
        <div className="contact-box flex w-2/3 flex-col justify-center bg-gray-800 rounded-md px-12 py-10 lap:w-11/12 tab:mb-10 tab:w-full ph:mb-6 ph:px-8 ph:py-8">
            <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>

            <hr />

            <a href="tel:+91 9818103659" className="text-lg mt-5 ph:text-base">
                Aagastya Jaipuria -&gt;{" "}
                <span className="text-gold">9818103659</span>
            </a>
            <a
                href="tel:+91 9818103659"
                className="text-lg pb-6 border-b-2 border-gray-600 ph:text-base"
            >
                Avni Agarwal -&gt; <span className="text-gold">9911438529</span>
            </a>

            {/* <h3 className="text-xl font-medium my-5 ph:text-base">OR</h3> */}

            <a
                href="mailto:bifrostmun@gmail.com"
                className="text-lg text-gold mt-5 pt-1 ph:text-base"
            >
                bifrostmun@gmail.com
            </a>
            <a
                href="mailto:info.bifrostmun@gmail.com"
                className="text-lg text-gold ph:text-base"
            >
                info.bifrostmun@gmail.com
            </a>
        </div>
    );
};

export default ContactBox;
