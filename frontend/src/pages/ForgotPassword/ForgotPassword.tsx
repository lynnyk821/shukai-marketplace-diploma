import ForgotPasswordLayout from "./ForgotPasswordLayout.tsx";
import {useForm} from "react-hook-form";
import AuthorizationHeader from "../../common-components/Authorization/AuthorizationHeader/AuthorizationHeader.tsx";
import AuthorizationInput from "../../common-components/Authorization/AuthorizationInput/AuthorizationInput.tsx";
import AuthorizationButton from "../../common-components/Authorization/AuthorizationButton/AuthorizationButton.tsx";
import {AuthorizationLink} from "../../common-components/Authorization/AuthorizationLink/AuthorizationLink.tsx";
import {ForgotRequest} from "../../types/request/forgot-request.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {ForgotPasswordSchema} from "../../utils/schemas/forgot-password-schema.ts";
import {axiosInstance} from "../../utils/axios/interceptors.ts";
import {useNavigate} from "react-router-dom";

export function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotRequest>({
        resolver: zodResolver(ForgotPasswordSchema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data: ForgotRequest) => {
        try {
            await axiosInstance.post('/user-service/api/auth/forgot-password', data);
            alert('Password reset instructions sent to your email');
            navigate('/sign-in');
        } catch (error) {
            console.error('Password reset failed:', error);
            alert('Error sending reset instructions.');
        }
    };

    return (
        <ForgotPasswordLayout>
            <AuthorizationHeader>Forgot Password</AuthorizationHeader>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <AuthorizationInput
                    type="email"
                    error={errors.email}
                    placeholder="Email"
                    register={register}
                />
                <AuthorizationButton
                    text="Reset Password"
                    loading={isSubmitting}
                />
            </form>
            <div className="mt-4 text-center">
                <AuthorizationLink to="/sign-in" text="Remember password? Sign In" />
            </div>
        </ForgotPasswordLayout>
    );
};