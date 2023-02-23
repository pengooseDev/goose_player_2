import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return res.status(500).json({ ok: false });

    case 'POST':
      return res.status(200).json({ ok: true, data: '성공! 받아온 값입니다' });

    case 'PUT':
      return res.status(500).json({ ok: false, message: '' });

    case 'DELETE':
      return res.status(500).json({ ok: false, message: '' });

    default:
      return res.status(500).json({ ok: false, message: '' });
  }
};

export default handler;
