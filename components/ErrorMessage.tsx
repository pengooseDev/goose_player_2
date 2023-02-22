import styled from 'styled-components';
import { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ErrorMessage;

const Wrapper = styled.div`
  color: red;
  opacity: 0.8;
`;
