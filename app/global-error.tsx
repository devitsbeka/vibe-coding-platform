'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <h2 className="text-lg font-semibold text-gray-900">
                Something went wrong
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              An unexpected error occurred. This might be due to a build error in
              the generated preview.
            </p>
            {error.message && (
              <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-32 text-gray-700">
                {error.message}
              </pre>
            )}
            <button
              onClick={reset}
              className="w-full px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
