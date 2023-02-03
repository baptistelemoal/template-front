import clsx from "clsx";

export function Loader() {
  return (
    <div className="flex items-center justify-center h-[100vh] -mt-4">
      <div
        className={clsx(
          "w-8 h-8 border-[3px] border-current border-t-transparent",
          "animate-spin inline-block text-blue-600 rounded-full"
        )}
      />
    </div>
  );
}
