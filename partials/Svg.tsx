import styled from 'styled-components';
import { MutableRefObject } from 'react';
import { ReactNode, forwardRef } from 'react';

interface SvgProps {
  children: ReactNode;
  ref: MutableRefObject<any>;
}

const Svg = ({ children }: SvgProps, ref: any) => {
  return <Container viewBox="0 0 512 512">{children}</Container>;
};

const Container = styled.svg`
  width: 20%;
  height: auto;
  margin: 20px;

  @media screen and (max-width: 910px) {
    width: 30%;
    margin: 0px;
  }
`;

export default Svg;
