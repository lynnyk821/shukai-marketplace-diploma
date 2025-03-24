import {Link} from "react-router-dom";

type Props = {
    to: string,
    text: string,
};

export function AuthorizationLink({to, text}: Props) {
    return (
        <Link
            className="text-[#414141] hover:text-yellow-600 text-sm transition duration-200 ease-in-out"
            to={to}
        >
            {text}
        </Link>
    );
};