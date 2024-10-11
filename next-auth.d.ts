import {
  UserRole,
  Font as FontEnum
} from "@prisma/client";
import { JWT } from "@auth/core/jwt";
import { User } from "@auth/core/types";

declare module "@auth/core/types" {
  export interface User {
    role: UserRole;
    data: {
      font?: FontEnum;
    }
  }

  interface Session {
    user: User;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    email: string;
    role: UserRole;
    data: {
      font?: FontEnum;
    }
  }
}

export { User };