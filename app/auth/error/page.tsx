import { AuthState, AuthStateProps } from "@/components/auth/authState";

interface ErrorPageProps {
  searchParams: {
    error?: string;
  };
}

export default function ErrorPage({ searchParams: { error } }: ErrorPageProps) {
  const authProps: AuthStateProps = {
    header: "Error!",
    description: "Oops, something went wrong!",
    linkHref: "/auth/login",
    linkLabel: "Login again",
    state: "error",
  };

  switch (error) {
    case "Verification": {
      authProps.description =
        "Invalid link. It may have been used already or expired.";
      break;
    }
    default: {
      break;
    }
  }

  return <AuthState {...authProps} />;
}
