import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Forgetpasswordyup } from './schemas/ForgetPasswordyup';


function ForgetPassword() {

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordagain: "",
    },
    validationSchema: Forgetpasswordyup, 
    onSubmit: async (values) => {
      try {
        const response = await axios.patch("/passwordrefresh", values);
        console.log(response.data);
      } catch (error) {
        console.log("Hata var", error);
      }
    },
  });
  

  return (
  <>
 <form onSubmit={handleSubmit}>
  <input
    type="email"
    name="email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur} 
    placeholder="E-posta"
  />
  {touched.email && errors.email && <div>{errors.email}</div>}

  <input
    type="password"
    name="password"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur} 
    placeholder="Yeni Şifre"
  />
  {touched.password && errors.password && <div>{errors.password}</div>}

  <input
    type="password"
    name="passwordagain"
    value={values.passwordagain}
    onChange={handleChange}
    onBlur={handleBlur} 
    placeholder="Şifre Tekrar"
  />
  {touched.passwordagain && errors.passwordagain && <div>{errors.passwordagain}</div>}

  <button type="submit">Şifreyi Güncelle</button>
</form>

  
  </>
  )
}

export default ForgetPassword
