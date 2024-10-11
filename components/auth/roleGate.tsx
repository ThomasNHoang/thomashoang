import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";
import { currentRole, Roles } from "@/lib/auth";
import { BackButton } from "@/components/backButton";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface Props {
  message?: string;
  redirectTo?: string;
  allowedRole: UserRole;
  children: React.ReactNode;
}

export async function RoleGate({
  children,
  allowedRole,
  redirectTo,
  message,
}: Props) {
  const role = await currentRole();
  const roleLevel = Roles[role as UserRole];
  const allowedRoleLevel = Roles[allowedRole];

  if (roleLevel < allowedRoleLevel) {
    if (redirectTo) {
      redirect(redirectTo);
      return;
    }
    return (
      <div className="text-destructive rounded-md flex flex-col flex-1 justify-center items-center gap-x-2 text-3xl">
        <HiOutlineExclamationTriangle className="h-12 w-12 mx-auto" />
        <p className="my-5 text-center">
          {message || "You do not have permission to view this content"}
        </p>
        <BackButton className="text-xl" />
      </div>
    );
  }

  return <>{children}</>;
}
