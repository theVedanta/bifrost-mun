import Input from "../Input";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useState } from "react";

const QueryBox = () => {
    const notyf = new Notyf();
    init("GFDjV6D-5W-eyA1wE");
    const [limit, setLimit] = useState(false);

    const sendMail = (e) => {
        e.preventDefault();

        const name = document.getElementById("form_name").value.trim();
        const mail = document.getElementById("form_mail").value.trim();
        const msg = document.getElementById("form_msg").value.trim();

        if (!limit) {
            // RESET
            const btn = document.getElementById("form_submit");
            btn.disabled = true;
            btn.classList.add("opacity-30");
            document.getElementById("form_name").value = "";
            document.getElementById("form_mail").value = "";
            document.getElementById("form_msg").value = "";

            const templateParams = {
                name: name,
                mail: mail,
                msg: msg,
            };

            emailjs
                .send(
                    process.env.NEXT_PUBLIC_SERVICE_ID,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID,
                    templateParams
                )
                .then(
                    function (response) {
                        notyf.success("Message sent");
                        btn.disabled = false;
                        btn.classList.remove("opacity-30");
                        setLimit(true);
                    },
                    function (error) {
                        notyf.error(
                            "Some error occurred while sending the message"
                        );
                    }
                );
        } else {
            if (limit) notyf.error("Only 1 message is allowed");
        }
    };

    return (
        <div className="query-box flex flex-col py-10 px-10 bg-gray-800 rounded-md w-2/3 lap:w-11/12 tab:mb-20 tab:w-full ph:mb-12 ph:px-8 ph:py-8">
            <h2 className="text-2xl font-semibold mb-8">Send us a message!</h2>

            <hr />

            <form className="mt-8" onSubmit={(eve) => sendMail(eve)}>
                <Input
                    name="name"
                    placeholder="John Doe"
                    label="Full Name"
                    type="text"
                    id="form_name"
                />
                <Input
                    name="mail"
                    placeholder="yourmom@myhouse.cum"
                    label="Email"
                    type="email"
                    id="form_mail"
                />
                <Input
                    type="area"
                    placeholder="Your query here..."
                    label="Message"
                    name="msg"
                    id="form_msg"
                />

                <button
                    type="submit"
                    id="form_submit"
                    className="font-medium w-full rounded-md bg-gold text-gray-900 py-3 mt-2 transition-all duration-150 cursor-pointer hover:scale-90 active:scale-75"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default QueryBox;
