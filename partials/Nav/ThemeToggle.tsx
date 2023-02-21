import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggle } from '@redux/modules/themeReducer';

const ToggleBtn = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggle());
  };

  return <Color onClick={toggleHandler} />;
};

const Color = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color};
  transition: 0.15s ease-in-out;
  :hover {
    cursor: pointer;
  }
`;
export default ToggleBtn;
