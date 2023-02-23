import axios from 'axios';
import { logInId, logInPassword } from '@/libs/types/Forms';

interface LoginUserProps {
  id: logInId;
  password: logInPassword;
}

const createUser = async ({ id, password }: LoginUserProps) => {
  await axios({
    url: `${process.env.NEXT_PUBLIC_ROOT_ROUTE}/api/user`,
    method: 'post',
    data: { id, password },
  });
};

export default createUser;
