import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientPanel() {
  const navigate = useNavigate();

  const clientcheck = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');  

    if (!token || role !== 'user') {  // Token yoksa veya rol yanlışsa
      navigate("/clientregister");
    }
  }

  useEffect(() => {
    clientcheck();
  }, []);



  return (
    <>
      <button type="button" onClick={clientlogout}>Çıkış</button>
    </>
  );
}

export default ClientPanel;
