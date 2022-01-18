import Head from "next/head"
import { NextSeo } from "next-seo"
import Image from "next/image"
import { rgbDataURL } from "../lib/rgb-data-url"

const CONNECT_ITEMS = [
  {
    title: "@mattyven on Twitter",
    href: "https://twitter.com/mattyven",
    content: (
      <>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </>
    )
  },
  {
    title: "venables on Github",
    href: "https://github.com/venables",
    content: (
      <>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </>
    )
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/mattvenables",
    content: (
      <>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      </>
    )
  },

  {
    title: "Email",
    href: "mailto:matt@venabl.es",
    target: "_self",
    content: (
      <>
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </>
    )
  },
  {
    title: "venables.eth on Ethereum",
    href: "https://etherscan.io/address/0x6fe2f9eb1c5b6e3c71a84373f03abcc7df13947c",
    content: (
      <>
        <svg
          viewBox="0 0 902 1504"
          className="w-6 h-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 767L451.5 0L901.5 767.5L451 1048.5L0 767Z"
            fill="currentColor"
          />
          <path
            d="M451 1140.5L0 859.5L451 1503.5L901.5 859L451 1140.5Z"
            fill="currentColor"
          />
        </svg>
      </>
    )
  },
  {
    title: "mdv.sol on Solana",
    href: "https://solscan.io/account/mdvM4ztgdb5QQ7WvGFi2Yh2Qfbew3srVDKPmANkyk4L",
    content: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 398 312"
          fill="none"
          className="w-6 h-6"
        >
          <path
            d="M64.6325 237.918C67.0659 235.486 70.3651 234.121 73.8051 234.121H391.203C396.985 234.121 399.879 241.112 395.789 245.199L333.072 307.866C330.638 310.298 327.339 311.664 323.899 311.664H6.50165C0.719649 311.664 -2.17481 304.672 1.91531 300.585L64.6325 237.918Z"
            fill="currentColor"
          />
          <path
            d="M64.6325 3.7973C67.0659 1.36583 70.3651 0 73.8051 0H391.203C396.985 0 399.879 6.99175 395.789 11.0786L333.072 73.7458C330.638 76.1773 327.339 77.5431 323.899 77.5431H6.50165C0.719649 77.5431 -2.17481 70.5514 1.91531 66.4645L64.6325 3.7973Z"
            fill="currentColor"
          />
          <path
            d="M333.072 120.112C330.638 117.68 327.339 116.315 323.899 116.315H6.50164C0.719647 116.315 -2.17481 123.306 1.91531 127.393L64.6325 190.06C67.0659 192.492 70.3651 193.858 73.8051 193.858H391.203C396.985 193.858 399.879 186.866 395.789 182.779L333.072 120.112Z"
            fill="currentColor"
          />
        </svg>
      </>
    )
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <NextSeo
        title="Matt Venables"
        description="Hi, I'm Matt Venables. I build delightful Web3 + crypto products."
        author="Matt Venables"
        canonical="https://venabl.es"
        twitter={{
          handle: "@mattyven",
          site: "@mattyven",
          cardType: "summary_large_image"
        }}
      />

      <main className="container max-w-screen-xl px-4 pt-8 pb-12 mx-auto text-center sm:pt-12">
        <h1 className="pb-8 text-6xl font-extrabold leading-none tracking-tight text-gray-900">
          <span className="block pr-1 md:inline">👋</span> Hi, I&apos;m Matt
          Venables.
        </h1>

        <div className="relative w-56 h-56 mx-auto overflow-hidden transition-shadow duration-300 ease-in-out border-4 border-gray-200 rounded-full md:w-64 md:h-64 hover:shadow-2xl bg-[#bef0c6]">
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            src="/images/matt-venables-avatar.png"
            alt="Matt Venables"
            title="Matt Venables"
            placeholder="blur"
            blurDataURL={rgbDataURL(190, 240, 198)}
          ></Image>
        </div>

        <p className="pt-8 text-3xl font-bold leading-none tracking-tight">
          I build delightful Web3 + crypto products.
        </p>

        <div className="my-12">
          <p className="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
            Current Status
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Having the time of my life building{" "}
            <a
              href="https://m2.xyz"
              className="transition-colors duration-200 ease-in-out hover:bg-[#BEF0C6] bg-[#D3F6D9]"
            >
              M2 Labs
            </a>
            .
          </h3>
        </div>

        <p className="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
          Let&apos;s connect
        </p>
        <div className="flex items-center justify-center mt-4 space-x-6 text-gray-400">
          {CONNECT_ITEMS.map(({ title, href, content, target }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 ease-in-out hover:text-gray-800 hover:scale-110 active:scale-100"
              target={target ?? "_blank"}
              rel="noreferrer"
            >
              <span className="sr-only">{title}</span>
              {content}
            </a>
          ))}
        </div>

        <div className="my-12">
          <p className="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
            Other Work
          </p>
          <div className="grid max-w-lg gap-5 mx-auto mt-4 lg:grid-cols-2 lg:max-w-none">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <a
                href="https://jog.fm"
                target="_blank"
                className="flex-shrink-0"
                rel="noreferrer"
              >
                <img
                  className="object-cover w-full h-48"
                  src="./images/jogfm-hero.jpg"
                  alt="jog.fm - Find the best workout music and playlists"
                />
                {/*Photo by Morgan Sarkissian on Unsplash (https://unsplash.com/photos/tFaJOKVC2J0)*/}
              </a>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium leading-5 text-indigo-600">
                    <a
                      href="https://jog.fm"
                      target="_blank"
                      className="hover:underline"
                      rel="noreferrer"
                    >
                      Web + iOS
                    </a>
                  </p>
                  <a
                    href="https://jog.fm"
                    target="_blank"
                    className="block"
                    rel="noreferrer"
                  >
                    <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                      jog.fm - The best workout music
                    </h3>
                    <p className="mt-3 text-base leading-6 text-left text-gray-600">
                      Find and share workout music and playlists that match your
                      running pace perfectly 👌.
                      <br />
                      <br />
                      Launched in 2010 as a tool to make my workouts less
                      boring, the service has grown to attract
                      <strong className="pl-1">
                        several hundred thousand athletes every month
                      </strong>
                      .
                      <br />
                      <br />
                      jog.fm has been featured in several books, magazines, and
                      newspapers including: Wired, Scientific American,
                      Washington Post, Men&apos;s Health, People, SHAPE,
                      Runner&apos;s World, Health, Real Simple, news.com.au,
                      PCWorld, LifeHacker, and many others.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://jog.fm" target="_blank" rel="noreferrer">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="./images/jogfm.png"
                        alt="jog.fm - The best workout music"
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium leading-5 text-gray-900">
                      <a
                        href="https://twitter.com/jogfm"
                        target="_blank"
                        className="hover:underline"
                        rel="noreferrer"
                      >
                        @jogfm
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <a
                href="https://songbpm.com"
                target="_blank"
                className="flex-shrink-0"
                rel="noreferrer"
              >
                <img
                  className="object-cover w-full h-48"
                  src="./images/songbpm-hero.jpg"
                  alt="SONG BPM - Find the BPM of any song"
                />
                {/*Photo by Malte Wingen on Unsplash (https://unsplash.com/photos/PDX_a_82obo)*/}
              </a>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium leading-5 text-indigo-600">
                    <a
                      href="https://songbpm.com"
                      target="_blank"
                      className="hover:underline"
                      rel="noreferrer"
                    >
                      Web
                    </a>
                  </p>
                  <a
                    href="https://songbpm.com"
                    target="_blank"
                    className="block"
                    rel="noreferrer"
                  >
                    <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                      SONGBPM - Find the tempo of any song.
                    </h3>
                    <p className="mt-3 text-base leading-6 text-left text-gray-600">
                      Type a song, get a bpm. ⚡️
                      <br />
                      <br />
                      SONGBPM was born after chatting with some jog.fm users
                      about how they were using the service. Several of them
                      were simply looking for the tempo (the BPM) of a song.
                      <br />
                      <br />
                      Launched in 2011, the single-purpose service has attracted
                      even more fanfare than jog.fm, consistently bringing in{" "}
                      <strong>half a million unique users per month</strong>.
                      <br />
                      <br />
                      SONGBPM has been featured in several books, magazines and
                      newspapers including: TIME, The Today Show, Rolling Stone,
                      Scientific American, Washington Post, Women&apos;s Health,
                      Men&apos;s Journal, Men&apos;s Health, SHAPE, Real Simple,
                      LifeHacker, Marie Claire, Huffington Post, ADIDAS and many
                      others.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://songbpm.com" taget="_blank">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="./images/songbpm.png"
                        alt="SONGBPM - Type a song. Get a BPM."
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium leading-5 text-gray-900">
                      <a
                        href="https://twitter.com/songbpm"
                        target="_blank"
                        className="hover:underline"
                        rel="noreferrer"
                      >
                        @songbpm
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
