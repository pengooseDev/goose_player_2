import axios from 'axios';

interface CreateUserProps {
  id: string;
  password: string;
}

const createUser = async ({ id, password }: CreateUserProps) => {
  axios({
    url: `${process.env.NEXT_PUBLIC_ROOT_ROUTE}/api/user`,
    method: 'post',
    data: { id, password },
  });
};

export default createUser;
