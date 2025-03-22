import pool from '../database/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Secret_key = process.env.Secret_Key;


 export const newuserdatapost = async (req, res) => {
    const { tel, email, name, surname, password, role } = req.body;
    
    try {
        const userkontrol = await pool.query("SELECT * FROM users WHERE tel = $1", [tel]);

        if (userkontrol.rows.length === 0) {
            const hashedpassword = await bcrypt.hash(password, 10);
            
            await pool.query(
                "INSERT INTO users (tel, email, name, surname, password, role) VALUES ($1, $2, $3, $4, $5, $6)",
                [tel, email, name, surname, hashedpassword, role || 'user']
            );

            return res.status(200).json({ message: "Kayıt başarılı" });
        } else {
            return res.status(400).json({ message: "Bu telefon numarası zaten kayıtlı" });
        }
    } catch (error) {
        console.error("Hata:", error);
        return res.status(500).json({ message: "Sunucu hatası" });
    }
};
export const userloginpost = async (req, res) => {
    const { tel, password } = req.body;

    try {
        // Kullanıcıyı veritabanında arama
        const logincheck = await pool.query("SELECT * FROM users WHERE tel = $1", [tel]);

        if (logincheck.rows.length === 0) {
            console.error("Böyle bir kullanıcı bulunamadı:", tel); // Kullanıcı bulunamadığında hata logu
            return res.status(400).json({ error: "Böyle bir kullanıcı bulunamadı" });
        }

        const user = logincheck.rows[0];
        
        // Şifreyi kontrol etme
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            console.error("Şifre yanlış:", tel); // Şifre eşleşmiyorsa hata logu
            return res.status(400).json({ error: "Şifre yanlış" });
        }

        // JWT oluşturma
        const token = jwt.sign(
            { tel: user.tel, email: user.email, role: user.role },
            Secret_key,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ message: "Giriş başarılı", token });

    } catch (error) {
        console.error("Server hatası:", error.message); // Genel server hatasını logla
        return res.status(500).json({ error: "Server hatası", details: error.message });
    }
};
