const Container = ({ children, className }) => {
    return (
        <section className={`w-screen px-24 ${className}`}>{children}</section>
    );
};

export default Container;
