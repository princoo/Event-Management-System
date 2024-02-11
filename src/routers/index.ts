import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/demo', (request: Request, res: Response) => {
  res.status(200).json({ message: 'domo' });
});

export default router;
