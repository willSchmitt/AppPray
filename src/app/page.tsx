import { Navbar } from "@/app/components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto">
      <Navbar />

      {/* <footer className="bg-blue500 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

{
  /* <div>
<div className="min-h-screen text-gray-100 flex flex-col ">
  <main className="flex-grow flex flex-col gap-16">
    <section
      id="nav"
      className="flex items-center justify-center bg-blue500"
    >
      <Navbar />
    </section>

    <section className="flex-grow border-l border-r border-gray-700 mx-auto">
      <header className="sticky top-0 z-10 bg-slate-400 bg-opacity-80">
        <h2 className="px-4 py-3 text-xl font-bold">Para você</h2>
      </header>
    </section>
  </main>


</div>
</div> */
}
