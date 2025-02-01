import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";


const inter = Inter({subsets:["latin"]});
const poppins = Inter({subsets:["latin"], variable:"--font-poppins"})


 
 

export const metadata = {
  title: "ELMS",
  description: "Explore || Learn || Build || Share",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className,poppins.className)}
      >
        {children}
<Toaster richColors position="top-center" />

      </body>
    </html>
  );
}
