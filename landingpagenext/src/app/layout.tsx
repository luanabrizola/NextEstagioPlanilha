import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Planilhas Next",
  description: "Uma Landing Page sobre planilha .",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
      
    </html>
    
  )
}