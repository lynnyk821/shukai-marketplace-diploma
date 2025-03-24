type Props = {
    text: string,
    loading: boolean;
};

export default function AuthorizationButton({text, loading}: Props) {
    return (
        <button
            type="submit"
            className={"w-full bg-yellow-600 text-white py-2 px-4 rounded-md " +
                "font-inter text-lg font-medium " +
                "hover:bg-yellow-700 transition-colors duration-200 ease-in-out"}
        >
            {loading ? 'Processing...' : text}
        </button>
    );
};