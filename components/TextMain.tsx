import { ReactNode } from 'react';
import styled from 'styled-components';

interface TextMainProps {
  children: ReactNode;
}

const TextMain = ({ children }: TextMainProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default TextMain;

const Wrapper = styled.div`
  padding: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -10;
  font-weight: 500;
  font-size: 150px;
  display: flex;
  flex-direction: column;
  transition: ease-in-out 2s;

  :nth-last-child(2) :last-child {
    transition: ease-in-out 0.2s;
    -webkit-text-stroke: 2px ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    font-size: 100px;
  }
`;
