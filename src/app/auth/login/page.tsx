import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Social } from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

const Login = () => {
    return (
            <Card className="w-96 h-fit">
                <CardHeader className="text-center">
                    <CardTitle>Welcome Back </CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter>
                    <Social />
                </CardFooter>
                <CardFooter>
                    <Button variant={'link'} className="w-full" size={'sm'} asChild>
                        <Link href={'/auth/signup'}>

                        Don't have and account?
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
    );
};
export default Login;
