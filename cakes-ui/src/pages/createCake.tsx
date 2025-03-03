import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCake } from "@/lib/cakes/store/useCreateCake";
import { YumFactor } from "@/lib/cakes/types/cake";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().nonempty({ message: "Name is required." }),
  comment: z
    .string()
    .min(2, {
      message: "Comment must be at least 2 characters.",
    })
    .max(200, {
      message: "Comment must be at most 200 characters.",
    })
    .nonempty({ message: "Comment is required." }),
  imageUrl: z
    .string()
    .url({
      message: "URL must be valid.",
    })
    .nonempty({ message: "Image URL is required." }),
  yumFactor: z.enum(["1", "2", "3", "4", "5"], {
    message: "Yum factor must be between selected.",
  }),
});

export function CreateCake() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      comment: "",
      imageUrl: "",
      yumFactor: "5",
    },
  });

  const { submit, isLoading } = useCreateCake();

  function onSubmit({
    name,
    comment,
    imageUrl,
    yumFactor,
  }: z.infer<typeof FormSchema>) {
    submit({
      name,
      comment,
      imageUrl,
      yumFactor: parseInt(yumFactor) as YumFactor,
    });
  }

  return (
    <Card className="max-w-lg mx-auto my-4">
      <CardHeader>
        <CardTitle>Add a new cake</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yumFactor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Yum factor</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How delicious is this cake" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"1"}>🤷</SelectItem>
                      <SelectItem value={"2"}>Alright</SelectItem>
                      <SelectItem value={"3"}>Great!</SelectItem>
                      <SelectItem value={"4"}>Delicious!</SelectItem>
                      <SelectItem value={"5"}>Scrumptious!</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
