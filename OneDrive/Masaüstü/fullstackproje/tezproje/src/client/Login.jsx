import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { loginuseryup } from "../schemas/Loginyup";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = useFormik({
    initialValues: {
      tel: "",
      password: ""
    },
    validationSchema: loginuseryup,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/api/users/login", values);

        console.log(response.data);

        // Token'ı localStorage'a kaydetme
        localStorage.setItem('token', response.data.token); // Token kaydedildi

      
        navigate("/clientpanel");
      } catch (error) {
        console.error("Giriş başarısız:", error.response?.data || error.message);
      }
    }
  });

  return (
    <>
      <form onSubmit={login.handleSubmit}>
        <input
          type="tel"
          name="tel"
          placeholder="Telefon Numarası"
          value={login.values.tel}
          onChange={login.handleChange}
          onBlur={login.handleBlur}
        />
        {login.touched.tel && login.errors.tel && <div>{login.errors.tel}</div>}

        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={login.values.password}
          onChange={login.handleChange}
          onBlur={login.handleBlur}
        />
        {login.touched.password && login.errors.password && <div>{login.errors.password}</div>}

        <button type="submit">Giriş Yap</button>
      </form>
    </>
  );
}

export default Login;
