import styled from 'styled-components';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <Container>
      <LeftComponents></LeftComponents>
      <RightComponents>
        <NavLink value={'HOME'} href={'/'} />
        <NavLink value={'Example'} href={'#'} />
      </RightComponents>
    </Container>
  );
};

const Container = styled.div`
  background: #111;
  position: fixed;
  padding: 10px;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 30px;
`;

const RightComponents = styled.div`
  display: flex;
`;

const LeftComponents = styled.div`
  display: flex;
`;

export default Nav;
