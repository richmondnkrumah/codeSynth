'use client'
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "./ui/use-toast";


type Props = {};

const EmailForm = (props: Props) => {
  const [email, setEmail] = React.useState<null | string>("");

    const signWithEmail = async () => {
      const signInResult = await signIn("email", { email,
          callbackUrl: "http://localhost:3000/lop",
          redirect: false,
      });

      if(!signInResult?.ok) {
        return toast({
          title: "Error This did not Work",
          description: "There was an error signing in with email.",
          variant: "destructive",
        })}

      return toast({
        title: "Check your Email",
        description: "We sent you a link to sign in with email",})
    }
    return (
        <form action={signWithEmail}>
            <div className="flex flex-col gap-y-2">
                <label>Email</label>
                <input name="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="joe@example.com" />
            </div>
            <div>
                <button type="submit">Login with email</button>
            </div>
        </form>
    );
};

export default EmailForm;
