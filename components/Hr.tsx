import styled from 'styled-components';

const Hr = () => {
  return <Wrapper></Wrapper>;
};

export default Hr;

const Wrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.color};
  width: 50%;
`;
