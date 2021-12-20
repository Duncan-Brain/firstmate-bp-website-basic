import React from 'react';
import PropTypes from 'prop-types';
import forbidExtraProps from 'prop-types-exact';
import MetaSEO from './MetaSEO';
import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.css';

/**
 * @function Layout
 * @param {object} props Component props
 * @param {string} props.page Page name to select correct SEO data
 * @param {object} props.children Children components
 * @returns {object} Custom component
 * @description Main Layout component
 */
function Layout({ page, children }) {
  return (
    <>
      <MetaSEO page={page} />
      <Header />
      <div className={styles.Body}>
        {children}
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = forbidExtraProps({
  page: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
});

export default Layout;
