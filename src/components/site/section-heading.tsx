import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  description,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
