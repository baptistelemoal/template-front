import clsx from "clsx";
import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
  title: string;
}

export function Card({
  className,
  title,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={clsx("max-w-sm rounded shadow-lg", className)}>
      <div className="px-6 py-4">
        <div className="font-bold mb-2">{title}</div>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
}
