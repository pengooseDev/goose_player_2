import { NextApiRequest, NextApiResponse } from 'next';
import prismaClient from '@/libs/server/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { id: postNickname, password: postPassword } = req.body;

      const isDuplicateName = !!(await prismaClient.user.findUnique({
        where: { nickname: postNickname },
      }));

      if (isDuplicateName)
        return res
          .status(409)
          .redirect('/user/create')
          .json({ error: 'Duplicated ID!' });

      const newUser = await prismaClient.user.create({
        data: {
          nickname: postNickname,
          password: postPassword,
        },
      });

      console.log(newUser);
      return res.status(200).json({ ok: true, data: '성공! 받아온 값입니다' });

    default:
      return res.status(500).end();
  }
};

export default handler;

const checkDuplicateByNickname = async (nickname: string) => {
  const isDuplicated = !!(await prismaClient.user.findUnique({
    where: { nickname: nickname },
  }));

  if (isDuplicated) return true;

  return false;
};
