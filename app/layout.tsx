import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeInvoice — Track Time & Auto-Generate Invoices',
  description: 'Time tracking with automatic invoice generation, client approval workflows, and payment reminder automation for freelancers and consultants.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4924e461-63df-446b-ac00-14a829c9f4c1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
