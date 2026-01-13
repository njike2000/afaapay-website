import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Afa\'a Pay - Digital Payment Solution',
  description: 'Afa\'a Pay is a fintech platform for secure digital payments, escrow services, and trust-based transactions in Cameroon and CEMAC region.',
  keywords: 'fintech, payments, digital wallet, escrow, Cameroon, CEMAC',
  openGraph: {
    title: 'Afa\'a Pay - Digital Payment Solution',
    description: 'Secure digital payments for businesses and individuals',
    url: 'https://afaapay.com',
    siteName: 'Afa\'a Pay',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
