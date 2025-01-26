export default function BasePage({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 p-6">
            <h1 className="text-5xl font-extrabold text-gray-900">{title}</h1>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl">{description}</p>
        </div>
    );
}
