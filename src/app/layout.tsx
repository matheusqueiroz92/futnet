import { Poppins } from 'next/font/google';
import './globals.css';
import DefaultProviders from '@/components/DefaultProviders';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'FutNet',
  description: 'Futebol a gente vive!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <DefaultProviders>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
