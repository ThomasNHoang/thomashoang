import { AuthPage } from "@/components/auth/authPage";
import { LoginForm } from "@/components/auth/loginForm";

export default function LoginPage() {
  return (
    <AuthPage
      header="Log into your account"
      form={<LoginForm />}
      linkHref="/auth/register"
      linkLabel="Create an account"
      linkQuestion="Don't have an account?"
    />
  );
}
