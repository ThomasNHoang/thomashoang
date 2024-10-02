import { LoginForm } from "@/components/auth/loginForm";
import { RxGlobe } from "react-icons/rx";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <RxGlobe className="h-10 w-10 w-auto mx-auto"/>
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}