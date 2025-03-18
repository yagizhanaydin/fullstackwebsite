import React from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import loginyup from '../schemas/Register'

function Register() {

  const userlogin = useFormik({
    initialValues: {
      tel: "",
      email: "",
      name: "",
      surname: "",
      password: "",
      passwordagain: "",
    },
    validationSchema: loginyup,
    onSubmit: async (values) => {
      try {
        const registeruser = await axios.post("/clientregister", values);
        console.log('Kayıt başarılı', registeruser.data);
      } catch (error) {
        console.log("Kayıt başarısız", error);
      }
    }
  });

  return (
    <>
      <h2>Üye ol</h2>
      <form onSubmit={userlogin.handleSubmit}>
        <input 
          type="tel"
          name="tel"
          value={userlogin.values.tel}
          onChange={userlogin.handleChange}
          onBlur={userlogin.handleBlur}
        />
        {userlogin.touched.tel && userlogin.errors.tel && (
          <div>{userlogin.errors.tel}</div>
        )}

        <input 
          type="email"
          name="email"
          value={userlogin.values.email}
          onChange={userlogin.handleChange}
          onBlur={userlogin.handleBlur}
        />
        {userlogin.touched.email && userlogin.errors.email && (
          <div>{userlogin.errors.email}</div>
        )}

        <input 
          type="text"
          name="name"
          value={userlogin.values.name}
          onChange={userlogin.handleChange}
          onBlur={userlogin.handleBlur}
        />
        {userlogin.touched.name && userlogin.errors.name && (
          <div>{userlogin.errors.name}</div>
        )}

        <input 
          type="text"
          name="surname"
          value={userlogin.values.surname}
          onChange={userlogin.handleChange}
          onBlur={userlogin.handleBlur}
        />
        {userlogin.touched.surname && userlogin.errors.surname && (
          <div>{userlogin.errors.surname}</div>
        )}

        <input 
          type="password" 
          name="password"
          value={userlogin.values.password}
          onChange={userlogin.handleChange}
          onBlur={userlogin.handleBlur}
        />
        {userlogin.touched.password && userlogin.errors.password && (
          <div>{userlogin.errors.password}</div>
        )}

        <input
          type="password"
          name="passwordagain"
          value={userlogin.values.passwordagain}
          onChange={userlogin.handleChange}
          onBlur={userlogin.handleBlur}
        />
        {userlogin.touched.passwordagain && userlogin.errors.passwordagain && (
          <div>{userlogin.errors.passwordagain}</div>
        )}

        <button type="submit">Üye ol</button>
      </form>
    </>
  )
}

export default Register;
