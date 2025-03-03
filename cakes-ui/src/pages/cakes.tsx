import { ErrorPlaceholder } from "@/components/design/ErrorPlaceholder";
import { SkeletonCard } from "@/components/design/SkeletonCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useListCakes } from "@/lib/cakes/store/useListCakes";
import { Link } from "react-router";

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
    return <ErrorPlaceholder />;
  }

  return (
    <>
      {cakes.map((cake) => (
        <Link to={`/cake/${cake.id}`} key={cake.id}>
          <Card className="items-center hover:shadow-lg hover:scale-102 hover:bg-secondary transition-transform">
            <CardHeader>
              <CardTitle>{cake.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={cake.imageUrl}
                alt={cake.name}
                className="rounded-md w-full aspect-square sm:size-[400px] object-cover border"
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
