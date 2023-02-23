import axios from 'axios';
import { signInId, signInPassword } from '@/libs/types/Forms';

interface CreateUserProps {
  id: signInId;
  password: signInPassword;
}

const createUser = async ({ id, password }: CreateUserProps) => {
  await axios({
    url: `${process.env.NEXT_PUBLIC_ROOT_ROUTE}/api/user/create`,
    method: 'post',
    data: { id, password },
  });
};

export default createUser;
