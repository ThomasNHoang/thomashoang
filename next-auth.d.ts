import { JWT } from "@auth/core/jwt";
import { User } from "@auth/core/types";
import { UserRole } from "@prisma/client";


declare module "@auth/core/types" {
  interface User {
    role: UserRole;
  }

  interface Session {
    user: User;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    email: string;
    role: UserRole;
  }
}

export { User };