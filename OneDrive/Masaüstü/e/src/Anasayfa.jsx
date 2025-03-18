import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Anasayfa() {
  const [kitaplar, setKitaplar] = useState([]); 
  const [book, setBook] = useState(1);

  const pozitifbook = () => {
    setBook(book + 1);
  };

  const negativbook = () => {
    setBook(book - 1);
  };

  const bookcomehere = async () => {
    try {
      const response = await axios.get("/books");
      setKitaplar(response.data); // API'den gelen kitapları state'e kaydet
    } catch (error) {
      console.error("API çağrısı sırasında bir hata oluştu", error);
    }
  };

  useEffect(() => {
    bookcomehere(); // Sayfa ilk yüklendiğinde kitapları getir
  }, []);

  return (
    <>
      <button onClick={pozitifbook}>+</button>
      <button onClick={negativbook}>-</button>
      <div>Toplam tutar: {book}$</div>

      <div>
        <h3>Kitaplar:</h3>
        {kitaplar.length > 0 ? (
          <ul>
            {kitaplar.map((kitap, index) => (
              <li key={index}>{kitap.title}</li> // Kitap başlığını yazdırıyoruz
            ))}
          </ul>
        ) : (
          <div>Kitaplar yükleniyor...</div>
        )}
      </div>
    </>
  );
}

export default Anasayfa;
