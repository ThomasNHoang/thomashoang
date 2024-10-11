import { AuthPage } from "@/components/auth/authPage";
import { RegisterForm } from "@/components/auth/registerForm";

export default function RegisterPage() {
  return (
    <AuthPage
      header="Create an account"
      form={<RegisterForm />}
      linkHref="/auth/login"
      linkLabel="Log in"
      linkQuestion="Already have an account?"
    />
  );
}
