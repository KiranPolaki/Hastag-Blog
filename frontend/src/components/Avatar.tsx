function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } text-sm text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}

export { Avatar };
