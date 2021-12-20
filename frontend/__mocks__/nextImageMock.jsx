import React from 'react';

/**
 * @param {object} props Component props
 * @param {object} props.children Children components
 * @param {object} props.otherProps The other props
 * @returns {object} nextImageMock Custom mock component
 * @see Next image test: {@link https://github.com/vercel/next.js/issues/26749}
 *   Adapted .tsx from @thepuzzlemaster and updated jest.config
 * @description Mock for next images -- import images with next affecting tests
 *   children handled for situations like <NextImage><SemanticImage/><NextImage>
 * @see Configuration in jest.config.js
 */
export default ({ children, ...otherProps }) => (
  <>
    <img {...otherProps} />
    <div>{children}</div>
  </>
);
