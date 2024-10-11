import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";

export interface AuthStateProps {
  header: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  linkQuestion?: string;
  state: "success" | "error";
}

export function AuthState({
  header,
  description,
  linkQuestion,
  linkLabel,
  linkHref,
  state,
}: AuthStateProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div
          className={cn(
            "flex justify-center items-center gap-x-2 text-3xl text-pretty",
            state === "success" && "text-success",
            state === "error" && "text-destructive",
          )}
        >
          {state === "success" ? (
            <HiOutlineCheckCircle className="h-7 w-7" />
          ) : (
            <HiOutlineExclamationTriangle className="h-7 w-7" />
          )}
          {header}
        </div>
        <p className="py-3 text-lg text-center">{description}</p>
        <p className="text-center text-sm text-gray-500">
          {linkQuestion ? linkQuestion : ""}{" "}
          <Link
            href={linkHref}
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            {linkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
