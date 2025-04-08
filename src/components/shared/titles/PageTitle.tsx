interface PageTitleProps {
  children: string;
  className?: string;
}

export default function PageTitle({
  children,
  className = "",
}: PageTitleProps) {
  return (
    <h1
      className={`text-36bold xl:text-62bold leading-[123%] uppercase text-white ${className}`}
    >
      {children}
    </h1>
  );
}
