import styled from 'styled-components';
import Link from 'next/link';

interface navLinkProps {
  value: string;
  href: string;
}

const NavLink = ({ href, value }: navLinkProps) => {
  return (
    <Link href={href}>
      <Btn>{value}</Btn>
    </Link>
  );
};

const Btn = styled.div`
  color: #88ce02;
  font-weight: 600;
  padding: 3px;
  transition: ease-in-out 0.1s;
  box-sizing: border-box;
  margin: 0 0.5em 0 0.5em;
  height: 25px;
  :hover {
    border-bottom: 3px solid white;
    font-weight: 600;
  }
`;

export default NavLink;
