import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {Button} from "@/components/ui/button"
  import EmailForm from "@/components/EmailForm"
import AuthProviders from "@/components/AuthProviders"
  

const LoginForm = () => {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Sign In </CardTitle>
            </CardHeader>
            <CardContent>
                <EmailForm />
                <AuthProviders />
            </CardContent>
        </Card>
    )

}
export default LoginForm