import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const MainText = () => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence>
      {asPath === '/' ? (
        <Wrapper>
          <div>Hello.</div>
          <div>We`re</div>
          <div>
            <TextMotion
              variants={textVariants}
              initial="from"
              animate="to"
              exit="exit"
            >
              Goose-Player
            </TextMotion>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <div>Hello.</div>
          <div>We`re</div>
          <div>
            <TextMotion
              variants={textVariants}
              initial="from"
              animate="to"
              exit="exit"
            >
              Auth
            </TextMotion>
          </div>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default MainText;

const textVariants = {
  from: { opacity: 0, left: -300, transition: { duration: 1 } },
  to: { opacity: 1, top: 0, transition: { duration: 1 } },
  exit: { opacity: 0, right: 300, transition: { duration: 1 } },
};

const TextMotion = styled(motion.div)``;

const Wrapper = styled.div`
  padding: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -5;
  font-weight: 500;
  font-size: 150px;
  display: flex;
  flex-direction: column;
  transition: ease-in-out 1s;

  :nth-child(2) :last-child {
    transition: ${({ theme }) => theme.transitionOption};
    -webkit-text-stroke: 2px ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    font-size: 100px;
  }
`;
