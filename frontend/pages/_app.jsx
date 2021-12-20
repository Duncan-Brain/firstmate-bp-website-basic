import React, { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { GTM_ID, pageview } from '../lib/gtm';
import 'semantic-ui-css/semantic.min.css';
import '../styles/global.css';

/**
 * @function App
 * @param {object} props Component props
 * @param {object} props.Component Component to render
 * @param {object} props.pageProps The other props
 * @returns {object} Rendered component
 * @fires App#pageview
 * @see {@link https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager}
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app}
 * @description Using Google Tag Manger with Next.js renders page components
 */
function App({ Component, pageProps }) {
  /**
   * @event App#pageview
   */
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer', '${GTM_ID}');`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
