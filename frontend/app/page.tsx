export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Short URL Service
          </h1>

          <p className="mt-2 text-muted-foreground">
            Turn long URLs into short, shareable links.
          </p>
        </div>
      </div>
    </main>
  );
}
