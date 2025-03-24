import {FieldError, UseFormRegister} from "react-hook-form";
import {SignUpRequest} from "../../../types/request/sign-up-request.ts";
import {SignInRequest} from "../../../types/request/sign-in-request.ts";
import {ForgotPasswordRequest} from "../../../types/request/forgot-password-request.ts";

type Props = {
    type: keyof SignUpRequest,
    register: any,
    error: FieldError | undefined,
    placeholder?: string,
};

export default function AuthorizationInput({type, register, placeholder, error}: Props) {
    return (
        <>
            <input
                {...register(type) as UseFormRegister<SignUpRequest | SignInRequest | ForgotPasswordRequest>}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </>
    );
};