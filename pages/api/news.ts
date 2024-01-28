// pages/api/news.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import newsData from '../../app/data/news.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(newsData);
}
