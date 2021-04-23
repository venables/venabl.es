import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="I build delightful products." />
        <meta name="author" content="Matt Venables" />

        <title>
          👋 Hi, I'm Matt Venables. I build delightful internet and phone
          things.
        </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="./images/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="./images/icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="./images/icons/manifest.json" />
        <link
          rel="mask-icon"
          href="./images/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="./images/icons/favicon.ico" />
        <meta
          name="msapplication-config"
          content="./images/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="container max-w-screen-xl px-4 pt-8 pb-12 mx-auto text-center sm:pt-12">
        <h1 className="pb-8 text-6xl font-extrabold leading-none tracking-tight text-gray-900">
          <span className="block pr-1 md:inline">👋</span> Hi, I'm Matt
          Venables.
        </h1>

        <img
          className="w-56 mx-auto transition-shadow duration-300 ease-in-out border-8 border-teal-200 rounded-full md:w-64 hover:shadow-2xl"
          src="./images/matt-venables@3x.jpg"
          alt="Matt Venables"
        />

        <p className="pt-8 text-3xl font-bold leading-none tracking-tight">
          I build things on the internet and on your phone.
        </p>

        <div className="my-12">
          <p className="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
            Current Status
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Building{" "}
            <span className="transition-colors duration-200 ease-in-out bg-teal-100 hover:bg-teal-200">
              something new
            </span>
            . 🤫
          </h3>
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
                    >
                      Web + iOS
                    </a>
                  </p>
                  <a href="https://jog.fm" target="_blank" className="block">
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
                      Washington Post, Men's Health, People, SHAPE, Runner's
                      World, Health, Real Simple, news.com.au, PCWorld,
                      LifeHacker, and many others.
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://jog.fm" target="_blank">
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
                    >
                      Web
                    </a>
                  </p>
                  <a
                    href="https://songbpm.com"
                    target="_blank"
                    className="block"
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
                      Scientific American, Washington Post, Women's Health,
                      Men's Journal, Men's Health, SHAPE, Real Simple,
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

        <p className="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
          Let's connect
        </p>
        <div className="flex justify-center mt-4 space-x-6 text-gray-400">
          <a
            href="https://github.com/venables"
            target="_blank"
            className="transition-colors duration-200 ease-in-out hover:text-gray-800"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/mattyven"
            target="_blank"
            className="transition-colors duration-200 ease-in-out hover:text-gray-800"
          >
            <span className="sr-only">Twitter</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/mattvenables"
            target="_blank"
            className="transition-colors duration-200 ease-in-out hover:text-gray-800"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>

          <a
            href="mailto:matt@venabl.es"
            className="transition-colors duration-200 ease-in-out hover:text-gray-800 hover:scale-110"
          >
            <span className="sr-only">Email</span>
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
          </a>
        </div>
      </main>
    </>
  );
}
