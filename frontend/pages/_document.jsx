import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

/**
 * @class MyDocument
 * @returns {object} Rendered component
 * @see {@link https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager}
 * @see {@link https://nextjs.org/docs/advanced-features/custom-document}
 * @description Using Google Tag Manger with Next.js rendered document setup
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <noscript>
            <iframe
              title="googleTagManager"
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{
                display: 'none',
                visibility: 'hidden',
              }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
