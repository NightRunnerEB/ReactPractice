import { Request, Response } from 'express';
import axios from 'axios';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении постов' });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (response.data) {
      res.json(response.data);
    } else {
      res.status(404).json({ error: 'Пост не найден' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении поста' });
  }
};
