import "@fontsource/inter";
import "tailwindcss/tailwind.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-98870-11"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-98870-11');
  `}
      </Script>
      <div className="antialiased text-gray-800">
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
