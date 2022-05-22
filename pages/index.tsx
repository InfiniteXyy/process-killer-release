import Head from 'next/head';
import Image from 'next/image';
import { IntroImage } from '~/components/intro-img';
import { Section } from '~/components/section';

export default function Index() {
  return (
    <>
      <Head>
        <title>Process Killer</title>
        <meta name="description" content="A user friendly Developer Tool for killing processes." />
      </Head>
      <main className="text-center">
        <Image src="/logo.png" alt="logo" height={40} width={40} />
        <h1 className="mb-2 text-2xl font-bold">Process Killer</h1>
        <div className="mb-6 text-gray-500">A user friendly Developer Tool for killing processes</div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/InfiniteXyy/process-killer-release/releases/"
          className="inline-block rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-300 dark:text-gray-900"
        >
          Download (Windows)
        </a>
        <div className="mt-4 text-xs font-medium text-gray-500">Mac and Linux Version coming soon</div>
        <Section title="Basic Demo">
          <IntroImage src="/intro.jpg" alt="intro" />
        </Section>
        <Section title="Filter By Ports">
          <IntroImage src="/kill-by-ports.jpg" alt="kill-by-ports" />
        </Section>

        <Section title="Coming Soon">
          <ol className="list-decimal text-left italic leading-8">
            <li>Cross Platform</li>
            <li>Process Groups</li>
            <li>Multiple process selection and kill</li>
          </ol>
        </Section>
      </main>

      <footer className="mt-8 text-center text-xs">
        <div>@Copyright 2022 InfiniteXyy</div>
        <div className="mt-4 flex justify-center space-x-4 text-xl">
          <a href="https://github.com/InfiniteXyy" className="dark:text-white i-[carbon-logo-github]" />
          <a href="https://twitter.com/InfiniteXyy" className="i-[logos-twitter] " />
        </div>
      </footer>
    </>
  );
}
