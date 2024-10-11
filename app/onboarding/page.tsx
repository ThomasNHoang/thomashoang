import Link from "next/link";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { OnboardingForm } from "@/components/auth/onboardingForm";

export default async function OnboardingPage() {
  const user = await currentUser();
  if (user?.name) {
    // redirect(DEFAULT_LOGIN_REDIRECT);
    // return;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h2 className="text-center text-3xl font-bold leading-9 tracking-tight">
        Onboarding
      </h2>
      <div className="my-7 sm:mx-auto sm:w-full sm:max-w-sm">
        <OnboardingForm />
      </div>
      <div className="mt-4 text-center">
        <p className="text-md text-muted-foreground">
          Don&apos;t want to do this now? You can complete it later in settings.
        </p>
        <Link
          href={DEFAULT_LOGIN_REDIRECT}
          className="hover:underline underline-offset-4"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
