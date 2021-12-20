import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/_app';
import Index from '../pages/index';

/**
 * @see {@link https://github.com/vercel/next.js/issues/7479}
 *   Adapted from comments by smasontst and mattcarlotta
 * @description Tests _app.jsx ability to render components and use router
 * @todo Mock next/router instead - Try adapting comments from @aeksco
 */
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('App', () => {
  it('renders without crashing', () => {
    useRouter.mockImplementationOnce(() => ({
      basePath: '/',
      pathname: '/',
      route: '/',
      query: {
      },
      asPath: '/',
      push: jest.fn(() => Promise.resolve(true)),
      replace: jest.fn(() => Promise.resolve(true)),
      reload: jest.fn(() => Promise.resolve(true)),
      prefetch: jest.fn(() => Promise.resolve()),
      back: jest.fn(() => Promise.resolve(true)),
      beforePopState: jest.fn(() => Promise.resolve(true)),
      isFallback: false,
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }));
    const view = render(
      <App
        Component={Index}
        pageProps={{
        }}
      />,
    );
    expect(view).toBeTruthy();
  });
});
