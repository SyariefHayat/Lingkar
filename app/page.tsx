
export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6">
            <h1 className="text-4xl font-poppins font-bold mb-4">Selamat Datang 👋</h1>
            <p className="text-lg mb-8">Ini adalah landing page aplikasi kamu.</p>

            <div className="flex gap-4">
                <a
                    href="/signin"
                    className="px-6 py-2 rounded-2xl bg-foreground text-background hover:opacity-80"
                >
                    Sign In
                </a>
                <a
                    href="/signup"
                    className="px-6 py-2 rounded-2xl border border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                    Sign Up
                </a>
            </div>
        </main>
    );
}
