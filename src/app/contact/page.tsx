"use client"; // Force this to be a Client Component

export default function ContactPage() {
    return (
        <section className="p-6 text-white">
            <div className="flex flex-col items-center justify-center min-h-screen text-center  p-6">
                <h1 className="text-5xl font-extrabold text-900">Contact Me!</h1>
                <p className="text-lg text-700 mt-4 max-w-2xl">This page is still under construction. If you wish to get
                    in touch, <a href={"mailto:davidkan717@gmail.com"} style={{color: "#f39b06"}}>email</a> is best.</p>
            </div>
        </section>
    );
}
