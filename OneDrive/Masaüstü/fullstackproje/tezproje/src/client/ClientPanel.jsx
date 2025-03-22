import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ClientPanel() {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState(null); 

useEffect(()=>{
  const clientcheck = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');  

    if (!token || role !== 'user') {  
      navigate("/clientregister"); 
    }
  };
  clientcheck();
},[clientcheck])
 

 
  useEffect(() => {
    clientcheck(); 
  }, []);


  const userdatagetir = async () => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      navigate("/login"); 
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/api/users/data", {
        headers: {
          Authorization: `Bearer ${token}`, // Token'ı API isteğine dahil ediyoruz
        },
      });
      setuserdata(response.data); // Veriyi state'e set etme
    } catch (error) {
      console.error("Veri getirilirken hata oluştu:", error);
 
    }
  };


  useEffect(() => {
    userdatagetir(); 
  }, []);


  const clientlogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <div>
      <button type="button" onClick={clientlogout}>Çıkış</button>
    
      {userdata && (
        <div>
          <h2>Kullanıcı Verisi</h2>
          <pre>{JSON.stringify(userdata, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ClientPanel;
