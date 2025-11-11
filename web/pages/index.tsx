import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rise | Level Up Your Real Life</title>
        <meta
          name="description"
          content="Android-first self-development RPG scaffolding with web parity."
        />
      </Head>
      <main className="min-h-screen bg-background text-ink">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center">
          <span className="rounded-full bg-white/80 px-4 py-1 text-sm font-medium uppercase tracking-widest shadow">
            Rise Scaffold • Android + Web
          </span>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Level Up Your Real Life
          </h1>
          <p className="max-w-2xl text-lg text-ink/70">
            Rise delivers game-like personal growth through quests, skill trees, and
            adaptive feedback. This scaffold readies the Android-first experience with
            web parity powered by React Native, Next.js, and a modular backend.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition hover:shadow-xl"
            >
              View Product Blueprint
            </Link>
            <Link
              href="#"
              className="rounded-full border border-ink/10 px-6 py-3 font-semibold text-ink transition hover:border-ink/40 hover:bg-white/60"
            >
              Launch Android Demo
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}




