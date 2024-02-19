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
import SignUpForm from "@/components/SignUpForm";

const SignUp = () => {
    return (
        
            <Card className="w-96 h-fit">
                <CardHeader className="text-center">
                    <CardTitle>Create an account </CardTitle>
                </CardHeader>
                <CardContent>
                    <SignUpForm />
                </CardContent>
                <CardFooter>
                    <Social />
                </CardFooter>
                <CardFooter>
                    <Button variant={'link'} className="w-full" size={'sm'} asChild>
                        <Link href={'/auth/login'}>

                        Already have an account?
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
    );
};
export default SignUp;
