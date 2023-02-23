import styled from 'styled-components';
import { motion } from 'framer-motion';
import FormText from '@components/FormText';
import ErrorMessage from '@components/ErrorMessage';
import { useForm } from 'react-hook-form';
import Hr from '@components/Hr';
import Github from '@components/icons/github';
import Link from 'next/link';
import { useMutation } from 'react-query';
import logInUser from '@/libs/client/logInUser';
import { useRouter } from 'next/router';
import { LogInFormState } from '@/libs/types/Forms';

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormState>();

  const { mutate, data, isLoading } = useMutation(logInUser, {
    onSuccess: (data, context) => {
      router.push('/');
      console.log('success');
    },

    onError: (error) => {
      alert('ID does not exist'); //추후 모달창으로 변경
      console.log('failed', error);
    },
  });

  const onValid = async (data: LogInFormState) => {
    const { logInId, logInPassword } = data;
    mutate({ id: logInId, password: logInPassword });
  };

  return (
    <Container>
      <TopWrapper>
        <Title>Log in </Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <FormText>
            <div>ID</div>
            <ErrorMessage>
              {errors.logInId ? errors.logInId.message : null}
            </ErrorMessage>
          </FormText>
          <Input
            errorId={!!errors.logInId}
            {...register('logInId', {
              required: 'is required',
              minLength: {
                value: 4,
                message: 'longer more than 4',
              },
              validate: (value) => {
                const hasAlpha = !!value.match(/[a-zA-Z]/g);

                return hasAlpha ? true : 'must be include alpha';
              },
            })}
            type="text"
            placeholder="ID"
          />
          <FormText>
            <div>PW</div>
            <ErrorMessage>
              {errors.logInPassword ? errors.logInPassword.message : null}
            </ErrorMessage>
          </FormText>

          <Input
            errorId={!!errors.logInPassword}
            {...register('logInPassword', {
              required: 'is required',
              minLength: {
                value: 4,
                message: 'longer more than 4',
              },
            })}
            type="password"
            placeholder="Password"
          />
          <Submit>Login</Submit>
        </Form>
        <SocialText>LogIn with Social</SocialText>
        <Hr></Hr>
        <SocialContainer>
          <Github />
        </SocialContainer>
      </TopWrapper>
      <BottomWrapper>
        <SocialText>Or Sign Up Using</SocialText>
        <Link href="/login">login</Link>
      </BottomWrapper>
    </Container>
  );
};

export default Login;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;
  gap: 5px;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const SocialText = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  opacity: 0.7;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-top: 20px;
`;

const TopWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 700px;
  border-radius: 5px;
  left: calc(50% - 250px);
  top: calc(50% - 400px);
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.blurBackground};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.color};
  backdrop-filter: blur(3px);
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ease-in-out 0.15s;
`;

const Title = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Input = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  background: none;
  font-weight: 600;
  border-bottom: solid 2px
    ${(props) => (props.errorId ? 'red' : props.theme.color)};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.color};
  :focus {
    outline: none;
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.colorTransparent};
  }
`;

const Submit = styled.button`
  margin: 30px 0 30px 0;
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
