import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EmailForm from "@/components/EmailForm";
import AuthProviders from "@/components/AuthProviders";

const LoginForm = () => {
    return (
        <div className="w-screen h-screen flex justify-center content-center">
            {" "}
            <Card style={} className="w-fit h-fit">
                <CardHeader>
                    <CardTitle>Sign In </CardTitle>
                </CardHeader>
                <CardContent>
                    <EmailForm />
                    <AuthProviders />
                </CardContent>
            </Card>
        </div>
    );
};
export default LoginForm;
