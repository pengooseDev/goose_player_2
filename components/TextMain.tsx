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
  position: absolute;
  font-weight: 600;
  font-size: 150px;
  padding: 20px;
`;
