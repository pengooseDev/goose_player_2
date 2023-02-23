import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface navLinkProps {
  value: string;
  href: string;
}

const NavLink = ({ href, value }: navLinkProps) => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={href}>
        <Btn>{value}</Btn>
      </Link>
      <AnimatePresence>
        {!isHover && router.asPath === href ? (
          <Dot
            layoutId={href}
            variants={hoverVariants}
            initial="from"
            animate="to"
            exit="exit"
          />
        ) : isHover ? (
          <Dash
            layoutId={href}
            variants={hoverVariants}
            initial="from"
            animate="to"
            exit="exit"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default NavLink;

const Wrapper = styled.div`
  position: relative;
`;

const Btn = styled.div`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  transition: ease-in-out 0.1s;
  box-sizing: border-box;
  height: 30px;
`;

const Dot = styled(motion.div)`
  position: absolute;
  left: calc(50% - 10%);
  bottom: 0px;
  width: 20%;
  height: 3px;
  border-radius: 3px;
  background: ${({ theme }) => theme.color};
`;

const Dash = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: ${({ theme }) => theme.color};
`;

const hoverVariants = {
  from: { opacity: 1 },
  to: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
