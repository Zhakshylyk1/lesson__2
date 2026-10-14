
import { useSearchParam } from "../shared/hooks/use-search-param.js";
import { LoginForm, RegisterForm } from "../modules/Auth";

export function Auth() {
    const { get } = useSearchParam();

    const currentStep = get('step');

    const forms = {
        login: <LoginForm />,
        register: <RegisterForm />
    };

    return (
        <div className="flex min-h-[calc(100vh-110px)] items-center justify-center bg-[#f3f7f4] px-4 py-10">
            <div className="w-full max-w-[520px]">
                {forms[currentStep || 'login']}
            </div>
        </div>
    );
}
