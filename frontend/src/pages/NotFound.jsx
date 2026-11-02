import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-amber-500">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-neutral-600">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-full bg-neutral-900 px-6 py-3 text-white"
      >
        Back to Home
      </Link>
    </section>
  );
}