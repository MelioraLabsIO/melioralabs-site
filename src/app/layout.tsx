import {Inter, IBM_Plex_Sans} from "next/font/google";
import type {Metadata} from "next";
import {Header} from "@/components/site/header";
import {Footer} from "@/components/site/footer";
import {ThemeProvider} from "@/components/site/theme-provider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const plex = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Meliora Labs",
    description: "In Pursuit of Better.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${plex.variable}`} suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className="relative flex min-h-screen flex-col">
                <Header/>
                <main className="flex-1">{children}</main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}