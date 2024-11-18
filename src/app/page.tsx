import { Navbar } from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
      <div className="min-h-screen text-gray-100 flex flex-col ">
        <main className="flex-grow flex flex-col gap-16">
          <section
            id="nav"
            className="flex items-center justify-center bg-blue500"
          >
            <Navbar />
          </section>
        </main>

        <footer className="bg-blue500 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
