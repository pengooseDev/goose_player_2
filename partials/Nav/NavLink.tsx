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
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  padding: 5px;
  transition: ease-in-out 0.1s;
  box-sizing: border-box;
  margin: 0 0.5em 0 0.5em;
  height: 30px;
  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.color};
  }
`;

export default NavLink;
