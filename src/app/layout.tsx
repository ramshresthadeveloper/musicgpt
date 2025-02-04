import type { Metadata } from "next";
import '@app/assets/css/globals.css';
import '@app/assets/scss/app.scss';
import { Inter } from 'next/font/google';
import { GlobalModalProvider } from "@app/components/modal/ModalContext";
import GlobalModal from "@app/components/modal";

export const metadata: Metadata = {
  title: "MusicGPT",
  description: "Demo",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en" >
    <body className={inter.className}>
      <GlobalModalProvider>
        {children}
        <GlobalModal />
      </GlobalModalProvider>
    </body>
  </html>);
}
