import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggle } from '@redux/modules/themeReducer';

const ToggleBtn = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggle());
  };

  return (
    <Wrapper>
      <Color onClick={toggleHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  padding: 7.5px;
  border-radius: 3px;
`;

const Color = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.color};
  transition: 0.15s ease-in-out;
  :hover {
    cursor: pointer;
  }
`;
export default ToggleBtn;
