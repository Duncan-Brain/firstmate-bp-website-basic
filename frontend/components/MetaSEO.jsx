import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import forbidExtraProps from 'prop-types-exact';
import Data from './MetaSEO.data.json';

/**
 * @function MetaSEO
 * @param {object} props Component props
 * @param {string} props.page Page name to select correct SEO data
 * @returns {object} Custom component
 * @description Main Layout component Meta tags for SEO
 * @todo Review Content-Security-Policy best practices
 * @todo Review updates to standard and social meta properties
 * @todo Dark mode favicon not working
 */
function MetaSEO({ page }) {
  const { title } = Data.domain.pages[page];
  return (
    <Head>
      {/* <!-- Content Security Policy --> */}
      {/* <meta httpEquiv="Content-Security-Policy" content="connect-src 'self'; default-src 'none'; img-src 'self'; manifest-src 'self'; script-src-elem 'self' http://js.hsforms.net/forms/shell.js https://app.hubspot.com/; style-src-elem 'self'" /> */}
      {/* <!-- iPhone shrink fix may remove zoom in function https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_width_and_screen_width --> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <!-- Thanks to MEGATAGS.co --> */}
      {/* <!-- COMMON TAGS --> */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      {/* <!-- Search Engine --> */}
      <meta name="description" content={Data.domain.description} />
      <meta name="author" content={Data.domain.author} />
      <meta name="image" content={Data.domain.imageFullURL} />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={Data.domain.description} />
      <meta itemProp="image" content={Data.domain.images.defaultIconFullURL} />
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={Data.domain.description} />
      <meta name="twitter:site" content={Data.domain.twitter.siteHandle} />
      <meta name="twitter:creator" content={Data.domain.twitter.authorHandle} />
      <meta name="twitter:image:src" content={Data.domain.twitter.imageFullURL} />
      <meta name="twitter:player" content={Data.domain.twitter.videoFullURL} />
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={Data.domain.description} />
      <meta name="og:image" content={Data.domain.og.imageFullURL} />
      <meta name="og:url" content={Data.domain.url} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content={Data.domain.locale} />
      <meta name="og:video" content={Data.domain.og.imageFullURL} />
      <meta name="fb:admins" content={Data.domain.facebook.facebookUserID} />
      <meta name="fb:app_id" content={Data.domain.facebook.facebookAppID} />
      <meta name="og:type" content="website" />
      {/* <!-- Thanks to realfavicongenerator.net --> */}
      {/* <!-- Dark mode favicon configuration --> */}
      <link rel="icon" type="image/svg+xml" href={Data.domain.images.darkmodeFaviconRelURL} />
      <link rel="icon" type="image/png" href={Data.domain.images.faviconPNGRelURL} />
      {/* <!-- Favicon for Browsers, iOS, Android, Windows, macOS --> */}
      <link rel="apple-touch-icon" sizes="180x180" href={Data.domain.images.appleTouchIconRelURL} />
      <link rel="icon" type="image/png" sizes="32x32" href={Data.domain.images.favicon32RelURL} />
      <link rel="icon" type="image/png" sizes="16x16" href={Data.domain.images.favicon16RelURL} />
      <link rel="manifest" href={Data.domain.images.faviconManifestRelURL} />
      <link rel="mask-icon" href={Data.domain.images.maskIconRelURL} color={Data.domain.themeColor} />
      {/* <!-- Deviation from realfavicongenerator rel="shortcut icon" disallowed --> */}
      <link rel="icon" href={Data.domain.images.shortcutIconRelURL} />
      <meta name="msapplication-TileColor" content={Data.domain.themeColor} />
      <meta name="msapplication-config" content={Data.domain.images.msApplcationConfigRelURL} />
      <meta name="theme-color" content={Data.domain.themeColor} />
    </Head>
  );
}

MetaSEO.propTypes = forbidExtraProps({
  page: PropTypes.string.isRequired,
});

export default MetaSEO;
