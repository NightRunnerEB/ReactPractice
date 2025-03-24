import express from 'express';
import { Server } from 'socket.io';
import axios from 'axios';

const app = express();
const port = 3001;

let clients: string[] = [];

app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении постов' });
  }
});

app.get('/posts/:id', async (req, res) => {
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
});

const server = app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Новый пользователь подключен:', socket.id);

  clients.push(socket.id);

  socket.on('message', (message) => {
    console.log('Сообщение от клиента:', message);

    socket.broadcast.emit('message', {
      sender: socket.id,
      message: message,
    });
  });

  socket.on('disconnect', () => {
    console.log('Пользователь отключился:', socket.id);

    clients = clients.filter(client => client !== socket.id);
  });
});
