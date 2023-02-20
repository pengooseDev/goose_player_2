import styled from 'styled-components';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <Container>
      <LeftComponents></LeftComponents>
      <RightComponents>
        <NavLink value={'HOME'} href={'/'} />
        <NavLink value={'Example'} href={'/example'} />
      </RightComponents>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 10px;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 47px;
  a {
    margin: 0 0.5em 0 0.5em;
  }
`;

const RightComponents = styled.div`
  display: flex;
`;

const LeftComponents = styled.div`
  display: flex;
`;

export default Nav;
