import { NextApiRequest, NextApiResponse } from 'next';
import prismaClient from '@/libs/server/client';
import hashBySort from '@/libs/server/hashing';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { id: postNickname, password: postPassword } = req.body;

      return res.status(200).json({ ok: true });

    default:
      return res.status(500).end();
  }
};

export default handler;
