/**
 * @description Root layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    template: 'Quizzes Tutorial | %s',
    default: 'Quizzes Tutorial',
  },
  description: 'Quizzes tutorial to improve my Next.js skills',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased flex flex-col justify-center items-center m-3`}
      >
        {children}
      </body>
    </html>
  )
}
