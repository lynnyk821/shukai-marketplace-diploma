import SignInLayout from "./SignInLayout.tsx";
import {useForm} from "react-hook-form";
import {SignInRequest} from "../../types/request/sign-in-request.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignInSchema} from "../../utils/schemas/sign-in-schema.ts";
import AuthorizationInput from "../../common-components/Authorization/AuthorizationInput/AuthorizationInput.tsx";
import AuthorizationHeader from "../../common-components/Authorization/AuthorizationHeader/AuthorizationHeader.tsx";
import AuthorizationButton from "../../common-components/Authorization/AuthorizationButton/AuthorizationButton.tsx";
import {AuthorizationLink} from "../../common-components/Authorization/AuthorizationLink/AuthorizationLink.tsx";
import {axiosInstance} from "../../utils/axios/interceptors.ts";
import {AuthResponse} from "../../types/response/auth-response.ts";
import {TokenManager} from "../../utils/helpers/tokenManager.ts";
import {useNavigate} from "react-router-dom";

export function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInRequest>({
        resolver: zodResolver(SignInSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data: SignInRequest) => {
        try {
            const path = "/user-service/api/auth/sign-in";
            const response = await axiosInstance.post<AuthResponse>(path, data);

            TokenManager.setTokens(response.data.accessToken, response.data.refreshToken);

            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials. Please try again.');
        }
    }

    return (
        <SignInLayout>
            <AuthorizationHeader>Sign In</AuthorizationHeader>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <AuthorizationInput
                    type={"email"}
                    error={errors.email}
                    placeholder={"Email address"}
                    register={register}
                />

                <AuthorizationInput
                    type={"password"}
                    error={errors.password}
                    placeholder={"Password"}
                    register={register}
                />
                <AuthorizationButton
                    text={"Sign In"}
                    loading={isSubmitting}
                />
            </form>
            <div className="mt-4 space-y-2 flex flex-col gap-0.5 text-center">
                <AuthorizationLink to={"/sign-up"} text={"Create account"} />
                <AuthorizationLink to={"/forgot-password"} text={"Forgot password?"} />
            </div>
        </SignInLayout>
    );
}