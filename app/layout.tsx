import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import NavegationMobile from "./components/NavegationMobile"
import NavegationDesktop from "./components/NavegationDesktop"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HorarioAnime',
  description: 'Horario de anime en español',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className=''>
          <NavegationMobile/>
          <NavegationDesktop/>
        </div>
        {children}
      </body>
      <Toaster/>
    </html>
  );
}
