import styled from 'styled-components';
import { motion } from 'framer-motion';
import TextMain from '@components/TextMain';
import FormText from '@components/FormText';
import { useForm, FieldErrors } from 'react-hook-form';
import Hr from '@components/Hr';
import Github from '@components/icons/github';
import Link from 'next/link';
import Image from 'next/image';
import mainImage from '@/assets/mainImage.png';

interface FormState {
  id: string;
  password: string;
}

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const onValid = (data: FormState) => {
    console.log('valid', data);
  };

  console.log(errors);

  const onInvalid = (err: FieldErrors) => {};

  return (
    <>
      <IC>
        <Image src={mainImage} alt="mainImage" />
      </IC>
      <TextMain>
        <div>Hello.</div>
        <div>We`re</div>
        <div>Goose-Player</div>
      </TextMain>
      <Container>
        <TopWrapper>
          <Title>Sign in</Title>
          <Form onSubmit={handleSubmit(onValid, onInvalid)}>
            <FormText>ID {errors.id ? errors.id.message : null}</FormText>
            <Input
              {...register('id', {
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
              PW {errors.password ? errors.password.message : null}
            </FormText>
            <Input
              {...register('password', {
                required: 'is required',
                minLength: {
                  value: 4,
                  message: 'longer more than 4',
                },
              })}
              type="password"
              placeholder="Password"
            />
            <Submit>create</Submit>
          </Form>
          <SocialText>SignIn with Social</SocialText>
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
    </>
  );
};

export default Create;

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

const Input = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  background: none;
  font-weight: 600;
  border-bottom: solid 2px ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.color};
  :focus {
    outline: none;
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.color};
    border-bottom: solid 2px ${({ theme }) => theme.color};
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

const IC = styled.div`
  position: absolute;
  z-index: -10;
  right: 0;
  bottom: 0;
  //transform: rotateY(180deg);
  img {
    transition: 0s ease-in-out;
    //height: 800px;
    //width: auto;
    filter: saturate(3) sepia(70%) grayscale(90%)
      drop-shadow(0px 0px 2px ${({ theme }) => theme.imgFilter});
  }

  //drop-shadow(0px 0px 0px ${({ theme }) => theme.color})
  //grayscale(10%) sepia(80%)
`;

/*
{ filter: saturate(3), 
  grayscale(100%), 
  contrast(160%), 
  brightness(0.25), 
  blur(3px), 
  invert(100%), 
  sepia(100%), 
  opacity(50%); 
*/
