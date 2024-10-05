import { AuthState } from "@/components/auth/authState";

export default function SuccessPage() {
  return (
    <AuthState
      header="Success!"
      description="Please check your email inbox for the login link."
      linkHref="/auth/login"
      linkLabel="Login again"
      linkQuestion="Don't receive the email?"
      state="success"
    />
  );
}