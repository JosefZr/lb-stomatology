
import "./globals.css";
import ClientProviders from "./ClientLbProviders";

import { nunitoSans } from "@/utils/font";


export default async function RootLayout({ children }) {
  return (
    <html lang='en' className="scroll-smooth relative" suppressHydrationWarning>
      <head>
        <title>BENYAHIA FAMILY</title>
        <link rel="icon" href="./favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content=" •Dental Implant Surgery Doesn't Have to Be Scary• You're not just a number to us. Our 30 years of experience are dedicated to ensuring every patient  feels cared for and achieves the best results." />
      </head>
      <body className={`${nunitoSans.className} relative h-fit`} suppressHydrationWarning={true}>
      
        <ClientProviders>
        {children}

        </ClientProviders>
      </body>
    </html>
  );
}
