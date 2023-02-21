import styled from 'styled-components';
import NavLink from './NavLink';
import ToggleBtn from './ThemeToggle';

const Nav = () => {
  return (
    <Container>
      <NavLink value={'Home'} href={'/'} />
      <NavLink value={'LogIn'} href={'/user/login'} />
      <NavLink value={'SignIn'} href={'/user/create'} />
      <ToggleBtn />
    </Container>
  );
};

const Container = styled.div`
  gap: 15px;
  position: fixed;
  margin: 15px;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 25px;
`;

export default Nav;
