import "./globals.css"
import { League_Spartan } from "next/font/google"

const league = League_Spartan({ subsets: ["latin"], weight: ["500", "700"] })

export const metadata = {
  title: "Job Listings",
  description:
    "Job listing landing page that filters jobs based on selected categories",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league.className}>{children}</body>
    </html>
  )
}
