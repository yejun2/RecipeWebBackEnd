// index.js

const express = require('express');
const app = express();
const port = 4000;

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 다른 API 예시 (예: /api/users)
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  res.json(users);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
