import styled from 'styled-components';
import { ReactNode } from 'react';

interface FormTextType {
  children: string | ReactNode;
}

const FormText = ({ children }: FormTextType) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FormText;

const Wrapper = styled.div`
  transition: 0.15s ease-in-out;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color};
`;
