const CONNECT_ITEMS = [
  {
    title: "@mattyven on Twitter",
    href: "https://twitter.com/mattyven",
    content: (
      <>
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
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
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
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
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
          className="h-8 w-8"
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
          className="h-6 w-6"
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
          className="h-6 w-6"
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

export default function Connect() {
  return (
    <>
      <div className="mt-4 flex items-center justify-center space-x-6 text-gray-400">
        {CONNECT_ITEMS.map(({ title, href, content, target }) => (
          <a
            key={href}
            href={href}
            className="transition-colors duration-200 ease-in-out hover:scale-110 hover:text-gray-800 active:scale-100"
            target={target ?? "_blank"}
            rel="noreferrer"
          >
            <span className="sr-only">{title}</span>
            {content}
          </a>
        ))}
      </div>
    </>
  )
}
