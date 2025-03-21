import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';  

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = express();

// CORS yapılandırması
const frontbackendbaglanti = ['http://localhost:5173']; // Vite sunucusunun portu, backend'e istek atacak

server.use(cors({
  origin: frontbackendbaglanti,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

server.use(express.json()); // JSON body parsing için

// Kullanıcılar için route
server.use('/api/users', userRoutes);

// Sunucuyu başlat
server.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
