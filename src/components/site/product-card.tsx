import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  status?: string;
  className?: string;
}

export function ProductCard({
  title,
  description,
  status,
  className,
}: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80", className)}>
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
}
