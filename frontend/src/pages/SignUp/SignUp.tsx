import SignUpLayout from "./SignUpLayout.tsx";
import {useForm} from "react-hook-form";
import {SignUpRequest} from "../../types/request/sign-up-request.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignUpSchema} from "../../utils/schemas/sign-up-schema.ts";
import AuthorizationHeader from "../../common-components/Authorization/AuthorizationHeader/AuthorizationHeader.tsx";
import AuthorizationInput from "../../common-components/Authorization/AuthorizationInput/AuthorizationInput.tsx";
import AuthorizationButton from "../../common-components/Authorization/AuthorizationButton/AuthorizationButton.tsx";
import {AuthorizationLink} from "../../common-components/Authorization/AuthorizationLink/AuthorizationLink.tsx";
import {axiosInstance} from "../../utils/axios/interceptors.ts";
import {useNavigate} from "react-router-dom";

export function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpRequest>({
        resolver: zodResolver(SignUpSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data: SignUpRequest) => {
        try {
            console.log(data)
            await axiosInstance.post('/user-service/api/auth/sign-up', data);
            navigate('/sign-in');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration error. Please check your data.');
        }
    };

    return (
        <SignUpLayout>
            <AuthorizationHeader>Sign Up</AuthorizationHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <AuthorizationInput type="email"
                                    error={errors.email}
                                    placeholder="Email"
                                    register={register}
                />
                <AuthorizationInput type="username"
                                    error={errors.username}
                                    placeholder="Username"
                                    register={register}
                />
                <AuthorizationInput type="password"
                                    error={errors.password}
                                    placeholder="Password"
                                    register={register}
                />
                <AuthorizationInput type="phoneNumber"
                                    error={errors.phoneNumber}
                                    placeholder="Phone Number"
                                    register={register}
                />
                <AuthorizationButton text="Sign Up"
                                     loading={isSubmitting}
                />
            </form>
            <div className="mt-4 text-center">
                <AuthorizationLink to="/sign-in" text="Already have an account? Sign In" />
            </div>
        </SignUpLayout>
    );
}