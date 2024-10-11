import { UserRole } from "@prisma/client";
import { RoleGate } from "@/components/auth/roleGate";

export default function AdminPage() {
  return <RoleGate allowedRole={UserRole.ADMIN}>You are an admin</RoleGate>;
}
