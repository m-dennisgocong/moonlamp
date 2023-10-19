import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Hydration from './components/Hydration'
import Footer from './components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400","500","700"],
  style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: 'Moonlamp',
  description: 'Lamp E-commerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Hydration>
          <Navbar/>
          {children}
          <Footer/>
        </Hydration>  
      </body>
    </html>
  )
}
