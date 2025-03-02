import { useQuery } from "@tanstack/react-query";
import { cakesService } from "../service/cakesService";
import { queryKey } from "./queryKey";

export const useListCakes = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey],
    queryFn: () => cakesService.getCakes(),
  });

  return { cakes: data, isLoading, isError };
};
