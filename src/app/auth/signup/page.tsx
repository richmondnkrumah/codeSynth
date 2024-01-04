import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import EmailForm from "@/components/EmailForm";
import AuthProviders from "@/components/AuthProviders";

const SignupForm = () => {
    return (
        <div className="flex justify-content content-center">
            <Card>
                <CardHeader>
                    <CardTitle>Sign Up </CardTitle>
                </CardHeader>
                <CardContent>
                    <EmailForm />
                    <AuthProviders />
                </CardContent>
            </Card>
        </div>
    );
};

export default SignupForm;
