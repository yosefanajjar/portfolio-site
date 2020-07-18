import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import SocialBox from '../components/social-box';

const slideLeftRight = keyframes`
  0% {
    transform: translateX(-25px)
  }

  100% {
    transform: translateX(0);
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        width: 80%;
        padding: 5rem 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        @media (max-width: 600px) {
          flex-direction: column;
        }

        @media (max-width: 320px) {
          width: 90%;
        }

        h2 {
          font-size: 3.6rem;
          color: #ececec;
          font-weight: 500;
          margin-bottom: 2rem;

          @media (max-width: 600px) {
            text-align: center;
          }
        }
      `}
    >
      <div
        css={css`
          width: 50%;

          @media (max-width: 900px) {
            width: 60%;
          }

          @media (max-width: 600px) {
            width: 100%;
            order: 2;
          }
        `}
      >
        <div>
          <h1
            css={css`
              font-size: 4.8rem;
              font-weight: 500;
              padding-left: 5rem;
              margin-bottom: 0.9rem;
              animation: ${slideLeftRight} 1s ease;

              @media (max-width: 600px) {
                font-size: 3.6rem;
              }
            `}
          >
            Yosef Alnajjar
          </h1>
          <div
            css={css`
              height: 0.5rem;
              width: 40%;
              background: #b030b0;
            `}
          />
        </div>

        <div
          css={css`
            margin-top: 6rem;
          `}
        >
          <h2>About Me</h2>
          <p
            css={css`
              font-size: 2rem;
              line-height: 1.4;
              color: #dddddd;

              @media (max-width: 600px) {
                text-align: center;
              }
            `}
          >
              I am a passionate developer, who is always looking for the
              latest trends in web development. I am so desperate to
              improve my skills every single day to reach my goals
              quicker. I have experience in building responsive and
              modern web applications using JavaScript in the
              front-end(React) and in the back-end(Node) in addition to
              other skills like testing, debugging and deploying
              websites.
          </p>
        </div>

        <div
          css={css`
            margin-top: 4rem;
          `}
        >
          <h2>Follow Me</h2>
          <div
            css={css`
              display: flex;

              a:not(:first-of-type) {
                margin-left: 2.5rem;
              }

              @media (max-width: 600px) {
                justify-content: center;
              }
            `}
          >
            <a
              href="https://twitter.com/YosefAnajjar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBox>
                <FaTwitter
                  fill="#b030b0"
                  size="24"
                  className="svg-icon"
                />
              </SocialBox>
            </a>
            <a
              href="https://github.com/yosefanajjar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBox>
                <FaGithub
                  fill="#b030b0"
                  size="24"
                  className="svg-icon"
                />
              </SocialBox>
            </a>
            <a
              href="https://www.linkedin.com/in/yosefanajjar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBox>
                <FaLinkedin
                  fill="#b030b0"
                  size="24"
                  className="svg-icon"
                />
              </SocialBox>
            </a>
            <a
              href="https://www.instagram.com/yosefanajjar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBox>
                <FaInstagram
                  fill="#b030b0"
                  size="24"
                  className="svg-icon"
                />
              </SocialBox>
            </a>
          </div>
        </div>
      </div>
      <div
        css={css`
          width: 35%;
          display: flex;
          align-items: center;
          justify-content: center;

          @media (max-width: 600px) {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 4rem;
          }
        `}
      >
        <Image />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
