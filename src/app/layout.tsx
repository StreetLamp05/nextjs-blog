import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>My Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="min-h-screen flex flex-col bg-[url('/background-vector.svg')] bg-no-repeat bg-contain ">
        <NavBar />
        <main className="flex-grow p-10">{children}</main>
        </body>
        </html>
    );
}