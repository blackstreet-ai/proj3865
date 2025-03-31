import { DefaultSession } from "next-auth";
import { Subscription } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      subscription?: Subscription;
    } & DefaultSession["user"];
  }
}
