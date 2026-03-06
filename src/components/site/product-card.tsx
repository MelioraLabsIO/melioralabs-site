import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  status?: string;
  href?: string;
  className?: string;
}

export function ProductCard({
  title,
  description,
  status,
  href,
  className,
}: ProductCardProps) {
  const card = (
    <Card className={cn("overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80", href && "cursor-pointer hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {status && (
          <Badge variant="secondary" className="font-medium">
            {status}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
}
