import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; 

function AdminKitapGörüntüleme() {
  const [kitaplar, setKitaplar] = useState([]);

  const yazarkitapgetir = async () => {
    try {
      const token = localStorage.getItem('token'); 

      const response = await axios.get('/kitaplarigetir', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      setKitaplar(response.data);
    } catch (error) {
      console.error('Kitapları getirirken hata oluştu:', error);
    }
  };

  useEffect(() => {
    yazarkitapgetir();
  }, []);

  return (
    <div>
      <h2>Kitap Listesi</h2>
      <ul>
        {kitaplar.map((kitap) => (
          <li key={kitap.id}>{kitap.adi}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminKitapGörüntüleme;
