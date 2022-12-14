import Image from "next/image"
import Link from "next/link"

import Connect from "components/Connect"
import { rgbDataURL } from "lib/rgb-data-url"

export default function Home() {
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center space-y-8">
        <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-gray-200 bg-[#bef0c6] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl">
          <Image
            fill
            quality={100}
            src="/images/matt-venables-avatar.png"
            alt="Matt Venables"
            title="Matt Venables"
            placeholder="blur"
            blurDataURL={rgbDataURL(190, 240, 198)}
          />
        </div>

        <span className="block text-xl font-bold md:text-3xl">
          👋 Hi, I&rsquo;m Matt Venables.
        </span>

        <h1 className="text-center font-serif text-5xl md:text-7xl">
          I build <span className="italic">delightful</span> web3 products.
        </h1>

        <div className="flex flex-col space-y-4 text-center text-xl md:pt-4 md:text-2xl">
          <span>
            I&rsquo;m currently building{" "}
            <Link
              href="https://catenalabs.xyz"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
            >
              Catena Labs
            </Link>
            .
          </span>
          <span>
            Since 2013, I&rsquo;ve been building some of the{" "}
            <span className="font-bold">
              most widely used crypto products in the world
            </span>
            , including the{" "}
            <Link
              href="https://www.circle.com/usdc"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
              rel="noreferrer"
            >
              USDC stablecoin
            </Link>
            , the{" "}
            <Link
              href="https://centre.io/verite"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
              rel="noreferrer"
            >
              Verite
            </Link>{" "}
            decentralized identity protocol, and countless others.
          </span>
          <span>
            Prior to founding Catena, I founded{" "}
            <Link
              href="https://m2.xyz"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
              rel="noreferrer"
            >
              M2 Labs
            </Link>
            , a web3 studio, and{" "}
            <Link
              href="https://vested.co"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
              rel="noreferrer"
            >
              Vested
            </Link>
            , a secondary marketplace for employee equity. I also created{" "}
            <Link
              href="https://jog.fm"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
              rel="noreferrer"
            >
              jog.fm
            </Link>{" "}
            and{" "}
            <Link
              href="https://songbpm.com"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800"
              rel="noreferrer"
            >
              songbpm
            </Link>{" "}
            which receive nearly a million unique visitors per month.
          </span>
        </div>
        <div className="text-center text-sm font-bold uppercase text-gray-400">
          <h2>Get in touch</h2>
          <Connect />
        </div>
      </div>
    </>
  )
}
