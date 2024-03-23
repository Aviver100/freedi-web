import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Delicol",
    description: "Building Bonds and Bridging Divides",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>{/* <script src="http://localhost:8097"></script> */}</head>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}