import styled from '@emotion/styled';

export default styled('div')`
  width: 5rem;
  height: 5rem;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #b030b0;
    transform: translateY(-0.5px);

    .svg-icon {
      transition: all 0.2s ease-in-out;
      fill: rgb(255, 255, 255);
    }
  }

  :active {
    transform: translateY(0);
  }
`;
