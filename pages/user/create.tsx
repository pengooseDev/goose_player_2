import styled from 'styled-components';
import { motion } from 'framer-motion';
import TextMain from '@components/TextMain';
import FormText from '@components/FormText';
import { useForm } from 'react-hook-form';
import Hr from '@components/Hr';
import Github from '@components/icons/github';
import Link from 'next/link';

const Create = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <TextMain>
        <div>Hello.</div>
        <div>We`re</div>
        <div>Goose-Player</div>
      </TextMain>
      <Container>
        <Title>Sign in</Title>
        <Form>
          <FormText>ID</FormText>
          <Input type="text" />
          <FormText>PW</FormText>
          <Input type="password" />
          <Submit>create</Submit>
        </Form>
        <BottomWrapper>
          <AnchorWrapper>
            <Link href="/login">login</Link>
          </AnchorWrapper>
          <Hr></Hr>
          <SocialWrapper>
            <Github />
            <Link href="/login">login</Link>
          </SocialWrapper>
        </BottomWrapper>
      </Container>
    </>
  );
};

export default Create;

const Container = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  left: calc(50% - 250px);
  top: calc(50% - 300px);
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.blurBackground};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.color};
  backdrop-filter: blur(3px);
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in-out 0.15s;
`;

const Title = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: start;
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  background: none;
  font-weight: 600;
  border-bottom: solid 2px ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px 10px 0 0;
  :focus {
    outline: none;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border-bottom: solid 2px ${({ theme }) => theme.color};
  }
`;

const Submit = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  font-size: 20px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const SocialWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const AnchorWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
