import { ErrorPlaceholder } from "@/components/design/ErrorPlaceholder";
import { SkeletonCard } from "@/components/design/SkeletonCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetCake } from "@/lib/cakes/store/useGetCake";
import { useParams } from "react-router";

export function ViewCake() {
  const { id } = useParams<{ id: string }>();

  const { cake, isLoading, isError } = useGetCake(Number(id));

  if (isLoading) {
    return (
      <div className="flex items-center flex-wrap justify-center gap-4 p-4">
        <SkeletonCard />
      </div>
    );
  }

  if (!cake || isError) {
    return <ErrorPlaceholder />;
  }

  return (
    <Card className="items-center">
      <CardHeader>
        <CardTitle>{cake.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <img
          src={cake.imageUrl}
          alt={cake.name}
          className="rounded-md w-full aspect-square sm:size-[400px] object-cover border"
        />
        <p className="px-4 py-2 border rounded-md w-full sm:w-[400px] bg-secondary">
          {cake.comment}
        </p>
        <p className="px-4 py-2 border rounded-md w-full sm:w-[400px] bg-secondary">
          Yum factor - {cake.yumFactor} !
        </p>
      </CardContent>
    </Card>
  );
}
