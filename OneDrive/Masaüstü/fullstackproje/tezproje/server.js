const express=require('express');
const dotenv=require('dotenv');
const  path=require('path');
const cors=require('cors');

dotenv.config();

const PORT=process.env.PORT || 3000;

const server=express();

server.listen(PORT,()=>{
    console.log('Server 3000 portunda çalışıyor');
});