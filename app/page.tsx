import Image from "next/image"
import Link from "next/link"

import { Connect } from "@/components/connect"
import { rgbDataURL } from "@/lib/rgb-data-url"

export default function Home() {
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center space-y-8">
        <span className="block text-xl font-bold md:text-3xl">
          👋 Hi, I&rsquo;m Matt Venables.
        </span>
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

        <h1 className="text-center font-serif text-5xl md:text-7xl">
          I build <span className="italic">delightful</span> products.
        </h1>

        <div className="flex flex-col space-y-4 text-center text-xl md:pt-4 md:text-2xl">
          <span>
            I am passionate about building things to help people live happier,
            healthier lives.
          </span>

          <span>
            Currently, I am a co-founder of{" "}
            <Link
              href="https://catena.xyz"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
            >
              Catena Labs
            </Link>
            .
          </span>

          <span>
            Prior to Catena, I founded{" "}
            <Link
              href="https://m2.xyz"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
              rel="noreferrer"
            >
              M2 Labs
            </Link>
            , a web3 studio, and{" "}
            <Link
              href="https://vested.co"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
              rel="noreferrer"
            >
              Vested
            </Link>
            , a secondary marketplace for employee equity.
          </span>

          <span>
            Before that, I was an early executive of{" "}
            <Link
              href="https://circle.com"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
              rel="noreferrer"
            >
              Circle
            </Link>{" "}
            where I helped create the{" "}
            <Link
              href="https://www.circle.com/usdc"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
              rel="noreferrer"
            >
              USDC stablecoin
            </Link>
            .
          </span>

          <span>
            And before that, I created{" "}
            <Link
              href="https://jog.fm"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
              rel="noreferrer"
            >
              jog.fm
            </Link>{" "}
            and{" "}
            <Link
              href="https://songbpm.com"
              target="_blank"
              className="bg-green-100 font-bold hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700"
              rel="noreferrer"
            >
              songbpm
            </Link>
            , which help a million unique people per month improve their health
            and fitness.
          </span>
        </div>
        <div className="text-center text-sm font-bold uppercase text-gray-400 ">
          <h2>Get in touch</h2>
          <Connect />
        </div>
      </div>
    </>
  )
}
