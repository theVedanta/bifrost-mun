import Container from "../components/Container";
import { useRouter } from "next/router";

const _error = () => {
    const router = useRouter();

    return (
        <Container className="error w-screen h-screen flex flex-col justify-center items-center">
            <div className="flex">
                <h1 className="font-semibold text-3xl px-5 border-r-2 border-gray-600">
                    404
                </h1>
                <p className="text-xl font-light px-5">
                    This page could be not found
                </p>
            </div>

            <button
                onClick={() => router.back()}
                className="px-5 py-2 bg-gold font-medium text-gray-900 rounded-md transition-all duration-150 cursor-pointer mt-5 hover:scale-90 active:scale-75"
            >
                Go back
            </button>
        </Container>
    );
};

export default _error;
