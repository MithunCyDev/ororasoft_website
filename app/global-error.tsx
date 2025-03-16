"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6">Something went wrong!</h2>
            <p className="text-xl text-gray-600 mb-8">We apologize for the inconvenience.</p>
            <button
              onClick={reset}
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

