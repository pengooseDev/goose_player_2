import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const MainText = () => {
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <Wrapper>
      <div>Hello.</div>
      <div>We`re</div>
      <div>
        <AnimatePresence>
          {asPath === '/' ? (
            <TextMotion
              variants={textVariants}
              initial="from"
              animate="to"
              exit="exit"
              layoutId="themeText"
            >
              Goose-Player
            </TextMotion>
          ) : (
            <TextMotion
              variants={textVariants}
              initial="from"
              animate="to"
              exit="exit"
              layoutId="themeText"
            >
              Auth
            </TextMotion>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
};

export default MainText;

const textVariants = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const TextMotion = styled(motion.div)``;

const Wrapper = styled.div`
  padding: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -5;
  font-weight: 500;
  font-size: 150px;
  display: flex;
  flex-direction: column;
  transition: ease-in-out 1s;

  :nth-child(2) :last-child {
    transition: ease-in-out 0.2s;
    -webkit-text-stroke: 2px ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    font-size: 100px;
  }
`;
