import { SkeletonCard } from "@/components/design/SkeletonCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useListCakes } from "@/lib/cakes/store/useListCakes";

export function Cakes() {
  const { cakes, isLoading, isError } = useListCakes();

  if (isLoading) {
    return (
      <div className="flex items-center flex-wrap justify-center gap-4 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (!cakes || isError) {
    return (
      <div className="flex items-center justify-center h-full">
        <h4 className="text-destructive-foreground text-center p-4">
          Oh no! Something went wrong 🥲 <br />
          Please refresh the page or try again later!
        </h4>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-wrap justify-center gap-4 p-4">
      {cakes.map((cake) => (
        <Card key={cake.id} className="items-center">
          <CardHeader>
            <CardTitle>{cake.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={cake.imageUrl}
              alt={cake.name}
              width={400}
              height={400}
              className="rounded-md"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
