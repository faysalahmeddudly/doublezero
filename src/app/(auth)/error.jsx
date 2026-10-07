"use client"



export default function AuthError({
  error,
  retry,
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-lg font-semibold">Authentication error</h2>
      <p className="max-w-sm text-sm text-muted-foreground">
        {error.message || "We couldn't complete that request. Please try again."}
      </p>
      <button onClick={() => retry()}>Try again</button>
    </div>
  )
}
