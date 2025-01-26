import "@/styles/globals.css";
import {yellow} from "next/dist/lib/picocolors";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-5xl font-extrabold text-900">Hello, I&#39;m David.</h1>
            <p className="text-lg text-700 mt-4 max-w-2xl">
                I am a student, programmer, guitarist, and pianist currently living in the Metro Atlanta area.

                If you want to get in touch with me, <a href={"mailto:davidkan717@gmail.com"} style={{color: "#f39b06"}}>email</a> is best.
            </p>
        </div>
    );
}
