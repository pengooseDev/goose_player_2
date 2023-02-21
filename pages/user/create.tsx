import styled from 'styled-components';
import { motion } from 'framer-motion';
import TextMain from '@components/TextMain';

const Create = () => {
  return (
    <>
      <TextMain>
        <div>Hello.</div>
        <div>We`re</div>
        <div>Goose-Player</div>
      </TextMain>
      <Wrapper>
        <Form></Form>
      </Wrapper>
    </>
  );
};

export default Create;

const Wrapper = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 600px;
  border-radius: 5px;
  left: calc(50% - 200px);
  top: calc(50% - 300px);
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.blurBackground};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.color};
  backdrop-filter: blur(3px);

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in-out 0.15s;
`;

const Form = styled.div``;
