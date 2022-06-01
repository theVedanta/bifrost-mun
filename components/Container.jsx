const Container = ({ children, className }) => {
    return (
        <section className={`w-screen px-24 lap:px-12 ph:px-6 ${className}`}>
            {children}
        </section>
    );
};

export default Container;
