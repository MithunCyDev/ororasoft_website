import type React from "react"
export default function ErrorPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">{children}</main>
    </div>
  )
}

