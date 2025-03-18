import { Link } from 'react-router-dom';
import React from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "./schemas/Registeryup";
import axios from "axios";

function RegisterForm() {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordagain: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/register", values);
        console.log(response.data);
      } catch (error) {
        console.error("Kayıt işlemi başarısız oldu:", error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-posta adresiniz"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <div>{errors.email}</div>}
        
        <input
          type="password"
          name="password"
          placeholder="Şifreniz"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <div>{errors.password}</div>}
        
        <input
          type="password"
          name="passwordagain"
          placeholder="Şifreyi Tekrar Girin"
          value={values.passwordagain}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordagain && <div>{errors.passwordagain}</div>}
        
        <hr />
        <p>Yaşınızı Girin</p>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && <div>{errors.age}</div>}
        
        <button type="submit">Kayıt Ol</button>
      </form>

      <p>Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link></p> {/* Login sayfasına yönlendirme */}
    </div>
  );
}

export default RegisterForm;
