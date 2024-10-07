import LocalLibrary from "@mui/icons-material/LocalLibrary";

export function EmptyScreen() {
  return (
    <div className="mx-auto -mt-20 flex size-full flex-col items-center justify-center gap-2 px-4">
      <LocalLibrary
        fontSize="large"
        className="m-1 rounded-full border border-foreground/70 p-1 text-foreground/70 shadow-md"
      />
      <div className="flex max-w-sm flex-col items-center gap-2 rounded-lg bg-inherit text-center">
        <h1 className="text-lg font-semibold text-foreground/80">
          Welcome to AI Chat Service
        </h1>
        <p className="leading-normal text-muted-foreground">
          If you want to learn about your rights and the benefits you can
          receive from an insurance company or from Kela, use this application
          <span className="whitespace-nowrap"> (In Finnish)</span>
        </p>
      </div>
    </div>
  );
}
