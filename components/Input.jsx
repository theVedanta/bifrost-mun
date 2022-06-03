const Input = ({ name, label, placeholder, type, id }) => {
    return (
        <div className="input flex flex-col w-full mb-5">
            <label className="pl-3 font-light mb-1" htmlFor={name}>
                {label}
            </label>
            {type === "area" ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    required
                    autoComplete="off"
                    id={id}
                    style={{
                        transition: "border-color 0.3s ease-in-out",
                        maxHeight: "25vh",
                        minHeight: "10vh",
                    }}
                    className="px-4 py-3 outline-none rounded-md bg-gray-900 border-gray-900 border-2 active:border-gold focus:border-gold resize-y"
                ></textarea>
            ) : (
                <input
                    type={type}
                    autoComplete="off"
                    id={id}
                    placeholder={placeholder}
                    required
                    className="px-4 py-3 outline-none rounded-md bg-gray-900 border-gray-900 border-2 transition-all active:border-gold focus:border-gold"
                />
            )}
        </div>
    );
};

export default Input;
