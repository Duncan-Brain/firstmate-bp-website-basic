import React from 'react';
import PropTypes from 'prop-types';
import forbidExtraProps from 'prop-types-exact';
import styles from './banner.module.css';

/**
 * @function Banner
 * @param {object} props Component props
 * @param {object} props.children Children components
 * @param {string} props.color Background color: default blue
 * @param {string} props.border Border weight : default 0px
 * @param {string} props.colorBorder Border color : default black
 * @returns {object} Custom component
 * @description Content blocks with a consistent size for home page
 */
function Banner({ children, color, border, colorBorder }) {
  const bannerStyle = {
    backgroundColor: color,
    borderTop: border,
    borderBottom: border,
    borderRight: border,
    borderLeft: border,
    borderColor: colorBorder,
  };
  return (
    <div style={bannerStyle} className={styles.Banner}>
      {children}
    </div>
  );
}

Banner.propTypes = forbidExtraProps({
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.string,
  border: PropTypes.string,
  colorBorder: PropTypes.string,
});

Banner.defaultProps = {
  color: '#2d89efff',
  border: '0px',
  colorBorder: '#000000ff',
};

export default Banner;
