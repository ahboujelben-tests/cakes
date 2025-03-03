import { useQuery } from "@tanstack/react-query";
import { cakesService } from "../service/cakesService";
import { queryKey } from "./queryKey";

export const useGetCake = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => cakesService.getCake(id),
  });

  return { cake: data, isLoading, isError };
};
