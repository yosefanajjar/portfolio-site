import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1
        css={css`
          text-align: center;
        `}
      >
        Hi People!
      </h1>
      <p>Welcome to my portfolio</p>
    </div>
  </Layout>
);

export default IndexPage;
