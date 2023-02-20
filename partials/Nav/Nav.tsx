import styled from 'styled-components';
import NavLink from './NavLink';
import ToggleBtn from './ThemeToggle';

const Nav = () => {
  return (
    <Container>
      <LeftComponents></LeftComponents>
      <RightComponents>
        <NavLink value={'HOME'} href={'/'} />
        <NavLink value={'Example'} href={'#'} />
        <ToggleBtn />
      </RightComponents>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 10px;
  top: 0px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const RightComponents = styled.div`
  display: flex;
  align-items: center;
`;

const LeftComponents = styled.div`
  display: flex;
`;

export default Nav;
