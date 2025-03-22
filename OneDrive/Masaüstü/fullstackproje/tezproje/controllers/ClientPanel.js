import pool from '../database/database.js';

export const getuserdata = async (req, res) => {
  const { tel, email, name, surname } = req.body;

  try {
    
    const token = req.headers.authorization?.split(' ')[1]; // Token'ı header'dan al
    if (!token) {
      return res.status(401).json({ message: 'Token bulunamadı.' });
    }

    // Veritabanından kullanıcı verisini sorgulama (örneğin, e-posta ile)
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }

    // Eğer kullanıcı bulunduysa, veriyi döndürüyoruz
    const user = result.rows[0];
    return res.status(200).json(user);

  } catch (error) {
    console.error('Veri getirilirken bir hata oluştu:', error);
    return res.status(500).json({ message: 'Sunucu hatası.' });
  }
};
