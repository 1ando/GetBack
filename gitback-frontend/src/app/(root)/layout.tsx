import NavBar from "../components/NavBar";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const loggedIn = {firstName: 'Landon', lastName: 'ROAR'};

    return (
        <main className="flex h-screen w-full front-inter">
            <NavBar/>
            {children}
        </main>
    );
}

