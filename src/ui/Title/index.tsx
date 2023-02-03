import { PropsWithChildren, createElement } from "react";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title({ level = 1, children }: PropsWithChildren<TitleProps>) {
  return createElement(
    `h${level}`,
    { className: "text-2xl font-bold" },
    children
  );
}
