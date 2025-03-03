import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { cakesService, CakesServiceError } from "../service/cakesService";
import { queryKey } from "./queryKey";

export const useCreateCake = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: cakesService.createCake,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      toast.success("New cake added!");
      navigate("/");
    },
    onError: (error) => {
      if (error instanceof CakesServiceError) {
        if (error.statusCode === 409) {
          toast.error("This name already exists!");
          return;
        }
      }
      toast.error("Something went wrong!");
    },
  });

  return {
    submit: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
