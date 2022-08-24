import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

import { create, insert, search } from '@lyrasearch/lyra';

const movieDB = create({
  schema: {
    title: `string`,
    director: `string`,
    plot: `string`,
    year: `number`,
    isFavorite: `boolean`,
  },
});

const { id: thePrestige } = insert(movieDB, {
  title: `The prestige`,
  director: `Christopher Nolan`,
  plot: `Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.`,
  year: 2006,
  isFavorite: true,
});

const { id: bigFish } = insert(movieDB, {
  title: `Big Fish`,
  director: `Tim Burton`,
  plot: `Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.`,
  year: 2004,
  isFavorite: true,
});

const { id: harryPotter } = insert(movieDB, {
  title: `Harry Potter and the Philosopher's Stone`,
  director: `Chris Columbus`,
  plot: `Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.`,
  year: 2001,
  isFavorite: false,
});

const searchResult = search(movieDB, {
  term: `Harry`,
  properties: `*`,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{` `}
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
