import Link from "next/link";
import { ReactNode } from "react";
import { RxGlobe } from "react-icons/rx";

interface AuthPageProps {
  header: string;
  form: ReactNode;
  linkHref: string;
  linkLabel: string;
  linkQuestion: string;
}

export function AuthPage({
  header,
  form,
  linkQuestion,
  linkLabel,
  linkHref,
}: AuthPageProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <RxGlobe className="h-10 w-10 mx-auto" />
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight">
          {header}
        </h2>
      </div>
      <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm">{form}</div>
      <p className="text-center text-sm text-gray-500">
        {`${linkQuestion} `}
        <Link
          href={linkHref}
          className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
        >
          {linkLabel}
        </Link>
      </p>
    </div>
  );
}
