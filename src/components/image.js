import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "final-version.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      css={css`
        width: 35rem;
        height: 35rem;
        border-radius: 0.5rem;
        border: 0.5rem solid #fff;
        box-shadow: 0px 8px 30px #000000;

        @media (max-width: 600px) {
          width: 20rem;
          height: 20rem;
        }
      `}
    />
  );
};

export default Image;
