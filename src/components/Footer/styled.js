import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--white);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--white);
  text-align: center;

  p {
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
