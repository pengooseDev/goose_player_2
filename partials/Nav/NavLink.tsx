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
  transition: ease-in-out 0.1s;
  box-sizing: border-box;
  height: 30px;
  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.color};
  }
`;

export default NavLink;
