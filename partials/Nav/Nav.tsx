import styled from 'styled-components';
import NavLink from './NavLink';
import ToggleBtn from './ThemeToggle';

const Nav = () => {
  return (
    <Container>
      <LeftComponents></LeftComponents>
      <RightComponents>
        <NavLink value={'Home'} href={'/'} />
        <NavLink value={'LogIn'} href={'/user/login'} />
        <NavLink value={'SignIn'} href={'/user/create'} />
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
  height: 25px;
`;

const RightComponents = styled.div`
  display: flex;
  align-items: center;
`;

const LeftComponents = styled.div`
  display: flex;
`;

export default Nav;
