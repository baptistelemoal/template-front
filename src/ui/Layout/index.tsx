import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return <main className="mx-16 my-4">{children}</main>;
}
