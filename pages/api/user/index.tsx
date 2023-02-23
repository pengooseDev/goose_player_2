import { NextApiRequest, NextApiResponse } from 'next';
import prismaClient from '@/libs/server/client';
import { decrypt } from '@/libs/server/hashing';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { id: loginNickname, password: loginPassword } = req.body;
      const user = await prismaClient.user.findUnique({
        where: { nickname: loginNickname },
      });

      if (!user)
        return res
          .status(400)
          .json({ ok: false, errorMessage: 'Not Exist ID' });

      const { password } = user;
      const isMatch = await decrypt(loginPassword, password);
      if (!isMatch) return res.status(400).json({ errorMessage: 'Wrong PW' });

      return res.status(200).json({ ok: true });

    default:
      return res.status(500).end();
  }
};

export default handler;
