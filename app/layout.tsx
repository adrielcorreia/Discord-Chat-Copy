import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/global/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'Cópia visual do Discord para uma atividade do FAP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <script src='https://kit.fontawesome.com/4e2d75bd38.js'></script>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-solid-rounded/css/uicons-solid-rounded.css'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
