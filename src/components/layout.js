import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Raleway:400,500,700&display=swap');

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          font-size: 10px;
        }

        body {
          background: #202040;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
          color: #fff;
          max-width: 100vw;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Raleway, sans-serif;
        }

        a {
          text-decoration: none;
          color: #b030b0;
        }
      `}
    />
    <main
      css={css`
        min-height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {children}
    </main>
    <footer
      css={css`
        text-align: center;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      `}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
