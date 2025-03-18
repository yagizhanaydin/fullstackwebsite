import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import indirImage from '../image/indir.jpg';
import '../assets/adminpanel.css';
import adminImage from '../image/görsel2.jpg'
import adminImage2 from '../image/görsel3.jpg'

function AdminPanel() {
    const navigate = useNavigate();

    const gitkitapekle = () => {
        navigate("/AdminKitapEkleme");
    };

 const gitresimyükle=()=>{
    navigate("/AdminPanelResimYükle")
 }

 const kitapkisitlama=()=>{
    navigate("/AdminKitapKısıtlama")
 }

const kitaplarimagit=()=>{
    navigate("/AdminKitapGörüntüleme")
}

    return (
        <>
            <h1>Admin Panel</h1>
            <div className="image-container" onClick={gitkitapekle}>
                <img src={indirImage}  className="admin-image" />
                <div className="hover-text">Bölüm Yükle</div>
            </div>
            <div className="image-container" onClick={gitresimyükle}>
                <img src={adminImage}  className="admin-image" />
                <div className="hover-text">Kitap Ekle</div>
            </div>
            <div className="image-container" onClick={kitapkisitlama}>
                <img src={adminImage2}  className="admin-image" />
                <div className="hover-text">Age Kısıtla</div>
            </div>
            <div className="image-container" onClick={kitaplarimagit}>
                <img src={adminImage2}  className="admin-image" />
                <div className="hover-text">Kitaplarımı Görüntüle</div>
            </div>
        </>
    );
}

export default AdminPanel;
