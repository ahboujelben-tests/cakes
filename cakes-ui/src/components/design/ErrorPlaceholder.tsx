export function ErrorPlaceholder() {
  return (
    <div className="flex items-center justify-center h-full">
      <h4 className="text-destructive-foreground text-center p-4">
        Oh no! Something went wrong 🥲 <br />
        Please refresh the page or try again later!
      </h4>
    </div>
  );
}
