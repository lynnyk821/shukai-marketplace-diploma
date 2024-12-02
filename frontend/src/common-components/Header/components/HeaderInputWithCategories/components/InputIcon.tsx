type Props = {
    isFocused?: boolean;
};

export default function InputIcon({isFocused}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-6 h-6 ${isFocused ? "fill-yellow-600 smooth-transition" : "fill-gray-500"}`}
        >
            <path
                d="m21.8 21.2-5.5-5.5c1.2-1.4 2-3.4 2-5.4 0-4.5-3.7-8.2-8.2-8.2S2 5.7 2 10.2s3.7 8.2 8.2 8.2c2 0 4-.8 5.4-2.1l5.5 5.5c.1.1.2.1.4.1s.3 0 .4-.1.1-.4-.1-.6m-11.6-3.8c-4 0-7.2-3.2-7.2-7.2S6.2 3 10.2 3s7.2 3.2 7.2 7.2-3.2 7.2-7.2 7.2"></path>
            <path
                d="M16 9.1c-.8-2.8-1.9-3.9-4.7-4.7-.3-.1-.5.1-.6.3-.1.3.1.5.3.6 2.4.7 3.3 1.6 4 4 .1.2.3.4.5.4h.1c.3-.1.5-.4.4-.6"></path>
        </svg>

    );
};