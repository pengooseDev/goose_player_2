import { NextApiRequest, NextApiResponse } from 'next';
import prismaClient from '@/libs/server/client';
import hashBySort from '@/libs/server/hashing';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { id: postNickname, password: postPassword } = req.body;
      const isDuplicateName = await checkDuplicateByNickname(postNickname);
      if (isDuplicateName)
        return res
          .status(409)
          .json({ ok: false, errorMessage: 'Duplicated ID' });

      const hashedPassword = await hashBySort(postPassword, 10);

      const newUser = await prismaClient.user.create({
        data: {
          nickname: postNickname,
          password: hashedPassword,
        },
      });

      return res.status(200).json({ ok: true, data: newUser.nickname });

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
